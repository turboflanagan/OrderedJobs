export class OrderedJobs {
    splitJobs: any;
    orderedJobList: string;
    jobsWithDependencies: any;
    dependentJobs: any;

    sortJobs(jobs: string): string {
        this.splitJobs = jobs.split("\n");
        this.orderedJobList= "";
        this.jobsWithDependencies = [];
        this.dependentJobs= [];
        let dependencies = [];
        if (jobs === "") {
            return "";
        }
        for (var job of this.splitJobs) {
            if (this.jobsWithNoDependencies(job)) {
                this.orderedJobList += job[0];
            }
            if (this.jobHasDependency(job)) {
                dependencies.push(job);
            }

        }
        let jobWasAdded = true;
        while (jobWasAdded) {
            let numberOfJobsWithDependencies = dependencies.length;
            for (let job of dependencies) {
                let jobsLeft = [];
                if (this.orderedJobList.indexOf(job[5]) > -1 && this.orderedJobList.indexOf(job[0]) === -1) {
                    this.orderedJobList += job[0];
                } else {
                    jobsLeft.push(job);
                    dependencies = jobsLeft;
                }
            }
            console.log(dependencies);
            console.log(numberOfJobsWithDependencies);
            if (numberOfJobsWithDependencies === dependencies.length) {
                jobWasAdded = false;
            }
        }
    }

    addJobsWithNoDependencies() {
        this.orderedJobList = this.jobsWithNoDependencies;
    }

    private jobHasDependency(job) {
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


    orderJobs(jobs: string): string {
        this.sortJobs(jobs);
        return this.orderedJobList;
    }

}

