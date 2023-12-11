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

let timerId
let time=0
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const stopwatch=()=>{
    // time++
    const minute=Math.floor(time/60)
    const second=time%60
    time++
    const resultTime=`${padZero(minute)}:${padZero(second)}`
    document.getElementById('secondsS').innerText=resultTime

}
const start=()=>{
    timerId=setInterval(stopwatch,1000)
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}
const stop=()=>{
    clearInterval(timerId)
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

const reset=()=>{
    stop()
    time=0
    stopwatch()
    startButton.disabled = false;
    stopButton.disabled = false;
    resetButton.disabled = true;
}

const padZero=(number)=>{
    return number<10 ? `0${number}` : `${number}`
}