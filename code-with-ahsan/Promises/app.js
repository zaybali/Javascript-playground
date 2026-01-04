const yaseen = {
    requestMathsBook() {
        return new Promise((resolve, reject) => {
           setTimeout(() =>{
             reject(new Error('could not resolve maths'))
           }, 2500)
        })
    },
    requestPhysicsBook() {
        return new Promise((resolve, reject) => {
           setTimeout(() =>{
             resolve('physics')
           }, 1000)
        })
    }
}

const ahmed = {
    doHomework() {
        yaseen.requestMathsBook()
            .then((bookName) => {
                console.log('recieved the book ', bookName);
                console.log('look at homework instructions ', bookName);
                console.log('write in the notebook ', bookName);
                return yaseen.requestPhysicsBook();
            }).then((bookName)=>{
                console.log('recieved the book ', bookName);
                console.log('look at homework instructions ', bookName);
                console.log('write in the notebook ', bookName);
            }).then(()=>{
                console.log('Finished homework');
            }).catch((err)=>{
                console.log(err);
            })
    },
    // doPhysicsHomework() {
    //     console.log('take out textbook');
    //     console.log('look at homework instructions');
    //     console.log('write in the notebook');
    // }
}

// ahmed.doPhysicsHomework();
ahmed.doHomework();