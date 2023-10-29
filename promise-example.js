//promise with async and await
var promise1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("i am promise1");
    }, 5000);
});

async function handlePromise() {
    console.log("lets start");
    await promise1.then(res => {
        console.log(res);
    })
    console.log("end");
}
handlePromise();
