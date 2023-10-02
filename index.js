
const ipc = require('hyper-ipc-secure')
require('dotenv').config()
const call = async (inp) => {
    const outp = { ...inp }
    const {url, body} = inp
    const result = await fetch(url,{
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(body)
    })
    try {
        outp.text = await result.text()
        outp.json = await result.json()
    } catch(e) {
    }
    return outp
}
const init = (kp, node=ipc(), serverKey=node.getSub(kp, process.env.SERVERNAME), callKey=node.getSub(kp, process.env.IPCNAME))=>{
    node.lbserve(callKey, serverKey,process.env.IPCNAME, call)
    return node
}
module.exports = init
