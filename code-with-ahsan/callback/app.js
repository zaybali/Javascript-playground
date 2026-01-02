//  Synchronous 

// const getUser = () => {
//     return {
//         user: "Zayb Ali"
//     }
// }

// const main = () => {
//     const userInfo = getUser();
//     console.log({userInfo});
// }

// main();

// Asynchronous

// const getUser = (callbackFn) => {
//     setTimeout(() => {
//         const userInfo = {
//             user: 'Zayb Ali'
//         }
//         callbackFn(userInfo);
//     },3000)
// }

// const getUserSync = () => {
//         const userInfo = {
//             user: 'Zayb Ali'
//         };
//         return userInfo;
// }

// const main = () => {
//     getUser(function(userInfoObj){
//         console.log('Async', userInfoObj)
//     });

//     const userInfoObj = getUserSync();
//     console.log('sync',userInfoObj);
// }

// main();


// const getUser = (getUserSuccess) => {
//     setTimeout(() => {
//         getUserSuccess({
//             name: 'Zayb'
//         })
//     }, 1500) 
// }

// const getEvent = (getEventSuccess) => {
//     setTimeout(() => {
//         getEventSuccess({
//             name: 'Portfolio building'
//         })
//     }, 500) 
// }

// getUser(function(user){
//     console.log({user});
// })

// getEvent(function(event){
//     console.log({event});
// })


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
