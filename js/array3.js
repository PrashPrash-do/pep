    let nos = [1, 2 , 3, 4, 5];
    console.log("initiailly nos are:", nos);
    nos.shift();
//print nos 
    console.log("After shift nos sre:", nos);
    nos.unshift(5);

    console.log("After unshift nos are:", nos);
    let s = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
    s.splice(0,4);

    console.log("After splice nos are:", s);
    let m = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
    m.splice(2,0,10,11,12);
    //
    console.log("After splice addition nos are:", m);

