export class OrderedJobs {
    private _orderedJobs: string = "";
    private _dependentJobList = [];
    private _jobsWithDependency = [];
    private _jobList = "";

    orderJobs(jobs: string): string {
        this.collectJobs(jobs);
        if (jobs === "") {
            return "";
        }
        return this._orderedJobs;
    }

    collectJobs(jobs: string): void {
        let splitJobs = jobs.split("\n");

        for (var job of splitJobs) {
            if (job.length < 5) {
                this._jobList += job[0];
            }else if (job.length > 5) {
                console.log(job);
                this._jobsWithDependency.push(job[5]);
                this._dependentJobList.push(job[0]);
                console.log("with dep = " + this._jobsWithDependency);
                console.log("dependent = " + this._dependentJobList);
            }
        }
        this._orderedJobs = this._jobList.concat(this._dependentJobList.join(""));
    }

}