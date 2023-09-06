fetch("http://localhost:3000/mythological-monsters")
    .then((resp) => resp.json())
    .then((data) => renderCreatures(data))

    

    function renderCreatures(creaturesArr) {

        const ul = document.querySelector('#list-creatures-here')
        
        creaturesArr.forEach((creatureObj) => {
            //console.log(creaturesObj)
            //console.log(li)
            const creatureCard = document.createElement('li')
            creatureCard.classList = "list-li"
            creatureCard.textContent = creatureObj.name
            //console.log(creatureCards)

            const img = document.createElement('img')
            img.src = creatureObj.image
            img.alt = creatureObj.name
            
            //console.log(img)

            creatureCard.appendChild(img)
            //console.log(creatureCards)
            // ul.appendChild(creatureCards)
            // console.log(ul)
             
            const originInfo = document.createElement('h3')
            originInfo.textContent = creatureObj.origin
            creatureCard.appendChild(originInfo)
            
            const descInfo = document.createElement('h4')
            descInfo.textContent = creatureObj.desription
            creatureCard.appendChild(descInfo)
            console.log(descInfo)
            
            ul.append(creatureCard)
        });
    }