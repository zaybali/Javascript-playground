const yaseen = {
    requestMathsBook() {
        return new Promise((resolve, reject) => {
           setTimeout(() =>{
             resolve('Maths')
           }, 5000)
        })
    }
}

const ahmed = {
    doMathsHomework() {
        const bookPromise = yaseen.requestMathsBook();
        bookPromise.then((bookName) => {
            console.log('recieved the book ', bookName);
            console.log('look at homework instructions');
            console.log('write in the notebook');
        })
        console.log('something else');
    },
    // doPhysicsHomework() {
    //     console.log('take out textbook');
    //     console.log('look at homework instructions');
    //     console.log('write in the notebook');
    // }
}

// ahmed.doPhysicsHomework();
ahmed.doMathsHomework();