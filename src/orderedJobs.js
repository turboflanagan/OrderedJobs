"use strict";
var OrderedJobs = (function () {
    function OrderedJobs() {
        this.orderedJobs = "";
    }
    OrderedJobs.prototype.orderJobs = function (jobs) {
        if (jobs === "") {
            return "";
        }
        return this.collectJobs(jobs);
    };
    OrderedJobs.prototype.collectJobs = function (jobs) {
        var splitJobs = jobs.split("\n");
        var jobList = "";
        var dependentJobList = "";
        var jobsWithDependencies = splitJobs.filter(this.jobHasDependency);
        for (var _i = 0, jobsWithDependencies_1 = jobsWithDependencies; _i < jobsWithDependencies_1.length; _i++) {
            var dependentJob = jobsWithDependencies_1[_i];
            var aDependentJob = dependentJob[5];
        }
        for (var _a = 0, splitJobs_1 = splitJobs; _a < splitJobs_1.length; _a++) {
            var job = splitJobs_1[_a];
            if (job.length < 5) {
                jobList += job[0];
            }
            else if (job.length > 5) {
                dependentJobList = job[0];
            }
        }
        return jobList.concat(dependentJobList);
    };
    OrderedJobs.prototype.jobHasDependency = function (jobs) {
        return jobs.length > 5;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map