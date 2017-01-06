"use strict";
var OrderedJobs = (function () {
    function OrderedJobs() {
    }
    OrderedJobs.prototype.orderJobs = function (jobs) {
        var splitJobs = jobs.split("\n");
        var orderedJobList = "";
        if (jobs === "") {
            return "";
        }
        for (var _i = 0, splitJobs_1 = splitJobs; _i < splitJobs_1.length; _i++) {
            var job = splitJobs_1[_i];
            if (job.length > 5 && orderedJobList.indexOf(job[0]) === -1 && orderedJobList.indexOf(job[5]) === -1) {
                orderedJobList += job[5];
            }
            if (orderedJobList.indexOf(job[0]) === -1) {
                orderedJobList += job[0];
            }
        }
        return orderedJobList;
    };
    return OrderedJobs;
}());
exports.OrderedJobs = OrderedJobs;
//# sourceMappingURL=orderedJobs.js.map