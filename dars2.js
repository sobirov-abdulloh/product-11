// "use strict";
// let bos=document.getElementById("bos")
// let box=document.querySelector("#box");

// bos.addEventListener("click", function(){
//   let img=document.createElement("img")
//   img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInRQ7I6ZdKVpntN0Ss2hpQocCG2-_FfV95A&usqp=CAU")
//   box.appendChild(img)

//   let h2=document.createElement("h2")
//   h2.textContent="salom"
//   box.appendChild(h2)
  
//   let p=document.createElement("p")
//   p.textContent="salom"
//   box.appendChild(p)

// //   let input=document.createEvent("input")
// //   input.setAttribute("type","text")
// //   box.appendChild(input)

//   let btn=document.createElement("button")
//   btn.textContent="boldi"
//   box.appendChild(btn)
// })
// let bos=document.getElementById("bos")
// let input=document.querySelector("#input1");
// let input2=document.querySelector("#input2");
// let ol=document.querySelector("ol")


// let a;
// let b;
// let moshinalar=[]
// bos.addEventListener("click", function(e){
//     e.preventDefault
//     a=input2.value
//     b=input.value
//     let li=document.createElement("li")
 
//     moshinalar=`${a}-${b}`
    
//     input.value=""
//     input2.value=""
//     for( let item of moshinalar){
//         li.textContent=item
//     }
//     ol.appendChild(li)
    

// })
// let son=[10,20,30,40]
// console.log(son)










// let text=document.querySelector("#text")
// let email=document.querySelector("#email")
// let spanText=document.querySelector("#spanText")
// let spanEmail=document.querySelector("#spanEmail")
// let btn=document.getElementById("bos")
// btn.addEventListener("click", function(e){
//     e.preventDefault
//     spanText.textContent=text.value
//     spanEmail.textContent=email.value
// })
// let body=document.querySelector("body")

// let meva=["olmalar","anor","bananlar","uzum","nok,","ananas"]
// meva.forEach(element=>{
//     let h1=document.createElement("h1")
//     h1.textContent=element
//     body.appendChild(h1)
// })
// let filtrMeva=meva.filter(element=>element.length>5)
// console.log(meva)
// console.log(filtrMeva)
// let meva1=meva.splice(2,1,100)
// console.log(meva)
// console.log(meva1)


// let email=document.querySelector("#email")
// let text=document.querySelector("#text")
// let parol=document.querySelector("#parol")
// let taskBtn=document.querySelector("#tastiqlash")

// let toplam = [];
// let element = {};
// taskBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   if (taskInput.value && timeInput.value) {
//     let task = taskInput.value;
//     let time = timeInput.value;
//     element = {
//       task: task,
//       time: time,
//     };
//     // tiplam.push(element);
//     // element = {};
//     // taskInput.value = "";
//     // timeInput.value = "";
//   } else {
    //     alert("Iltimos vazifalarni toliq kiriting");
    //   }
    // })
    // console.log(toplam)
    
// let ol=document.querySelector("ol") 

// let nam=[
//     {names:'abdullo' ,puli:1000},
//     {names:'jalolidin' ,puli:2000},
//     {names:'jalol' ,puli:3000},
//     {names:'saman' ,puli:5000},
//     {names:'muhammad' ,puli:6000},
//     {names:'akbarhoja' ,puli:4500},
//     {names:'javohir ',puli:7000 }
// ]
// let filterIsm=nam.filter(element=>element.puli>4000)
// console.log(filterIsm)


// let ism=filterIsm.sort((a,b)=>{
//     if(a.names>b.names){
//         return 1;
//     }
//     if(a.names<b.names){
//         return -1;
//     }
//     return 0;
// })



// ism.forEach(element=>{
//     let h1=document.createElement("ul")
//     h1.textContent=`${element.names}-${element.puli}`
//     ol.appendChild(h1)
// })

// ..............................................................
// let h1=document.querySelector("h1")
// let btn=document.querySelector("#bos")
// let body=document.querySelector("body")
// let inpText=document.querySelector("#text")
// let ol=document.querySelector("ol") 
// let odam=[]
// btn.addEventListener("click",function(e){
//     e.preventDefault
//     let text=inpText.value
//     let check=odam.includes(text)

//         if(check){
//             alert("bunday ism bor");
//             return;
//         }

//     else{
//     odam.push(text)
//     console.log(odam)
//     let h1=document.createElement("li")
//     odam.forEach(element=>{
//         h1.textContent=element
//         ol.appendChild(h1)
//     })
//     inpText.value=""
// }
  
// })