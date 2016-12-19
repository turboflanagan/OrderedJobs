"use strict";
var orderedJobs_1 = require("../src/orderedJobs");
describe("OrderedJobs", function () {
    it("should return nothing when given no jobs", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("")).toEqual("");
    });
    xit("should return one job when one job is passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("a =>")).toEqual("a");
    });
    xit("should return two jobs when two jobs are passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb =>")).toEqual("ab");
    });
});
//# sourceMappingURL=orderedJobs.spec.js.map