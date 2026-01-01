// const getUser = (callbackFn) => {
//     fetch('https://randomuser.me/api')
//         .then(res => res.json())
//         .then(res => {
//             callbackFn(res);
//         })
// }

// const main = () => {
//     let data;
//     getUser(function(response) {
//         data = response;
//         console.log(data);
//     })
// }

// main();


const getUser = (callbackFn) => {
    setTimeout(() =>{
        const userInfo = {
            user: 'Zayb Ali'
        };
        callbackFn(userInfo)
    },3000)
}

const getUserSync = () => {
    const userInfo = {
        user: 'Zayb Ali'
    }
    return userInfo;
}

const main = () => {
    getUser(function(userInfoObj) {
        console.log('async', userInfoObj)
    });
}

const userInfoObj = getUserSync();
console.log('sync', userInfoObj);

main();
