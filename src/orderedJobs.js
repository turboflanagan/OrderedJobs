"use strict";
var OrderedJobs = (function () {
    function OrderedJobs() {
        this.dependencies = [];
        this.jobsLeft = [];
        this.numberOfJobsWithDependencies = this.dependencies.length;
    }
    OrderedJobs.prototype.sortJobs = function (jobs) {
        this.splitJobs = jobs.split("\n");
        this.orderedJobList = "";
        this.jobsWithDependencies = [];
        this.dependentJobs = [];
        if (jobs === "") {
            return "";
        }
        for (var _i = 0, _a = this.splitJobs; _i < _a.length; _i++) {
            var job = _a[_i];
            if (this.jobsWithNoDependencies(job)) {
                this.orderedJobList += job[0];
            }
            if (this.jobHasDependency(job)) {
                this.dependencies.push(job);
            }
        }
        var jobWasAdded = true;
        while (jobWasAdded) {
            var jobsLeft = [];
            var numberOfJobsWithDependencies = this.dependencies.length;
            for (var _b = 0, _c = this.dependencies; _b < _c.length; _b++) {
                var job_1 = _c[_b];
                if (this.orderedJobList.indexOf(job_1[5]) > -1 && this.orderedJobList.indexOf(job_1[0]) === -1) {
                    this.orderedJobList += job_1[0];
                }
                else {
                    jobsLeft.push(job_1);
                }
            }
            this.dependencies = jobsLeft;
            if (numberOfJobsWithDependencies === this.dependencies.length) {
                jobWasAdded = false;
                if (numberOfJobsWithDependencies > 0) {
                    this.orderedJobList = "error";
                }
                if (job[0] === job[5]) {
                    this.orderedJobList = "jobs can’t depend on themselves";
                }
            }
        }
    };
    OrderedJobs.prototype.jobHasDependency = function (job) {
        if (job.length > 5 && this.jobsWithDependencies.indexOf(job) === -1) {
            this.jobsWithDependencies.push(job);
        }
        return job.length > 5;
    };
    OrderedJobs.prototype.jobsWithNoDependencies = function (job) {
        if (job.length < 5) {
            return job;
        }
    };
    OrderedJobs.prototype.checkForErrors = function (job) {
    };
    OrderedJobs.prototype.orderJobs = function (jobs) {
        this.sortJobs(jobs);
        return this.orderedJobList;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map