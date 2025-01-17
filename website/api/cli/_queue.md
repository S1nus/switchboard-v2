
interact with a switchboard oracle queue account

* [`sbv2 queue:add:crank QUEUEKEY`](#sbv2-queueaddcrank-queuekey)
* [`sbv2 queue:create`](#sbv2-queuecreate)
* [`sbv2 queue:permit:aggregator AGGREGATORKEY`](#sbv2-queuepermitaggregator-aggregatorkey)
* [`sbv2 queue:permit:oracle ORACLEKEY`](#sbv2-queuepermitoracle-oraclekey)
* [`sbv2 queue:set:rewards QUEUEKEY REWARDS`](#sbv2-queuesetrewards-queuekey-rewards)
* [`sbv2 queue:set:vrf QUEUEKEY`](#sbv2-queuesetvrf-queuekey)

## `sbv2 queue:add:crank QUEUEKEY`

add a crank to an existing oracle queue

```
USAGE
  $ sbv2 queue:add:crank QUEUEKEY

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create a crank on

OPTIONS
  -h, --help                       show CLI help

  -k, --keypair=keypair            keypair that will pay for onchain transactions. defaults to new account authority if
                                   no alternate authority provided

  -n, --name=name                  name of the crank for easier identification

  -r, --maxRows=maxRows            maximum number of rows a crank can support

  -s, --silent                     suppress cli prompts

  -u, --rpcUrl=rpcUrl              alternate RPC url

  -v, --verbose                    log everything

  --mainnetBeta                    WARNING: use mainnet-beta solana cluster

  --programId=programId            alternative Switchboard program ID to interact with

  --queueAuthority=queueAuthority  alternative keypair to use for queue authority

EXAMPLE
  $ sbv2 queue:add:crank 5aYuxRdcB9GpWrEXVMBQp2R5uf94uoBiFdMEBwcmHuU4 -k ../authority-keypair.json -n crank-1
```

_See code: [src/commands/queue/add/crank.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/queue/add/crank.ts)_

## `sbv2 queue:create`

create a custom queue

```
USAGE
  $ sbv2 queue:create

OPTIONS
  -a, --authority=authority          keypair to delegate authority to for creating permissions targeted at the queue
  -c, --crankSize=crankSize          [default: 100] size of the crank
  -f, --outputFile=outputFile        output queue schema to a json file
  -h, --help                         show CLI help

  -k, --keypair=keypair              keypair that will pay for onchain transactions. defaults to new account authority
                                     if no alternate authority provided

  -n, --name=name                    [default: Custom Queue] name of the queue for easier identification

  -o, --numOracles=numOracles        number of oracles to add to the queue

  -o, --oracleTimeout=oracleTimeout  [default: 180] number of oracles to add to the queue

  -r, --reward=reward                [default: 0] oracle rewards for successfully responding to an update request

  -s, --silent                       suppress cli prompts

  -u, --rpcUrl=rpcUrl                alternate RPC url

  -v, --verbose                      log everything

  --enableBufferRelayers             enable oracles to fulfill buffer relayer requests

  --force                            overwrite output file if existing

  --mainnetBeta                      WARNING: use mainnet-beta solana cluster

  --minStake=minStake                [default: 0] minimum stake required by an oracle to join the queue

  --programId=programId              alternative Switchboard program ID to interact with

  --queueSize=queueSize              [default: 100] maximum number of oracles the queue can support

  --unpermissionedFeeds              permit unpermissioned feeds

  --unpermissionedVrf                permit unpermissioned VRF accounts

ALIASES
  $ sbv2 custom:queue
```

_See code: [src/commands/queue/create.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/queue/create.ts)_

## `sbv2 queue:permit:aggregator AGGREGATORKEY`

permit an aggregator to use an oracle queue's resources

```
USAGE
  $ sbv2 queue:permit:aggregator AGGREGATORKEY

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to authorize oracle queue usage

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for oracle queue
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with

EXAMPLE
  $ sbv2 queue:permit:aggregator 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4 --keypair ../queue-authority.json
```

_See code: [src/commands/queue/permit/aggregator.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/queue/permit/aggregator.ts)_

## `sbv2 queue:permit:oracle ORACLEKEY`

permit an oracle to heartbeat on a queue

```
USAGE
  $ sbv2 queue:permit:oracle ORACLEKEY

ARGUMENTS
  ORACLEKEY  public key of the oracle account to authorize oracle queue usage

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for oracle queue
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with

EXAMPLE
  $ sbv2 queue:permit:oracle 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4 --keypair ../queue-authority.json
```

_See code: [src/commands/queue/permit/oracle.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/queue/permit/oracle.ts)_

## `sbv2 queue:set:rewards QUEUEKEY REWARDS`

set an oracle queue's rewards

```
USAGE
  $ sbv2 queue:set:rewards QUEUEKEY REWARDS

ARGUMENTS
  QUEUEKEY  public key of the oracle queue
  REWARDS   token rewards for each assigned oracle per open round call

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for oracle queue
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with
```

_See code: [src/commands/queue/set/rewards.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/queue/set/rewards.ts)_

## `sbv2 queue:set:vrf QUEUEKEY`

add a crank to an existing oracle queue

```
USAGE
  $ sbv2 queue:set:vrf QUEUEKEY

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to create a crank on

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for oracle queue
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --disable                  disable unpermissionedVrfEnabled

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with
```

_See code: [src/commands/queue/set/vrf.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/queue/set/vrf.ts)_
