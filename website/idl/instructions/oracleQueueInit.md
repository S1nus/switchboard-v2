Create and initialize the OracleQueueAccount.

## Accounts

| Name          | isMut | isSigner | Description                                                                                                       |
| ------------- | ----- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| oracleQueue   | TRUE  | TRUE     |                                                                                                                   |
| authority     | FALSE | FALSE    | The account delegated as the authority for making account changes or assigning permissions targeted at the queue. |
| buffer        | TRUE  | FALSE    |                                                                                                                   |
| payer         | TRUE  | TRUE     |                                                                                                                   |
| systemProgram | FALSE | FALSE    | The Solana system program account.                                                                                |
| mint          | FALSE | FALSE    |                                                                                                                   |

## Params

| Field                         | Type                                    | Description                                                                                                                                                                    |
| ----------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name                          | u8[32]                                  | Name of the queue to store on-chain.                                                                                                                                           |
| metadata                      | u8[64]                                  | Metadata of the queue to store on-chain.                                                                                                                                       |
| reward                        | u64                                     | Rewards to provide oracles and round openers on this queue.                                                                                                                    |
| minStake                      | u64                                     | The minimum amount of stake oracles must present to remain on the queue.                                                                                                       |
| feedProbationPeriod           | u32                                     | After a feed lease is funded or re-funded, it must consecutively succeed N amount of times or its authorization to use the queue is auto-revoked.                              |
| oracleTimeout                 | u32                                     | Time period we should remove an oracle after if no response.                                                                                                                   |
| slashingEnabled               | bool                                    | Whether slashing is enabled on this queue.                                                                                                                                     |
| varianceToleranceMultiplier   | [BorshDecimal](/idl/types/BorshDecimal) | The tolerated variance amount oracle results can have from the accepted round result before being slashed. slashBound = varianceToleranceMultiplier \* stdDeviation Default: 2 |
| consecutiveFeedFailureLimit   | u64                                     | Consecutive failure limit for a feed before feed permission is revoked.                                                                                                        |
| consecutiveOracleFailureLimit | u64                                     | Consecutive failure limit for an oracle before oracle permission is revoked.                                                                                                   |
| queueSize                     | u32                                     | The size of the queue.                                                                                                                                                         |
| unpermissionedFeeds           | bool                                    | Enabling this setting means data feeds do not need explicit permission to join the queue.                                                                                      |
| unpermissionedVrf             | bool                                    |                                                                                                                                                                                |
| enableBufferRelayers          | bool                                    |                                                                                                                                                                                |
