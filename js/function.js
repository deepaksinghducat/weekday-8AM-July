// Functions

// function name() {
//     console.log("in function");
// }

// name();

// parameters and arguments


// function abc(a, b) {
//     console.log(a+b);
// }

// abc(10,20);



// functions and method

// function abc() {

// }



// class  xyz {
//     greet() {

//     }
// }



// function abc( ) {

// }

// console.log(abc);

// let c = 0;
// const d = 10;

// function abc(a , b) {
//     let c = 10;
//     const d = b - a;
//     c = a + b;
// }

// abc(10,40);
// console.log(c);
// console.log(d);

//anonymous function and callback functions
// function () {

// }


// let array = [10,20,30,40,50,60];

// array.forEach(function(element) {
//     console.log(element);
// })


// array.forEach(function(element){
//     console.log(element);
// })



// let abc = function (a,b,c,d) {

// }


// 153  = 1*1*1 + 5*5*5 + 3*3*3

// 12321 = 12321 

// default parameter

// function abc(a,b=0,c) {
//     console.log(a,b,c);
// }

// abc(10)


// arrow function 
// const func = () => {

// }

// func()


// const func = (a,b,c) => {
//     console.log(a,b,c);
// }

// func(10,20,30);

// const func = a => true;

// console.log(func(10,20,30));


// rest operators


// function abc(a,b,...c) {
//     console.log(a,b,c);
// }


// abc(10,20,30,40,50);




// armstrong number program

function armStrong(number) {

    var temp = number;

    var num = 0;

    while(temp > 0) {
        rem = temp % 10;

        console.log(rem);

        num = num + rem *  rem * rem;

        temp= parseInt(temp / 10);
    }

    if(number === num) {
        console.log('number is armstrong');
    }else{
        console.log("number is not an armstrong");
    }
}

armStrong(153);


// palindrome number 12321