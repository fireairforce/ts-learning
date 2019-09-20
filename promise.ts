const promise = new Promise((resolve,reject)=>{
    resolve(23333);
    reject(new Error('this is a Error'));
})

promise.then(res=>{
    console.log(res);
})

