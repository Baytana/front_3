function validateEmail(){
    const emailInput=document.getElementById('gmail_input')
    const result = document.getElementById('gmail_result');
    const email=emailInput.value.trim()

    const gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/

    if (gmailRegex.test(email)){
        result.textContent = 'Valid'
        result.style.color='green'
        emailInput.style.borderColor='green'
        emailInput.style.color='green'
        emailInput.classList.remove('invalid')

    }else{
        result.textContent = 'Invalid'
        result.style.color='red'
        emailInput.style.borderColor='red'
        emailInput.style.color='red'
        emailInput.classList.add('invalid')
    }
}

//движения маленького блока
function moveBlock(position,direction){
    const smallBlock=document.querySelector('.child_block')
    smallBlock.style.left=position+'px'

    if (position<450 && direction==='right'){
        setTimeout(()=> moveBlock(position+1,'right'),10)
    }else if(position>0 && direction==='left'){
        setTimeout(()=>moveBlock(position-1,'left'),10)
    }else{
        moveBlock(position,direction==='right'?'left':'right')
    }
}

window.onload=function (){
    moveBlock(0,'right')
}