// let a = 44;
// console.log(a)

// a = "jai";
// console.log(a)

//                                       VAR,LET AND CONST : variable
// var can change anywhere you  can create many var with same name
// let is use on real page  and you can't create onther let with same name
// const use only ones time and cannot change

//                                            Primitive datatype

// let a = "this is a string"       //this is string
// let b = Symbol()                 //this is symbol
// let c = 434                      //this is number
// let d = null                     //this is null
// let e = true                     //this is boolean
// let f = BigInt("23")             //this is bigint
// let g = undefined                //undefined

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(typeof g)


// const obj = {
//     'Name':"harry",
//     'class':12,
//     'Rollno':7
// }
// console.log(obj['Rollno'])
//obj['name'] = "jaiveer"      //this can change name and you can add 


//                                      operator in javascript

// let a = 10;
// let b = 30; 

//arithmetic operator
// console.log("a + b = " , (a+b))
// console.log("a - b = " , (a-b))
// console.log("a * b = " , (a*b))
// console.log("a / b = " , (a/b))
// console.log("a ** b = " , (a**b))
// console.log("a++ = " , (a++))
// console.log("a-- = " , (a--))
// console.log("++a = " , (++a))
// console.log("--a = " , (--a))

//assignment operator 
// let a = 10;

// a += 5;
// console.log(a)
// a -= 5;
// console.log(a)
// a *= 5;
// console.log(a)
// a /= 5;
// console.log(a)
// a **= 5;
// console.log(a)

//  comparison operator 


// let a = 10;
// let b = 15;

// console.log(a==b)
// console.log(a===b)
// console.log(a!=b)
// console.log(a!==b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a>b)
// console.log(a>=b)


// logical operator 

// let a = 10;
// let b = 25;

// console.log(a < b && b == 25)
// console.log(a > b && b == 25)
// console.log(a > b && b != 25)


// console.log(a < b || b != 25)
// console.log(a > b || b == 25)
// console.log(a > b || b != 25)


// console.log(!true)
// console.log(!false)


//                                                   conditions 



// let a = 10;
// let b = 25;

// if (a<b){
//     console.log("a<b is true")
// }


// if(a>b){
//     console.log("a>b is true")
// }
// else{
//     console.log("a<b is true")
// }


// if(a>b){
//     console.log("a>b")
// }

// else if (a<b){
//     console.log("10<15")
// }
// else{
//     console.log("all is false")
// }


// console.log(a<b? 'yes':'no')


//                                for loops in js


// let sum = 0;
// let num = prompt('number')
// Number.parseInt(num)

// for(let i = 0;i<num;i++){
//     sum += i+1
// }
// console.log(sum)

// const obj = {
//     jai: 55,
//     sager: 63,
//     rohit:56,
//     88:89
// }
// obj[90] = 99;

// for(let key in obj){
//     console.log(key)  //key of obj
// }

// for(let value of 'jaiveer' ){
//     console.log(value)
    
// }
//                  let find = prompt('search')
//                  function search(){
//                      console.log(obj[find])
//                  }
//                  let yes = (find in obj)
//                  if (yes){
//                      search()
//                  }
//                  else{
//                      console.log('wrong search')
//                  }




