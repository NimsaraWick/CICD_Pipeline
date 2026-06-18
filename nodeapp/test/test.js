var request = require("supertest");
var app = require("../index.js");
describe("GET /will", function () {
  it("respond with Hello Andy!", function (done) {
    request(app).get("/will").expect('{ "response": "Hello Andy !" }', done);
  });
});
