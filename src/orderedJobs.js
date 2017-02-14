"use strict";
var OrderedJobs = (function () {
    function OrderedJobs() {
    }
    OrderedJobs.prototype.sortJobs = function (jobs) {
        this.splitJobs = jobs.split("\n");
        this.orderedJobList = "";
        this.jobsWithDependencies = [];
        this.dependentJobs = [];
        var dependencies = [];
        if (jobs === "") {
            return "";
        }
        for (var _i = 0, _a = this.splitJobs; _i < _a.length; _i++) {
            var job = _a[_i];
            if (this.jobsWithNoDependencies(job)) {
                this.orderedJobList += job[0];
            }
            if (this.jobHasDependency(job)) {
                dependencies.push(job);
            }
        }
        var jobWasAdded = true;
        while (jobWasAdded) {
            var numberOfJobsWithDependencies = dependencies.length;
            for (var _b = 0, dependencies_1 = dependencies; _b < dependencies_1.length; _b++) {
                var job_1 = dependencies_1[_b];
                var jobsLeft = [];
                if (this.orderedJobList.indexOf(job_1[5]) > -1 && this.orderedJobList.indexOf(job_1[0]) === -1) {
                    this.orderedJobList += job_1[0];
                }
                else {
                    jobsLeft.push(job_1);
                    dependencies = jobsLeft;
                }
            }
            console.log(dependencies);
            console.log(numberOfJobsWithDependencies);
            if (numberOfJobsWithDependencies === dependencies.length) {
                jobWasAdded = false;
            }
        }
    };
    OrderedJobs.prototype.addJobsWithNoDependencies = function () {
        this.orderedJobList = this.jobsWithNoDependencies;
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
    OrderedJobs.prototype.orderJobs = function (jobs) {
        this.sortJobs(jobs);
        return this.orderedJobList;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map