const bd=document.body
const f1=document.getElementById("f1")
const i1=document.getElementById("i1")
const i2=document.getElementById("i2")
const b1=document.getElementById("b1")

b1.addEventListener("click",(e)=>{
    event.preventDefault();
    let h=i1.value
    let w=i2.value
    // let bmi = ((w/h)/h)*10000
    let bmi=w*h
    console.log(bmi)
    // console.log(typeof bmi)
    if(isNaN(bmi)){
        console.log(`What wrong with you!`);
    }
    else if(bmi<18){
        console.log(`${bmi} is too low`);
    }
    else if(bmi<24){
        console.log(`${bmi} is mid`);
    }
    else if(bmi<30){
        console.log(`${bmi} is too high`);
    }
    else{
        console.log(`you're off the scale`);
    }
})