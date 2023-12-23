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
const hideContent=()=>{
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
    hideContent()
    showTabContent(currentTab)
    currentTab=(currentTab+1)%tabs.length
}
hideContent()
showTabContent()
setInterval(autoSlider,3000)

tabsParent.onclick=(event)=>{
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab,tabIndex)=> {
            if (event.target===tab){
                hideContent()
                currentTab=tabIndex
                autoSlider(currentTab)
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
