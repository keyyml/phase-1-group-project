fetch("http://localhost:3000/mythological-monsters")
    .then((resp) => resp.json())
    .then((data) => renderCreatures(data))

    function renderCreatures(creaturesArr) {

        const ul = document.querySelector('#list-creatures-here')

        creaturesArr.forEach((creaturesObj) => {
            //console.log(creaturesObj)

            const creatureCards = document.createElement('li')
            
            //console.log(li)

            creatureCards.textContent = creaturesObj.name
            //console.log(creatureCards)

            const img = document.createElement('img')
            img.src = creaturesObj.image
            img.alt = creaturesObj.name
            //console.log(img)

            creatureCards.appendChild(img)
            //console.log(creatureCards)
            ul.appendChild(creatureCards)
            console.log(ul)

            const h3 = document.createElement('h3')
            h3.textContent = creatureObj.origin
            card.appendChild(h3)
        
            const h4 = document.createElement('h4')
            h4.textContent = creatureObj.description
            card.appendChild(h4)
             
        });
        ul.appendChild(creatureCards)
    }




