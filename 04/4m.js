

const bt = document.getElementById('b1')
const curguess = document.getElementById('g1')
const remguess = document.getElementById('rem')
const pgess = document.getElementById('preg')
const rest = document.getElementById('res')

let Numtobeguessed = parseInt((Math.random()*100)+1)
console.log(Numtobeguessed);

document.getElementById('res').addEventListener('click', function(e){
    Numtobeguessed = parseInt((Math.random()*100)+1)
    console.log(Numtobeguessed);
    remguess.innerText=10
    pgess.innerText=" ";
})

bt.addEventListener('click', function(e){
    let temp=curguess.value
    if(temp==Numtobeguessed){
        alert("YOU WON!!")
    }
    else{
        let remges=remguess.innerText
        if(remges==1){
            alert(`You LOST Looser!! The number was ${Numtobeguessed}`)

        }
        else{
            remges=remges-1
            remguess.innerText=remges
            //let curges = curguess.innerText;
            if(remges==9){
                pgess.innerText=pgess.innerText+temp
            }
            else{
                pgess.innerText=pgess.innerText+", "+temp
            }

        }
    }
})
