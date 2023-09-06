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
            descInfo.textContent = creatureObj.description
            creatureCard.appendChild(descInfo)
            //console.log(descInfo)
            
            ul.append(creatureCard)
            
        });
        //console.log(ul)
    }

    const newCreatureForm = document.querySelector('#create-monst-form')
    newCreatureForm.addEventListener('submit', (e) => addNewCreature(e))
    
    function addNewCreature(e) {
        e.preventDefault()
        // console.log(e.target.name.value)
        const newCreatureObj = {
            "name": e.target.name.value,
            "image": e.target.image.value,
            "origin": e.target.origin.value,
            "description": e.target.description.value
        }

        renderCreatures([newCreatureObj])
    }

    const toggleFormButtom = document.querySelector('#create-button')
    const creatureForm = document.querySelector('#create-monst-form')

    function handleToggleForm(e) {
        const creatureFormHidden = creatureForm.classList.toggle('collapsed')

        if (creatureFormHidden){
            toggleFormButtom.textContent = 'Make a Monster!'
        } else {
            toggleFormButtom.textContent = 'Hide'
        }
    }

    toggleFormButtom.addEventListener('click', handleToggleForm)

    creatureForm.addEventListener('click', (e) => {
        e.preventDefault()

        //console.log(e.target)
    })