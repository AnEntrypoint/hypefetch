
const ipc = require('hyper-ipc-secure');
const goodbye = require('graceful-goodbye');
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
const init = (kp)=>{
    const node = ipc();
    const serverKey = node.getSub(kp, process.env.SERVERNAME);
    const webhookKey = node.getSub(kp, process.env.IPCNAME);
  
    node.lbserve(webhookKey, serverKey,process.env.IPCNAME, webhook);
    goodbye(node.destroy)
    return node;
}
export default init;
