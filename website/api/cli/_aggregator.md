
interact with a switchboard aggregator account

* [`sbv2 aggregator:add:job AGGREGATORKEY`](#sbv2-aggregatoraddjob-aggregatorkey)
* [`sbv2 aggregator:create:copy AGGREGATORSOURCE`](#sbv2-aggregatorcreatecopy-aggregatorsource)
* [`sbv2 aggregator:create:json DEFINITIONFILE`](#sbv2-aggregatorcreatejson-definitionfile)
* [`sbv2 aggregator:lock AGGREGATORKEY`](#sbv2-aggregatorlock-aggregatorkey)
* [`sbv2 aggregator:permission:create AGGREGATORKEY`](#sbv2-aggregatorpermissioncreate-aggregatorkey)
* [`sbv2 aggregator:remove:job AGGREGATORKEY JOBKEY`](#sbv2-aggregatorremovejob-aggregatorkey-jobkey)
* [`sbv2 aggregator:set AGGREGATORKEY`](#sbv2-aggregatorset-aggregatorkey)
* [`sbv2 aggregator:set:authority AGGREGATORKEY NEWAUTHORITY`](#sbv2-aggregatorsetauthority-aggregatorkey-newauthority)
* [`sbv2 aggregator:set:batchSize AGGREGATORKEY BATCHSIZE`](#sbv2-aggregatorsetbatchsize-aggregatorkey-batchsize)
* [`sbv2 aggregator:set:forceReportPeriod AGGREGATORKEY FORCEREPORTPERIOD`](#sbv2-aggregatorsetforcereportperiod-aggregatorkey-forcereportperiod)
* [`sbv2 aggregator:set:history AGGREGATORKEY SIZE`](#sbv2-aggregatorsethistory-aggregatorkey-size)
* [`sbv2 aggregator:set:minJobs AGGREGATORKEY MINJOBRESULTS`](#sbv2-aggregatorsetminjobs-aggregatorkey-minjobresults)
* [`sbv2 aggregator:set:minOracles AGGREGATORKEY MINORACLERESULTS`](#sbv2-aggregatorsetminoracles-aggregatorkey-minoracleresults)
* [`sbv2 aggregator:set:queue AGGREGATORKEY QUEUEKEY`](#sbv2-aggregatorsetqueue-aggregatorkey-queuekey)
* [`sbv2 aggregator:set:updateInterval AGGREGATORKEY UPDATEINTERVAL`](#sbv2-aggregatorsetupdateinterval-aggregatorkey-updateinterval)
* [`sbv2 aggregator:set:varianceThreshold AGGREGATORKEY VARIANCETHRESHOLD`](#sbv2-aggregatorsetvariancethreshold-aggregatorkey-variancethreshold)
* [`sbv2 aggregator:update AGGREGATORKEY`](#sbv2-aggregatorupdate-aggregatorkey)

## `sbv2 aggregator:add:job AGGREGATORKEY`

add a job account to an aggregator

```
USAGE
  $ sbv2 aggregator:add:job AGGREGATORKEY

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

OPTIONS
  -a, --aggregatorAuthority=aggregatorAuthority  alternate keypair that is the authority for the aggregator
  -f, --outputFile=outputFile                    output file to save aggregator definition to
  -h, --help                                     show CLI help

  -k, --keypair=keypair                          keypair that will pay for onchain transactions. defaults to new account
                                                 authority if no alternate authority provided

  -s, --silent                                   suppress cli prompts

  -u, --rpcUrl=rpcUrl                            alternate RPC url

  -v, --verbose                                  log everything

  --force                                        overwrite outputFile if existing

  --jobDefinition=jobDefinition                  filesystem path of job json definition file

  --jobKey=jobKey                                public key of an existing job account to add to an aggregator

  --mainnetBeta                                  WARNING: use mainnet-beta solana cluster

  --programId=programId                          alternative Switchboard program ID to interact with

EXAMPLE
  $ sbv2 aggregator:add:job
```

_See code: [src/commands/aggregator/add/job.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/add/job.ts)_

## `sbv2 aggregator:create:copy AGGREGATORSOURCE`

copy an aggregator account to a new oracle queue

```
USAGE
  $ sbv2 aggregator:create:copy AGGREGATORSOURCE

ARGUMENTS
  AGGREGATORSOURCE  public key of the aggregator account to copy

OPTIONS
  -a, --authority=authority              alternate keypair that will be the aggregator authority
  -f, --outputFile=outputFile            output file to save aggregator definition to
  -h, --help                             show CLI help

  -k, --keypair=keypair                  keypair that will pay for onchain transactions. defaults to new account
                                         authority if no alternate authority provided

  -s, --silent                           suppress cli prompts

  -u, --rpcUrl=rpcUrl                    alternate RPC url

  -v, --verbose                          log everything

  --batchSize=batchSize                  override source aggregator's oracleRequestBatchSize

  --copyJobs                             create copy of job accounts instead of referincing existing job account

  --crankKey=crankKey                    public key of the crank to push aggregator to

  --enable                               set permissions to PERMIT_ORACLE_QUEUE_USAGE

  --force                                skip job confirmation

  --forceReportPeriod=forceReportPeriod  override source aggregator's forceReportPeriod

  --mainnetBeta                          WARNING: use mainnet-beta solana cluster

  --minJobs=minJobs                      override source aggregator's minJobResults

  --minOracles=minOracles                override source aggregator's minOracleResults

  --minUpdateDelay=minUpdateDelay        override source aggregator's minUpdateDelaySeconds

  --programId=programId                  alternative Switchboard program ID to interact with

  --queueAuthority=queueAuthority        alternative keypair to use for queue authority

  --queueKey=queueKey                    (required) public key of the queue to create aggregator for

  --varianceThreshold=varianceThreshold  override source aggregator's varianceThreshold

EXAMPLES
  $ sbv2 aggregator:create:copy GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --queueKey 
  9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json
  $ sbv2 aggregator:create:copy GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --queueKey 
  9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json --sourceCluster mainnet-beta
  $ sbv2 aggregator:create:copy FcSmdsdWks75YdyCGegRqXdt5BiNGQKxZywyzb8ckD7D --queueKey 
  9WZ59yz95bd3XwJxDPVE2PjvVWmSy9WM1NgGD2Hqsohw --keypair ../payer-keypair.json --sourceCluster mainnet-beta
```

_See code: [src/commands/aggregator/create/copy.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/create/copy.ts)_

## `sbv2 aggregator:create:json DEFINITIONFILE`

create an aggregator from a json file

```
USAGE
  $ sbv2 aggregator:create:json DEFINITIONFILE

ARGUMENTS
  DEFINITIONFILE  filesystem path of queue definition json file

OPTIONS
  -a, --authority=authority    alternate keypair that will be the authority for the aggregator
  -f, --outputFile=outputFile  output aggregator definition to a json file
  -h, --help                   show CLI help

  -k, --keypair=keypair        keypair that will pay for onchain transactions. defaults to new account authority if no
                               alternate authority provided

  -q, --queueKey=queueKey      public key of the oracle queue to create aggregator for

  -s, --silent                 suppress cli prompts

  -u, --rpcUrl=rpcUrl          alternate RPC url

  -v, --verbose                log everything

  --force                      overwrite output file

  --mainnetBeta                WARNING: use mainnet-beta solana cluster

  --programId=programId        alternative Switchboard program ID to interact with

ALIASES
  $ sbv2 json:create:aggregator

EXAMPLE
  $ sbv2 aggregator:create:json examples/aggregator.json --keypair ../payer-keypair.json --queueKey 
  GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile aggregator.schema.json
```

_See code: [src/commands/aggregator/create/json.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/create/json.ts)_

## `sbv2 aggregator:lock AGGREGATORKEY`

lock an aggregator's configuration and prevent further changes

```
USAGE
  $ sbv2 aggregator:lock AGGREGATORKEY

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with
```

_See code: [src/commands/aggregator/lock.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/lock.ts)_

## `sbv2 aggregator:permission:create AGGREGATORKEY`

create a permission account for an aggregator

```
USAGE
  $ sbv2 aggregator:permission:create AGGREGATORKEY

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account

OPTIONS
  -h, --help             show CLI help

  -k, --keypair=keypair  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided

  -s, --silent           suppress cli prompts

  -u, --rpcUrl=rpcUrl    alternate RPC url

  -v, --verbose          log everything

  --mainnetBeta          WARNING: use mainnet-beta solana cluster

  --programId=programId  alternative Switchboard program ID to interact with
```

_See code: [src/commands/aggregator/permission/create.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/permission/create.ts)_

## `sbv2 aggregator:remove:job AGGREGATORKEY JOBKEY`

remove a switchboard job account from an aggregator

```
USAGE
  $ sbv2 aggregator:remove:job AGGREGATORKEY JOBKEY

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  JOBKEY         public key of an existing job account to remove from an aggregator

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --force                    overwrite outputFile if existing

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with

EXAMPLE
  $ sbv2 aggregator:remove:job
```

_See code: [src/commands/aggregator/remove/job.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/remove/job.ts)_

## `sbv2 aggregator:set AGGREGATORKEY`

set an aggregator's config

```
USAGE
  $ sbv2 aggregator:set AGGREGATORKEY

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator

OPTIONS
  -a, --authority=authority              alternate keypair that is the authority for the aggregator
  -h, --help                             show CLI help

  -k, --keypair=keypair                  keypair that will pay for onchain transactions. defaults to new account
                                         authority if no alternate authority provided

  -s, --silent                           suppress cli prompts

  -u, --rpcUrl=rpcUrl                    alternate RPC url

  -v, --verbose                          log everything

  --forceReportPeriod=forceReportPeriod  Number of seconds for which, even if the variance threshold is not passed,
                                         accept new responses from oracles.

  --mainnetBeta                          WARNING: use mainnet-beta solana cluster

  --minJobs=minJobs                      number of jobs that must respond before an oracle responds

  --minOracles=minOracles                number of oracles that must respond before a value is accepted on-chain

  --newQueue=newQueue                    public key of the new oracle queue

  --programId=programId                  alternative Switchboard program ID to interact with

  --updateInterval=updateInterval        set an aggregator's minimum update delay

  --varianceThreshold=varianceThreshold  percentage change between a previous accepted result and the next round before
                                         an oracle reports a value on-chain. Used to conserve lease cost during low
                                         volatility

ALIASES
  $ sbv2 set:aggregator

EXAMPLE
  $ sbv2 aggregator:set GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --updateInterval 300 --minOracles 3 --keypair 
  ../payer-keypair.json
```

_See code: [src/commands/aggregator/set/index.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/index.ts)_

## `sbv2 aggregator:set:authority AGGREGATORKEY NEWAUTHORITY`

set an aggregator's authority

```
USAGE
  $ sbv2 aggregator:set:authority AGGREGATORKEY NEWAUTHORITY

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  NEWAUTHORITY   keypair path of new authority

OPTIONS
  -a, --currentAuthority=currentAuthority  alternate keypair that is the authority for the aggregator
  -h, --help                               show CLI help

  -k, --keypair=keypair                    keypair that will pay for onchain transactions. defaults to new account
                                           authority if no alternate authority provided

  -s, --silent                             suppress cli prompts

  -u, --rpcUrl=rpcUrl                      alternate RPC url

  -v, --verbose                            log everything

  --mainnetBeta                            WARNING: use mainnet-beta solana cluster

  --programId=programId                    alternative Switchboard program ID to interact with
```

_See code: [src/commands/aggregator/set/authority.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/authority.ts)_

## `sbv2 aggregator:set:batchSize AGGREGATORKEY BATCHSIZE`

set an aggregator's batch size

```
USAGE
  $ sbv2 aggregator:set:batchSize AGGREGATORKEY BATCHSIZE

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  BATCHSIZE      number of oracles requested for each open round call

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with
```

_See code: [src/commands/aggregator/set/batchSize.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/batchSize.ts)_

## `sbv2 aggregator:set:forceReportPeriod AGGREGATORKEY FORCEREPORTPERIOD`

set an aggregator's force report period

```
USAGE
  $ sbv2 aggregator:set:forceReportPeriod AGGREGATORKEY FORCEREPORTPERIOD

ARGUMENTS
  AGGREGATORKEY      public key of the aggregator

  FORCEREPORTPERIOD  Number of seconds for which, even if the variance threshold is not passed, accept new responses
                     from oracles.

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with

ALIASES
  $ sbv2 aggregator:set:forceReport

EXAMPLE
  $ sbv2 aggregator:set:forceReportPeriod GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 300 --keypair 
  ../payer-keypair.json
```

_See code: [src/commands/aggregator/set/forceReportPeriod.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/forceReportPeriod.ts)_

## `sbv2 aggregator:set:history AGGREGATORKEY SIZE`

set an aggregator's history buffer account to record the last N accepted results

```
USAGE
  $ sbv2 aggregator:set:history AGGREGATORKEY SIZE

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator to add to a crank
  SIZE           size of history buffer

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with

ALIASES
  $ sbv2 aggregator:add:history

EXAMPLE
  $ sbv2 aggregator:set:history GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 10000 --keypair ../payer-keypair.json
```

_See code: [src/commands/aggregator/set/history.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/history.ts)_

## `sbv2 aggregator:set:minJobs AGGREGATORKEY MINJOBRESULTS`

set an aggregator's minimum number of jobs before an oracle responds

```
USAGE
  $ sbv2 aggregator:set:minJobs AGGREGATORKEY MINJOBRESULTS

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account
  MINJOBRESULTS  number of jobs that must respond before an oracle responds

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with
```

_See code: [src/commands/aggregator/set/minJobs.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/minJobs.ts)_

## `sbv2 aggregator:set:minOracles AGGREGATORKEY MINORACLERESULTS`

set an aggregator's minimum number of oracles that must respond before a result is accepted on-chain

```
USAGE
  $ sbv2 aggregator:set:minOracles AGGREGATORKEY MINORACLERESULTS

ARGUMENTS
  AGGREGATORKEY     public key of the aggregator account
  MINORACLERESULTS  number of oracles that must respond before a value is accepted on-chain

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with
```

_See code: [src/commands/aggregator/set/minOracles.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/minOracles.ts)_

## `sbv2 aggregator:set:queue AGGREGATORKEY QUEUEKEY`

set an aggregator's oracle queue

```
USAGE
  $ sbv2 aggregator:set:queue AGGREGATORKEY QUEUEKEY

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator
  QUEUEKEY       public key of the oracle queue

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with
```

_See code: [src/commands/aggregator/set/queue.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/queue.ts)_

## `sbv2 aggregator:set:updateInterval AGGREGATORKEY UPDATEINTERVAL`

set an aggregator's minimum update delay

```
USAGE
  $ sbv2 aggregator:set:updateInterval AGGREGATORKEY UPDATEINTERVAL

ARGUMENTS
  AGGREGATORKEY   public key of the aggregator account
  UPDATEINTERVAL  set an aggregator's minimum update delay

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with

EXAMPLE
  $ sbv2 aggregator:set:updateInterval GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 60 --keypair ../payer-keypair.json
```

_See code: [src/commands/aggregator/set/updateInterval.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/updateInterval.ts)_

## `sbv2 aggregator:set:varianceThreshold AGGREGATORKEY VARIANCETHRESHOLD`

set an aggregator's variance threshold

```
USAGE
  $ sbv2 aggregator:set:varianceThreshold AGGREGATORKEY VARIANCETHRESHOLD

ARGUMENTS
  AGGREGATORKEY      public key of the aggregator

  VARIANCETHRESHOLD  percentage change between a previous accepted result and the next round before an oracle reports a
                     value on-chain. Used to conserve lease cost during low volatility

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the aggregator
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

  --programId=programId      alternative Switchboard program ID to interact with

ALIASES
  $ sbv2 aggregator:set:variance

EXAMPLE
  $ sbv2 aggregator:set:varianceThreshold GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 0.1 --keypair 
  ../payer-keypair.json
```

_See code: [src/commands/aggregator/set/varianceThreshold.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/set/varianceThreshold.ts)_

## `sbv2 aggregator:update AGGREGATORKEY`

request a new aggregator result from a set of oracles

```
USAGE
  $ sbv2 aggregator:update AGGREGATORKEY

ARGUMENTS
  AGGREGATORKEY  public key of the aggregator account to deserialize

OPTIONS
  -h, --help             show CLI help

  -k, --keypair=keypair  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided

  -s, --silent           suppress cli prompts

  -u, --rpcUrl=rpcUrl    alternate RPC url

  -v, --verbose          log everything

  --mainnetBeta          WARNING: use mainnet-beta solana cluster

  --programId=programId  alternative Switchboard program ID to interact with

EXAMPLE
  $ sbv2 aggregator:update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json
```

_See code: [src/commands/aggregator/update.ts](https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli/src/commands/aggregator/update.ts)_
