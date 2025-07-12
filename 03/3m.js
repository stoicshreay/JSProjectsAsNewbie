// const { createElement } = require("react")

const dv = document.getElementById('d1')
dv.style.backgroundColor="green"
dv.style.color="white"
setInterval(function(){
    const dt = new Date
    dv.innerHTML=dt.toLocaleTimeString()
}, 1000);

const bd=document.body
const f1=document.getElementById("f1")
const i1=document.getElementById("i1")
const i2=document.getElementById("i2")
const b1=document.getElementById("b1")
let newele1 = document.createElement('ul')
document.body.appendChild(newele1)
b1.addEventListener("click",(e)=>{
    e.preventDefault();
    let h=i1.value
    let w=i2.value
    // let bmi = ((w/h)/h)*10000
    let bmi=w*h
    console.log(bmi)
    // console.log(typeof bmi)
    let x = ""
    if(isNaN(bmi)){
        x="What wrong with you!"
    }
    else if(bmi<18){
        x="too low"
    }
    else if(bmi<24){
        x="too mid"
    }
    else if(bmi<30){
        x="too high"
    }
    else{
        x="off the charts"
    }
    
    newele1.innerHTML=x
})