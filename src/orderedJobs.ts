export class OrderedJobs {
    splitJobs: any;
    orderedJobList: string;
    jobsWithDependencies: any;
    dependentJobs: any;
    dependencies = [];
    jobsLeft = [];
    numberOfJobsWithDependencies = this.dependencies.length;

    sortJobs(jobs: string): string {
        this.splitJobs = jobs.split("\n");
        this.orderedJobList = "";
        this.jobsWithDependencies = [];
        this.dependentJobs = [];
        if (jobs === "") {
            return "";
        }
        for (var job of this.splitJobs) {
            if (this.jobsWithNoDependencies(job)) {
                this.orderedJobList += job[0];
            }
            if (this.jobHasDependency(job)) {
                this.dependencies.push(job);
            }
        }

        let jobWasAdded = true;
        while (jobWasAdded) {
            let jobsLeft = [];
            let numberOfJobsWithDependencies = this.dependencies.length;
            for (let job of this.dependencies) {
                if (this.orderedJobList.indexOf(job[5]) > -1 && this.orderedJobList.indexOf(job[0]) === -1) {
                    this.orderedJobList += job[0];
                } else {
                    jobsLeft.push(job);
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
    }

    private jobHasDependency(job) {                   //why does private matter here?
        if (job.length > 5 && this.jobsWithDependencies.indexOf(job) === -1) {
            this.jobsWithDependencies.push(job);
        }

        return job.length > 5;
    }

    jobsWithNoDependencies(job): string {
        if (job.length < 5) {
            return job;
        }
    }

    checkForErrors(job) {

    }

    orderJobs(jobs: string): string {
        this.sortJobs(jobs);
        return this.orderedJobList;
    }

}

