import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  OracleQueueAccount,
  programWallet,
} from "@switchboard-xyz/switchboard-v2";
import chalk from "chalk";
import BaseCommand from "../../BaseCommand";
import { AggregatorIllegalRoundOpenCall } from "../../types";
import { CHECK_ICON } from "../../utils";

export default class AggregatorUpdate extends BaseCommand {
  static description = "request a new aggregator result from a set of oracles";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "aggregatorKey",
      required: true,
      parse: (pubkey: string) => new PublicKey(pubkey),
      description: "public key of the aggregator account to deserialize",
    },
  ];

  static examples = [
    "$ sbv2 aggregator:update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json",
  ];

  async run() {
    const { args } = this.parse(AggregatorUpdate);

    const aggregatorAccount = new AggregatorAccount({
      program: this.program,
      publicKey: args.aggregatorKey,
    });
    const aggregator = await aggregatorAccount.loadData();

    const oracleQueueAccount = new OracleQueueAccount({
      program: this.program,
      publicKey: aggregator.queuePubkey,
    });
    const queue = await oracleQueueAccount.loadData();

    const mint = await oracleQueueAccount.loadMint();

    const payoutWallet = (
      await mint.getOrCreateAssociatedAccountInfo(
        programWallet(this.program).publicKey
      )
    ).address;

    const aggregatorUpdateTxn = await aggregatorAccount.openRound({
      oracleQueueAccount,
      payoutWallet,
    });

    if (this.silent) {
      console.log(aggregatorUpdateTxn);
    } else {
      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}Aggregator update request sent to oracles`
        )}`
      );
      this.logger.log(
        `https://solscan.io/tx/${aggregatorUpdateTxn}?cluster=${this.cluster}`
      );
    }
  }

  async catch(error) {
    if (
      error instanceof AggregatorIllegalRoundOpenCall ||
      error.toString().includes("0x177d")
    ) {
      this.context.logger.info(error.toString());
      this.exit(0);
    }
    super.catch(error, "failed to open a new aggregator update round");
  }
}
