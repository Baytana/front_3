const xhr=new XMLHttpRequest()
xhr.open('GET','continent.json',false)
xhr.send()
const continents=JSON.parse(xhr.responseText)


const continentsWrapper=document.querySelector('.continent')

continents.forEach((i)=>{
    const continentCard=document.createElement('div')
    continentCard.setAttribute('class','continentCard')

    continentCard.innerHTML=`
        <div class="continentImage">
            <img src="${i.photo}">
        </div>
        <h2>${i.name}</h2>
    `

    continentsWrapper.append(continentCard)
})