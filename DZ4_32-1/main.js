// persons=[
//     {
//         "name": "Judy Hopps",
//         "animal": "rabbit",
//         "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8tOiroT4qSH4GAXuTZRANTk5zMgr-XcLnLkR20O45SxIOj4NE_4GrCNWWz0xYNQsaKc&usqp=CAU"
//     },
//     {
//         "name": "Nick Wilde",
//         "animal": "fox",
//         "photo": "https://www.kinometro.ru/res/pic/data/technology/44.jpg"
//     },
//     {
//         "name": "Gazelle",
//         "animal": "goat",
//         "photo": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23345724_e_v10_aa.jpg"
//     },
//     {
//         "name": "chief Bogo",
//         "animal": "bull",
//         "photo": "https://www.youloveit.ru/uploads/gallery/main/861/youloveit_ru_zootopia_zveropolis52.jpg"
//     },
//     {
//         "name": "Mr. Big",
//         "animal": "mouse",
//         "photo": "https://cs8.pikabu.ru/post_img/2017/01/13/6/1484295841135680490.jpg"
//     },
//     {
//         "name": "Blink",
//         "animal": "sloth",
//         "photo": "https://zakon-img3.object.pscloud.io/2017032208460344322_1483402299.jpg"
//     },
//     {
//         "name": "Bellwether",
//         "animal": "sheep",
//         "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbMZFjTJa3CW3nFWIFmIRRXIMghYa_Qsa8pfpKRGE6whOO6SKW_xbhfrMO7_sjI5PCrE&usqp=CAU"
//     }
// ]

const xhr=new XMLHttpRequest()
xhr.open('GET','persons.json',false)
xhr.send()
const persons=JSON.parse(xhr.responseText)


const personsWrapper=document.querySelector('.persons')
const defaultUserPhoto="https://cdn-icons-png.flaticon.com/512/56/56745.png"

persons.forEach((person)=>{
    const personCard=document.createElement('div')
    personCard.setAttribute('class','personCard')

    personCard.innerHTML=`
        <div class="personImage">
            <img src="${person.photo || defaultUserPhoto}">
        </div>
        <h2>${person.name}</h2>
        <h3>${person.animal}</h3>
    `

    personsWrapper.append(personCard)
})