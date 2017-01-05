"use strict";
var OrderedJobs = (function () {
    function OrderedJobs(jobs) {
        this._jobs = jobs;
        this._orderedJobs = jobs;
        this._dependentJobList = [];
        this._jobsWithDependency = [];
        this._jobList = "";
    }
    OrderedJobs.prototype.orderJobs = function (jobs) {
        this.collectJobs(jobs);
        if (jobs === "") {
            return "";
        }
        return this._orderedJobs;
    };
    OrderedJobs.prototype.collectJobs = function (jobs) {
        var splitJobs = jobs.split("\n");
        for (var _i = 0, splitJobs_1 = splitJobs; _i < splitJobs_1.length; _i++) {
            var job = splitJobs_1[_i];
            if (job.length < 5) {
                this._jobList += job[0];
            }
            else if (job.length > 5) {
                console.log(job);
                this._jobsWithDependency.push(job[5]);
                this._dependentJobList.push(job[0]);
                console.log("with dep = " + this._jobsWithDependency);
                console.log("dependent = " + this._dependentJobList);
            }
        }
        this._orderedJobs = this._jobList.concat(this._dependentJobList.join(""));
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map