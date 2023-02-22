const factory = document.getElementById('factory')
const item = document.querySelectorAll('item')
const number = document.getElementById('number')

let color = 'black'

function enter(){
    console.log(document.getElementById('inputColor').value)
    color=document.getElementById('inputColor').value
}



function selection(){
    while(factory.firstChild){
        factory.removeChild(factory.lastChild)
    }
    for(let i = 0; i<Number(number.value); i++){
      const newDiv = document.createElement('div')
        newDiv.className = 'item'
        factory.appendChild(newDiv)
        
    }
}
factory.addEventListener('click',e => e.target.style.backgroundColor = color)
