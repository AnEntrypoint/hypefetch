#! /usr/bin/env node
const ipc = require('hyper-ipc-secure')
require('dotenv').config()
const runCall = async (inp) => {
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

module.exports = runCall
