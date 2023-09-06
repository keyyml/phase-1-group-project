fetch("http://localhost:3000/mythological-monsters")
    .then((resp) => resp.json())
    .then((data) => renderCreatures(data))

    function renderCreatures(creaturesArr) {

        const ul = document.querySelector('#list-creatures-here')

        creaturesArr.forEach((creaturesObj) => {
            //console.log(creaturesObj)

            const creatureCards = document.createElement('li')
            //console.log(li)
            creatureCards.classList = "list-li"
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
             
            const originInfo = document.createElement('h3')
            originInfo.textContent = creaturesObj.origin
            creatureCards.appendChild(originInfo)
            
            const descInfo = document.createElement('h4')
            descInfo.textContent = creaturesObj.description
            creatureCards.appendChild(descInfo)


            
        });
    }