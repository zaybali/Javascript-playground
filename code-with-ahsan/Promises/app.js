const yaseen = {
    requestMathsBook() {
        return new Promise((resolve, reject) => {
           setTimeout(() =>{
             resolve('maths')
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
        const promises = Promise.all([
            yaseen.requestMathsBook(),
            yaseen.requestPhysicsBook()
        ]);
        console.time('executing parallel')
        promises.then(([mathsBook, physicsBook]) =>{
            console.timeEnd('executing parallel')
            console.log('recieved the book ', mathsBook);
            console.log('look at homework instructions ', mathsBook);
            console.log('write in the notebook ', mathsBook);
            console.log('recieved the book ', physicsBook);
            console.log('look at homework instructions ', physicsBook);
            console.log('write in the notebook ', physicsBook);
        }).catch((err) => {
            console.error(err);
        })


        // console.time('executing sequential')
        // yaseen.requestMathsBook()
        //     .then((bookName) => {
        //         console.log('recieved the book ', bookName);
        //         console.log('look at homework instructions ', bookName);
        //         console.log('write in the notebook ', bookName);
        //         return yaseen.requestPhysicsBook();
        //     }).then((bookName)=>{
        //         console.log('recieved the book ', bookName);
        //         console.log('look at homework instructions ', bookName);
        //         console.log('write in the notebook ', bookName);
        //     }).then(()=>{
        //         console.timeEnd('executing sequential')    
        //         console.log('Finished homework');
        //     }).catch((err)=>{
        //         console.error(err);
        //     })
        console.table('1')
        console.table('2')
        console.table('3')
    },
    // doPhysicsHomework() {
    //     console.log('take out textbook');
    //     console.log('look at homework instructions');
    //     console.log('write in the notebook');
    // }
}

// ahmed.doPhysicsHomework();
ahmed.doHomework();

// Bicycle promise scenario
const parent = {
    buyBicycle: function() {
        return new Promise((resolve, reject) => {
            // Simulate exam results
            setTimeout(() => {
                const grade = 'A1'; // Daughter got A1
                if (grade === 'A1') {
                    resolve('Congratulations! Here is your bicycle.');
                } else {
                    reject('Sorry, no bicycle this time. Study harder!');
                }
            }, 3000);
        });
    }
};

const daughter = {
    takeExams: function() {
        console.log('Daughter is taking exams...');
        parent.buyBicycle()
            .then(message => {
                console.log(message);
            })
            .catch(error => {
                console.log(error);
            });
    }
};

daughter.takeExams();