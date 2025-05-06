import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type Result = { 'ok': null } |
{ 'err': string };
export interface _SERVICE {
  'subscribe_email': ActorMethod<[string], Result>,
  'get_all_emails': ActorMethod<[], Array<string>>,
  'get_subscriber_count': ActorMethod<[], bigint>
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
