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
        card.appendChild(img)

        const h3 = document.createElement('h3')
        h3.textContent = creatureObj.origin
        card.appendChild(h3)
        
        const h4 = document.createElement('h4')
        h4.textContent = creatureObj.description
        card.appendChild(h4)
       
        creatureCollection.appendChild(card)
        
        console.log(creatureCollection)

    })

}
