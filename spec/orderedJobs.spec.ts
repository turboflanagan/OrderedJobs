
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
    it("should return two jobs when two jobs are passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb =>")).toEqual("ab")
    });
    it("should return three jobs when three jobs are passed in", ()=> {
        let orderedJobs: OrderedJobs = new OrderedJobs();
        expect(orderedJobs.orderJobs("a =>\nb =>\nc =>")).toEqual("abc")
    });
});