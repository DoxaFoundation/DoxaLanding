import Set "mo:map/Set";
import Result "mo:base/Result";
import { thash } "mo:map/Set";

actor {

    stable let emails = Set.new<Text>();

    public func subscribe_email(email : Text) : async Result.Result<(), Text> {
        Set.add(emails, thash, email);
        return #ok();
    };
};
