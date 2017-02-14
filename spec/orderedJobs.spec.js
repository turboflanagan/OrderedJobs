"use strict";
var orderedJobs_1 = require("../src/orderedJobs");
describe("OrderedJobs", function () {
    it("should return nothing when given no jobs", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("")).toEqual("");
    });
    it("should return one job when one job is passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("a =>")).toEqual("a");
    });
    it("should return two jobs when passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb =>")).toEqual("ab");
    });
    it("should return three jobs when passed in", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb =>\nc =>")).toEqual("abc");
    });
    it("should return three jobs respecting one dependency", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb => c\nc =>")).toEqual("acb");
    });
    it("should return correct order with two dependencies", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("a => c\nb => c\nc =>")).toEqual("cab");
    });
    it("should return correct order with two different dependencies", function () {
        var orderedJobs = new orderedJobs_1.OrderedJobs();
        expect(orderedJobs.orderJobs("a => b\nb => c\nc =>")).toEqual("cba");
    });
    // it("should work with multiple dependencies", ()=> {
    //     let orderedJobs: OrderedJobs = new OrderedJobs();
    //     expect(orderedJobs.orderJobs("a =>\nb => c\nc => f\nd => a\ne => b\nf =>")).toEqual("afcdbe")
    // });
    // a =>
    // b => c
    // c => f
    // d => a
    // e => b
    // f =>
});
//# sourceMappingURL=orderedJobs.spec.js.map