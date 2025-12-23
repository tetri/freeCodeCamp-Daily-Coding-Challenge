const emailChainCount = require("./script");

//1. emailChainCount("Re: Meeting Notes") should return 1.
//2. emailChainCount("Meeting Notes") should return 0.
//3. emailChainCount("Re: re: RE: rE: Meeting Notes") should return 4.
//4. emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes") should return 5.
//5. emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary") should return 23.

test("emailChainCount 1", () => {
    expect(emailChainCount("Re: Meeting Notes")).toStrictEqual(1);
});
test("emailChainCount 2", () => {
    expect(emailChainCount("Meeting Notes")).toStrictEqual(0);
});
test("emailChainCount 3", () => {
    expect(emailChainCount("Re: re: RE: rE: Meeting Notes")).toStrictEqual(4);
});
test("emailChainCount 4", () => {
    expect(emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes")).toStrictEqual(
        5
    );
});
test("emailChainCount 5", () => {
    expect(
        emailChainCount(
            "re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary"
        )
    ).toStrictEqual(23);
});
