const xhr=new XMLHttpRequest()
xhr.open('GET','continent.json')
xhr.setRequestHeader('Content-type','application/json')
xhr.send()
xhr.onload=()=>{
    const continents=JSON.parse(xhr.responseText)
    console.log(continents)
}


// const continentsWrapper=document.querySelector('.continent')

// continents.forEach((i)=>{
//     const continentCard=document.createElement('div')
//     continentCard.setAttribute('class','continentCard')
//
//     continentCard.innerHTML=`
//         <div class="continentImage">
//             <img src="${i.photo}">
//         </div>
//         <h2>${i.name}</h2>
//
//     continentsWrapper.append(continentCard)
// })