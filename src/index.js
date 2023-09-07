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
            
            const creatureName = document.createElement('h1')
            creatureName.textContent = creatureObj.name
            creatureCard.append(creatureName)
            
            
            //console.log(creatureCards)

            const img = document.createElement('img')
            img.src = creatureObj.image
            img.alt = creatureObj.name
            creatureCard.appendChild(img)

            creatureCard.addEventListener('mouseover', (e) => onMouseOver(e))
            creatureCard.addEventListener('mouseout', (e) => onMouseOut(e))

            function onMouseOver(e){
                creatureCard.style.boxShadow = '10px 10px 10px rgb(223, 43, 43)'
                creatureCard.style.border = 'rgb(223, 43, 43) solid 1px'
                creatureName.style.textShadow = '1px 2px 2px rgb(223, 43, 43)'
            }

            function onMouseOut(e){
                creatureCard.style.boxShadow = '4px 4px 10px #c9c8c8'
                creatureCard.style.border = 'rgb(255, 255, 255) solid 1px'
                creatureName.style.textShadow = 'none'
            }
            
            //console.log(img)
            //console.log(creatureCards)
            // ul.appendChild(creatureCards)
            // console.log(ul)
            
            // const originTitle = document.createElement('h3')
            // originTitle.textContent = "ORIGIN:"
            // creatureCard.appendChild(originTitle)

            const originInfo = document.createElement('h4')
            originInfo.textContent = creatureObj.origin
            creatureCard.appendChild(originInfo)

            // infoBtn = document.createElement('button')
            // infoBtn.classList = 'evnt-button'
            // infoBtn.textContent = 'LEARN MORE'
            // creatureCard.append(infoBtn)
            
            const descInfo = document.createElement('p')
            descInfo.textContent = creatureObj.description
            creatureCard.appendChild(descInfo)
            console.log(descInfo)
            
            ul.append(creatureCard)
        })
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
        newCreatureForm.reset()

        fetch('http://127.0.0.1:3000/mythological-monsters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(newCreatureObj)
            })
            .then((resp) => resp.json())
            .then((creatureObj) => {
                renderCreatures(creatureObj)
            });
    }

    const toggleFormButtom = document.querySelector('#create-button')
    const formContainer = document.getElementById('create-monster')
    // const newCreatureForm = document.querySelector('#create-monst-form')

    document.addEventListener("DOMContentLoaded", function() {
        newCreatureForm.style.display = "none";
    })

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
