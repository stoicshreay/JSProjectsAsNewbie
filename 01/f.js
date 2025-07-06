const body=document.body
const buttons=document.querySelectorAll('.b')

buttons.forEach((xm)=>{
    xm.addEventListener('click',function(happeningsincapturedevent){
        //console.log(happeningsincapturedevent)
        const targ=happeningsincapturedevent.target.innerHTML
        if(targ==="Black"){
            body.style.backgroundColor=targ
            const teles=body.querySelectorAll('.t1');
            teles.forEach((x)=>{
                x.style.color="White"
            })
            // teles.style.backgroundColor="White"
        }
        if(targ==="Red"){
            body.style.backgroundColor=targ
        }
        if(targ==="Blue"){
            body.style.backgroundColor=targ
        }
        if(targ==="Yellow"){
            body.style.backgroundColor=targ
        }
        if(targ==="Reset"){
            body.style.backgroundColor="White"
            const teles=body.querySelectorAll('.t1');
            teles.forEach((x)=>{
                x.style.color="Black"
            })
        }
    })
})