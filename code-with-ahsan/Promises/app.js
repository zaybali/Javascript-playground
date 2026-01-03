const yaseen = {
    requestMathsBook() {
        return new Promise((resolve, reject) => {
            resolve('Maths')
        })
    }
}

const ahmed = {
    doMathsHomework() {
        const bookPromise = yaseen.requestMathsBook();
        bookPromise.then(() => {
            console.log('look at homework instructions');
            console.log('write in the notebook');
        })
        console.log('something else');
    },
    doPhysicsHomework() {
        console.log('take out textbook');
        console.log('look at homework instructions');
        console.log('write in the notebook');
    }
}

ahmed.doPhysicsHomework();
ahmed.doMathsHomework();