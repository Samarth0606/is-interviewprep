// var a = 10;
// let b = 20;
// const c = 30;


// if(true){
//     var d = 100;
//     let e = 200;
//     const f = 300;
// }

// function sam(){
//     var g = 1000;
//     let h = 2000;
//     const i = 3000;
// }
// sam();



// --------------------


// function sam(){
//     console.log(this); // window
// }
// sam();




// let obj = {
//     a:10,
//     fn:function(){
//         console.log(this);  //obj
//     }
// }

// obj.fn()

// ----------------

// let obj = {
//     a:10,
//     fn:()=>{
//         console.log(this);  //window
//     }
// }


// obj.fn()


// -------------------------------------------



// let obj1 = {
//     a: 10,
//     fn: function(x , y , z){
//         // console.log(obj.a);  
//         console.log(this.a , x , y , z);  
//     }
// }
// let obj2 = {
//     a: 50,
// }

// obj2.fn();  //❌
// obj1.fn(10,20,30);  //✅

// obj1.fn.call(obj2,10,20,30) //50
// // obj1.fn.apply(obj2,[10,20,30]) //50
// let copyFn = obj1.fn.bind(obj2,10,20,30) //50
// console.log(copyFn);

// copyFn()


// -------------------------------------------


// let p1 = new Promise() -> HOF -> 

// let p1 = new Promise(function(){})

// let p1 = new Promise(function(ramu , samu){})
// let p1 = new Promise(function(resolve , reject){
//     // resolve("data"); //✅
//     // reject("error");
// })


// // console.log(p1);
// p1
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(function(){
//     console.log("i am finally");
// })




// let p1 = new Promise(function(resolve , reject){
//     resolve("data"); //✅
//     // reject("error");
// })


// console.log(p1);
// p1
// .then(function(data){
//     console.log(data);
// })

// .catch(function(err){
//     console.log(err);
// })

// .finally(function(){
//     console.log("i am finally");
// })



// ----------------------------------


fetch(url)
.then( function(resp){
    // console.log(resp); //partial data
    return resp.json()
} )
.then(function(data){
    console.log(data);
})



async function callAPi(){

    let rep = await fetch(url);
    let data = await rep.json();
    console.log(data);
    
}



// ----------------------------------

// 1st party -> client
// 1st party -> server

// axios -> 3rd party library -> returns a promise -> entire data at once

axios.get(url)
.then(function(resp){
    console.log(resp);
})
.catch(function(err){
    console.log(err);
})


async function callApi(){
    let reps = await axios.get(url);
    console.log(reps);
   
}
