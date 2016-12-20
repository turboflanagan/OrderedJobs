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
        var thisJob = "";
        for (var _i = 0, splitJobs_1 = splitJobs; _i < splitJobs_1.length; _i++) {
            var job = splitJobs_1[_i];
            thisJob = thisJob.concat(job[0]);
        }
        return thisJob;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map