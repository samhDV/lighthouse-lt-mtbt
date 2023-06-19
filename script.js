function syncLoop(amount){
    console.log('start sync loop ' +amount)
    start = Date.now();
    while (Date.now() < start + amount){}
    console.log('end sync loop ' +amount)
   
  }
  
  setTimeout(syncLoop.bind(this,300),0)
  setTimeout(syncLoop.bind(this,400),1000)
  setTimeout(syncLoop.bind(this,500),2000)
  
  