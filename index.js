
const ipc = require('hyper-ipc-secure');
require('dotenv').config();
const webhook = async (inp) => {
    const outp = { ...inp }
    const {url, body} = inp;
    console.log({inp, url, body})
    await fetch(url,{
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(body)
    })
    console.log("WEBHOOK", outp)
    return outp;
}
const init = (kp, node=ipc(), serverKey=node.getSub(kp, process.env.SERVERNAME), callKey=node.getSub(kp, process.env.IPCNAME))=>{
    node.lbserve(callKey, serverKey,process.env.IPCNAME, runCall);
    return node;
}
export default init;
