function test1(cb){
    setTimeout(() => {
        console.log("Test1");
        cb();
    }, 20000);
}

function test2(cb){
    setTimeout(() => {
        console.log("Test2");
        cb();
    }, 10000);
}

function test3(cb){
    setTimeout(() => {
        console.log("Test3");
        cb();
    }, 5000);

}

function test4(cb){
    setTimeout(() => {
        console.log("Test4");
        cb();
    }, 100);
}

test1(() =>{
    test2(() =>{  
        test3(() => {
            test4();
        });
    });
})

