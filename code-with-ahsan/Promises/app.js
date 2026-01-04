const yaseen = {
    requestMathsBook() {
        return new Promise((resolve, reject) => {
           setTimeout(() =>{
             resolve('Maths')
           }, 5000)
        })
    },
    requestPhysicsBook() {
        return new Promise((resolve, reject) => {
           setTimeout(() =>{
             resolve('Physics')
           }, 2000)
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