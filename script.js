function syncLoop(amount) {
    console.log('start sync loop ' + amount)
    start = Date.now();
    while (Date.now() < start + amount) { }
    console.log('end sync loop ' + amount)

}

setTimeout(syncLoop.bind(this, 250), 100)

