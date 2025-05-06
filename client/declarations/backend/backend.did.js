export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  return IDL.Service({
    'get_all_emails' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'get_subscriber_count' : IDL.Func([], [IDL.Nat], ['query']),
    'subscribe_email' : IDL.Func([IDL.Text], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
