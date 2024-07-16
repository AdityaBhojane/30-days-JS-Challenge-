    // task print 1 to 10 number using loop
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }

    // task - table of 5 using loop
    for (let i = 1; i <=10; i++) {
        console.log(5*i)
    }

    //task - while loop which calculate sum of 1 to 10
    let num = 1;
    let sum = 0;
    while(num <= 10){
        sum += num
        num++
    }
    console.log(sum)


    // task - reverse loop
    let num2 = 10
    while(num2 > 0){
        console.log(num2)
        num2--
    }

    /// task - do while : print 1 to 5
    let num3 = 1;
    do {
        console.log(num3)
        num3++
    } while (num3<6);



    // task - factorial using so while
    let num4 = 6;
    let i = 1;
    let factorial = 1;
    do {
        factorial *= i
        i++
    } while (i<=num4)

    console.log(factorial)

 


    // task - start pattern print
    for (let i = 0; i <= 5; i++) {
        let star = "";
        for (let j = 0; j < i; j++) {
            star += " *"
        } 
        console.log(star)
    }


    // task print 1 to 10 number using loop and SKIP 5
    for (let i = 1; i <= 10; i++) {
        if(i == 5) continue;
        console.log(i)
    }


    // task print 1 to 10 number using loop and stop on 7
    for (let i = 1; i <= 10; i++) {
        if(i == 7) break;
        console.log(i)
    }
