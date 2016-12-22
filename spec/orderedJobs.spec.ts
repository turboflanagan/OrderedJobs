
import {OrderedJobs} from "../src/orderedJobs";

describe("OrderedJobs", () => {
    it("should return nothing when given no jobs", () => {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("")).toEqual("");
    });
    it("should return one job when one job is passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>")).toEqual("a")
    });
    it("should return two jobs when passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb =>")).toEqual("ab")
    });
    it("should return three jobs when passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb =>\nc =>")).toEqual("abc")
    });
    it("should return three jobs respecting one dependency", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb => c\nc =>")).toEqual("acb")
    });
    it("should return correct order with two dependencies", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a => c\nb => c\nc =>")).toEqual("cab")
    });
    it("should return correct order with two dependencies iterating twice", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a => b\nb => c\nc =>")).toEqual("cba")
    });

    // a =>
    // b => c
    // c => f
    // d => a
    // e => b
    // f =>
});
