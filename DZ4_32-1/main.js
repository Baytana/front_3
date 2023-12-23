const xhr=new XMLHttpRequest()
xhr.open('GET','persons.json')
xhr.setRequestHeader('Content-type','application/json')
xhr.send()

xhr.onload=()=>{
    const persons=JSON.parse(xhr.response)

    const personsWrapper=document.querySelector('.persons')

    persons.forEach((person)=>{
        const personCard=document.createElement('div')
        personCard.setAttribute('class','personCard')

        personCard.innerHTML=`
        <div class="personImage">
            <img src="${person.photo}">
        </div>
        <h2>${person.name}</h2>
        <h3>${person.animal}</h3>
    `
        personsWrapper.append(personCard)
    })
}
