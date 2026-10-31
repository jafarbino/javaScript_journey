function scopeTest() {
    if (true) {
        var a = "I am a var";
        let b = "I am let";
    }
    console.log(a);
    //console.log(b);
}

scopeTest();

function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count =+ 1;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());
console.log(counter.count);