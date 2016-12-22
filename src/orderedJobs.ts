export class OrderedJobs {
    orderedJobs: string = "";

    orderJobs(jobs: string): string {
        if (jobs === "") {
            return "";
        }
        return this.collectJobs(jobs);
    }

    private collectJobs(jobs: string): string {
        let splitJobs = jobs.split("\n");
        let jobList = "";
        let dependentJobList = "";

        for (var job of splitJobs) {
            if (job.length < 5) {
                jobList += job[0];
            }else if (job.length > 5) {
                dependentJobList += job[0];
            }
        }
        console.log(dependentJobList);
        return jobList.concat(dependentJobList);
    }

}