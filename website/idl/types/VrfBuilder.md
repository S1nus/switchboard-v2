

| Field | Type | Description |
|--|--|--|
| producer |  publicKey |  |
| status |  [VrfStatus](/idl/types/VrfStatus) |  |
| reprProof |  u8[80] |  |
| proof |  [EcvrfProofZC](/idl/types/EcvrfProofZC) |  |
| yPoint |  publicKey |  |
| stage |  u32 |  |
| stage1Out |  [EcvrfIntermediate](/idl/types/EcvrfIntermediate) |  |
| r1 |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| r2 |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| stage3Out |  [EcvrfIntermediate](/idl/types/EcvrfIntermediate) |  |
| hPoint |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| sReduced |  [Scalar](/idl/types/Scalar) |  |
| yPointBuilder |  [FieldElementZC](/idl/types/FieldElementZC)[3] |  |
| yRistrettoPoint |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| mulRound |  u8 |  |
| hashPointsRound |  u8 |  |
| mulTmp1 |  [CompletedPointZC](/idl/types/CompletedPointZC) |  |
| uPoint1 |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| uPoint2 |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| vPoint1 |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| vPoint2 |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| uPoint |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| vPoint |  [EdwardsPointZC](/idl/types/EdwardsPointZC) |  |
| u1 |  [FieldElementZC](/idl/types/FieldElementZC) |  |
| u2 |  [FieldElementZC](/idl/types/FieldElementZC) |  |
| invertee |  [FieldElementZC](/idl/types/FieldElementZC) |  |
| y |  [FieldElementZC](/idl/types/FieldElementZC) |  |
| z |  [FieldElementZC](/idl/types/FieldElementZC) |  |
| p1Bytes |  u8[32] |  |
| p2Bytes |  u8[32] |  |
| p3Bytes |  u8[32] |  |
| p4Bytes |  u8[32] |  |
| cPrimeHashbuf |  u8[16] |  |
| m1 |  [FieldElementZC](/idl/types/FieldElementZC) |  |
| m2 |  [FieldElementZC](/idl/types/FieldElementZC) |  |
| txRemaining |  u32 |  |
| verified |  bool |  |
| result |  u8[32] |  |
