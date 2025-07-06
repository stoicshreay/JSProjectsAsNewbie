const body=document.body
const buttons=document.querySelectorAll('.b')

const bbs=document.querySelector('.bb')
console.log(bbs)
const hcs = document.querySelector('.hc')
bbs.addEventListener("mouseover", function(gh){         //Mouseover event for the bbs element, if mouse goes over bbs it listens and captures the event and execute the given function next to it
    // const targ = gh.target.innerHTML
    // console.log(targ)
    bbs.style.color="Red"
    hcs.style.backgroundColor="Black"
    
});

bbs.addEventListener("mouseout", function(gh){         //Mouseout event for the bbs element, if mouse goes over bbs it listens and captures the event and execute the given function next to it

    // const targ = gh.target.innerHTML
    // console.log(targ)
    bbs.style.color="Black"
    hcs.style.backgroundColor="White"
});

buttons.forEach((eachbuttonelement)=>{
    eachbuttonelement.addEventListener("mouseover", function(buttonevent){
        const desc = eachbuttonelement.innerHTML
        if(desc==="Black"){
            eachbuttonelement.style.backgroundColor=desc
            const ih = eachbuttonelement.innerHTML
            console.log(ih)
            // ih.style.color="White"
        }
        if(desc==="Red"){
            eachbuttonelement.style.backgroundColor=desc
            eachbuttonelement.innerHTML.style.color="White"
        }
        if(desc==="Blue"){
            eachbuttonelement.style.backgroundColor=desc
            eachbuttonelement.innerHTML.style.color="White"
        }
        if(desc==="Yellow"){
            eachbuttonelement.style.backgroundColor=desc
            eachbuttonelement.innerHTML.style.color="White"
        }
    });
})

buttons.forEach((eachbuttonelement)=>{
eachbuttonelement.addEventListener("mouseout", function(buttonevent){
        const desc = eachbuttonelement.innerHTML
        if(desc==="Black"){
            eachbuttonelement.style.backgroundColor="White"
            eachbuttonelement.innerHTML.style.color="Black"
        }
        if(desc==="Red"){
            eachbuttonelement.style.backgroundColor="White"
            eachbuttonelement.innerHTML.style.color="Black"
        }if(desc==="Blue"){
            eachbuttonelement.style.backgroundColor="White"
            eachbuttonelement.innerHTML.style.color="Black"
        }if(desc==="Yellow"){
            eachbuttonelement.style.backgroundColor="White"
            eachbuttonelement.innerHTML.style.color="Black"
        }
    });
})

buttons.forEach((xm)=>{            //bittons is the Nodelist of all the 'button' tag elements, given this to ForEach Loop, if it click any of the buttons from this list it listens that event and execute the matchinng if function
    xm.addEventListener('click',function(happeningsincapturedevent){        //if it click any of the buttons from this list it listens that event and execute the matchinng if function
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

