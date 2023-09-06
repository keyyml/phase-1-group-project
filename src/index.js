// fetch("http://localhost:3000/mythological-monsters")
//     .then((resp) => resp.json())
//     .then((data) => renderCreatures(data))

//     function renderCreatures(creaturesArr) {

//         const ul = document.querySelector('#list-creatures-here')

//         creaturesArr.forEach((creaturesObj) => {
//             //console.log(creaturesObj)

//             const creatureCards = document.createElement('li')
//             //console.log(li)
//             creatureCards.classList = "list-li"
//             creatureCards.textContent = creaturesObj.name
//             //console.log(creatureCards)

//             const img = document.createElement('img')
//             img.src = creaturesObj.image
//             img.alt = creaturesObj.name
            
//             //console.log(img)

//             creatureCards.appendChild(img)
//             //console.log(creatureCards)
//             ul.appendChild(creatureCards)
//             console.log(ul)
             
//             const originInfo = document.createElement('h3')
//             originInfo.textContent = creaturesObj.origin
//             creatureCards.appendChild(originInfo)
            
//             const descInfo = document.createElement('h4')
//             descInfo.textContent = creaturesObj.description
//             creatureCards.appendChild(descInfo)


            
//         });
//     }
fetch("http://localhost:3000/mythological-monsters")
    .then((resp) => resp.json())
    .then((data) => renderCreatureCards(data))

function renderCreatureCards(creatureArr) {
    const creatureCollection = document.querySelector('#list-creatures-here')

    // console.log(creatureArr)
    // console.log(creatureCollection)
    creatureArr.forEach((creatureObj) => {
        const card = document.createElement('div')
        card.className = ('card')
        
        const h2 = document.createElement('h2')
        h2.textContent = creatureObj.name
        card.appendChild(h2)

        const img = document.createElement('img')
        img.src = creatureObj.image
        img.alt = creatureObj.name 
        img.className = 'creature-avatar'
        card.appendChild(img)

        const h3 = document.createElement('h3')
        h3.textContent = creatureObj.origin
        card.appendChild(h3)

        const h4 = document.createElement('h4')
        h4.textContent = creatureObj.description
        card.appendChild(h4)
        
        creatureCollection.appendChild(card)
        
        console.log(creatureCollection)
        console.log(creatureArr)

    })

}