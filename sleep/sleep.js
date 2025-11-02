async function sleep(millis) {
    return new Promise((resolve)=>setTimeout(resolve,millis))
}
sleep(200).then(()=>console.log("hello I am back after waiting"))