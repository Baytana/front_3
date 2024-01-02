//MOVE BLOCK
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

    }else{
        result.textContent = 'Invalid'
        result.style.color='red'
        emailInput.style.borderColor='red'
        emailInput.style.color='red'
    }
}


//движения маленького блока
const childBlock=document.querySelector('.child_block')
let parentFReeWidth=450
let moveSpeedChildBlock=5
let positionX=0
let positionY=0

const moveBlock=()=>{
    if(positionX<=parentFReeWidth && positionY===0){
        childBlock.style.left=`${positionX++}px`
        setTimeout(moveBlock,moveSpeedChildBlock)
    }
    else if (positionX>=parentFReeWidth && positionY<parentFReeWidth){
        childBlock.style.top=`${positionY++}px`
        setTimeout(moveBlock,moveSpeedChildBlock)
    }
    else if(positionX>=0 && positionY===parentFReeWidth){
        positionX--
        childBlock.style.left=`${positionX}px`
        setTimeout(moveBlock,moveSpeedChildBlock)
    }
    else if (positionX<parentFReeWidth && positionY<=parentFReeWidth){
        childBlock.style.top=`${positionY--}px`
        setTimeout(moveBlock,moveSpeedChildBlock)
    }
}
moveBlock()


//STOPWATCH

let interval
let time=0

const seconds=document.querySelector('#seconds')
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const stopwatch=()=>{
    // time++
    clearInterval(interval)
    interval=setInterval(()=>{

        const minute=Math.floor(time/60)
        const second=time%60
        time++
        seconds.innerHTML=`${padZero(minute)}:${padZero(second)}`
    },1000)
}
startButton.onclick=()=>stopwatch()
stopButton.onclick=()=>clearInterval(interval)
resetButton.onclick=()=>{
    clearInterval(interval)
    time=0
    seconds.innerHTML='00:00'
}
const padZero=(number)=>{
    return number<10 ? `0${number}` : `${number}`
}