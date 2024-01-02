const phoneInput= document.querySelector('#phone_input')
const phoneButton= document.querySelector('#phone_button')
const phoneResult= document.querySelector('#phone_result')

const regExp=/^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/
phoneButton.onclick= () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML= 'OK'
        phoneResult.style.color= 'green'
    }else{
        phoneResult.innerHTML= 'NOT OK'
        phoneResult.style.color= 'red'
    }
}

//TAB SLIDER

const tabContentBlocks=document.querySelectorAll('.tab_content_block')
const tabs=document.querySelectorAll('.tab_content_item')
const tabsParent=document.querySelector('.tab_content_items')
let currentTab=0
const hideTabContent=()=>{
    tabContentBlocks.forEach(tabContentBlocks=>{
        tabContentBlocks.style.display='none'
    })
    tabs.forEach(tab=>{
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent=(tabIndex=0)=>{
    tabContentBlocks[tabIndex].style.display='block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

const autoSlider=(tabIndex)=>{
    hideTabContent()
    currentTab=(currentTab+1)%tabs.length
    showTabContent(currentTab)
}
hideTabContent()
showTabContent()
setInterval(autoSlider,3000)

tabsParent.onclick=(event)=>{
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab,tabIndex)=> {
            if (event.target===tab){
                hideTabContent()
                currentTab=tabIndex
                showTabContent(currentTab)
            }
        })
    }
}

//CONVERTER

const som=document.querySelector('#som')
const usd=document.querySelector('#usd')
const eur=document.querySelector('#eur')

const converter=(element, targetElement1,targetElement2,current)=>{
    element.oninput=()=>{
        const xhr=new XMLHttpRequest()
        xhr.open('GET','../data/converter.json')
        xhr.setRequestHeader('Content-type','application/json')
        xhr.send()

        xhr.onload=()=>{
            const data = JSON.parse(xhr.response)

            switch (current){
                case 'som':
                    targetElement1.value=(element.value / data.usd).toFixed(2)
                    targetElement2.value=(element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement1.value=(element.value * data.usd).toFixed(2)
                    targetElement2.value=(element.value / data.usdeur).toFixed(2)
                    break
                case 'eur':
                    targetElement1.value=(element.value * data.eur).toFixed(2)
                    targetElement2.value=(element.value * data.usdeur).toFixed(2)
                    break
                default:
                    break
            }
        }
    }
}
converter(som,usd,eur,'som')
converter(usd,som,eur,'usd')
converter(eur,som,usd,'eur')

//CARD SWITCHER

const card = document.querySelector('.card'),
    btnNext=document.querySelector('#btn-next'),
    btnPrev=document.querySelector('#btn-prev')

let count= 0
let totalObjects;

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        totalObjects = data.length;
        btnNext.addEventListener('click', () => fetchDataAndUpdateCard(1));
        btnPrev.addEventListener('click', () => fetchDataAndUpdateCard(-1));
        fetchDataAndUpdateCard(1)
    })

const fetchDataAndUpdateCard = async (offset ) => {
    count = (count + offset + totalObjects) % totalObjects;
    if (count === 0) count = totalObjects;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
        const data = await response.json();
        updateCard(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const updateCard = (data) => {
    card.innerHTML = `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
        <span>${data.id}</span>
    `;
};

