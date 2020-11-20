var expect = chai.expect;

describe('userInfo', function(){
    it('puts together name and age', function(){
        expect(userInfo("Bob", "18"), "Bob 18");
    });

    it('check if the parameter are empty', function(){
        expect(userInfo("", ""), false);
    });
});
