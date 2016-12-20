export class OrderedJobs {
    orderedJobs: string = "";

    orderJobs(jobs: string): string {
        if (jobs === "") {
            return "";
        }
        return this.collectJobs(jobs);
    }
    collectJobs(jobs: string): string {
        let splitJobs = jobs.split("\n");
        let thisJob = "";
        for (var job of splitJobs) {
            thisJob = thisJob.concat(job[0]);
        }
        return thisJob;
    }
}