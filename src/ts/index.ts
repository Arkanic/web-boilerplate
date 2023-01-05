import "../css/main.css"

import {switchPane, element} from "./gui"
import {orderWorker} from "./workerClient";

let connectPane = element("connect-pane");
let connectButton = element("connect-button");
let sdrPane = element("sdr-pane");

connectButton.addEventListener("click", async () => {
    await orderWorker("requestDevice", []);
    console.log("device request success");

    switchPane(connectPane, sdrPane);

    await webwavMain(sdr);
});

/**
 * Main runtime
 * 
 * @param sdr requested sdr device
 */
async function webwavMain(sdr:any) {
    await sdr.open({
        gain: 30.0
    });
}