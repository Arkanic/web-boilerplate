const rtlsdrjs = require("rtlsdrjs");

let sdr:any;

const functions:{[unit:string]:Function} = {
    "requestDevice": async () => {
        sdr = await rtlsdrjs.requestDevice();
        self.postMessage(["done"]);
    }
}

self.addEventListener("message", async ({data}) => {
    await functions[data[0]](data);
});