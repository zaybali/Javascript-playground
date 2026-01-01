const getUser = (callbackFn) => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(res => {
            callbackFn(res);
        })
}

const main = () => {
    let data;
    getUser(function(response) {
        data = response;
        console.log(data);
    })
}

main();