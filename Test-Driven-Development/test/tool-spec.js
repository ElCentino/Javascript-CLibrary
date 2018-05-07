
var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require('nock');

var person = {first : "Alfed", last : "Pennyworth"};

describe("Tools", function() {

    describe("printName()", function() {

        it("should print last name first", function() {
            var result = tools.printName(person);
            expect(result).to.equal(`${person.last}, ${person.first}`);
        });
    });

    describe("loadWiki()", function() {

        before(function(){
            nock("https://en.wikipedia.org")
                .get(`/wiki/${person.first}_${person.last}`)
                .reply(200, "This is a webpage");
        });

        it("Should load a wiki page", function(done) {
           var result = tools.loadWiki(person, function(html) {
                expect(html).to.equal("This is a webpage");
                done();
           });
        });
    });
});
