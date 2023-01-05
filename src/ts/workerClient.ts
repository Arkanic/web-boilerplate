let worker = new Worker(
    /* webpackChunkName: "worker" */ new URL("./worker.ts", import.meta.url)
);

let busy = false;

export function orderWorker(command:string, options:Array<any>):Promise<Array<any>> {
    return new Promise((resolve, reject) => {
        if(busy) reject("busy!");
        busy = true;

        function workerListener(response:{data:any}) {
            let {data} = response;
            worker.removeEventListener("message", workerListener);
            busy = false;

            if(data[0] == "done") resolve(data.slice(1));
            else if(data[0] == "error") reject(data.slice(1));
            else reject(["unknown error"]);
        }

        worker.addEventListener("message", workerListener);

        worker.postMessage("message", [command, ...options]);
    });
}