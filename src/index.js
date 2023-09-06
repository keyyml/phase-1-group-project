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

            creatureCard.addEventListener('mouseover', (e) => onMouseOver(e))
            creatureCard.addEventListener('mouseout', (e) => onMouseOut(e))

            function onMouseOver(e){
                creatureCard.style.boxShadow = '10px 10px 10px rgb(223, 43, 43)'
                creatureCard.style.border = 'rgb(223, 43, 43) solid 1px'
            }

            function onMouseOut(e){
                creatureCard.style.boxShadow = '4px 4px 10px #c9c8c8'
                creatureCard.style.border = 'rgb(255, 255, 255) solid 1px'
            }
            
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
            console.log(descInfo)
            
            ul.append(creatureCard)
        });
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
    const formContainer = document.getElementById('create-monster')
    // const newCreatureForm = document.querySelector('#create-monst-form')
    function handleFormButton(e) {
        e.preventDefault()
        const creatureFormHidden = newCreatureForm.classList.toggle('collapsed')
        if (creatureFormHidden){
            toggleFormButtom.textContent = 'Make a Monster!'
            newCreatureForm.style.display = "none";
        } else {
            toggleFormButtom.textContent = 'Hide'
            newCreatureForm.style.display = "block";
        }
    }

    toggleFormButtom.addEventListener('click', handleFormButton)

    // newCreatureForm.addEventListener('click', (e) => {
    //     e.preventDefault()
    // })