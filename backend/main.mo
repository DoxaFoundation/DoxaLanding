import Set "mo:map/Set";
import Result "mo:base/Result";
import { thash } "mo:map/Set";
import Text "mo:base/Text";
import Char "mo:base/Char";
import Iter "mo:base/Iter";

actor {

    stable let emails = Set.new<Text>();

    // Helper function to validate email format
    private func is_valid_email(email : Text) : Bool {
        let chars = email.chars();

        // Check minimum length
        if (email.size() < 5) {
            // a@b.c minimum
            return false;
        };

        // Check for @ symbol
        let hasAtSymbol = Text.contains(email, #char '@');
        if (not hasAtSymbol) {
            return false;
        };

        // Check for domain with at least one dot
        let parts = Text.split(email, #char '@');
        let iter = Iter.toArray<Text>(parts);

        if (iter.size() != 2) {
            return false;
        };

        let domain = iter[1];
        let hasDot = Text.contains(domain, #char '.');

        if (not hasDot) {
            return false;
        };

        // Check local part is not empty
        let localPart = iter[0];
        if (localPart.size() == 0) {
            return false;
        };

        return true;
    };

    public func subscribe_email(email : Text) : async Result.Result<(), Text> {
        // Validate email first
        if (not is_valid_email(email)) {
            return #err("Invalid email format");
        };

        Set.add(emails, thash, email);
        return #ok();
    };

};
