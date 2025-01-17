Create and initialize the LeaseAccount.

## Accounts
|Name|isMut|isSigner|Description|
|--|--|--|--|
| lease | TRUE | FALSE |  | 
| queue | TRUE | FALSE |  | 
| aggregator | FALSE | FALSE |  | 
| funder | TRUE | FALSE |  | 
| payer | TRUE | TRUE |  | 
| systemProgram | FALSE | FALSE | The Solana system program account. | 
| tokenProgram | FALSE | FALSE | The Solana token program account. | 
| owner | TRUE | TRUE |  | 
| escrow | TRUE | FALSE |  | 
| programState | FALSE | FALSE | The Switchboard [SbState](/idl/accounts/SbState) account. | 
| mint | FALSE | FALSE |  | 
## Params
|Field|Type|Description|
|--|--|--|
| loadAmount |  u64 | Token amount to load into the lease escrow |
| withdrawAuthority |  publicKey | This authority will be permitted to withdraw funds from this lease. |
| leaseBump |  u8 |  |
| stateBump |  u8 | The [SbState](/idl/accounts/SbState) bump used to derive its public key. |
| walletBumps |  bytes |  |
