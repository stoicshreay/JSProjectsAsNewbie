const bd = document

bd.addEventListener('click',function(e){
    console.log(`x : ${e.x} y : ${e.y} tag : ${e.tagName}`)
    if(e.target.tagName == "ul"){
        const newele = bd.createElement('ul')
        newele.innerHTML="Hey"
        bd.lastChild.appendChild(newele)
    }
})
