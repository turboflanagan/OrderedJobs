export class OrderedJobs {

    orderJobs(jobs: string): string {
        let splitJobs = jobs.split("\n");
        let orderedJobList: string = "";
        if (jobs === "") {
            return "";
        }
        for (var job of splitJobs) {
                if (job.length > 5 && orderedJobList.indexOf(job[0]) === -1) {
                    orderedJobList += job[5];
                }
            if (orderedJobList.indexOf(job[0]) === -1) {
                orderedJobList += job[0];
            }
        }
        return orderedJobList;
    }

}