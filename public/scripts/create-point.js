    function populateUfs () {
   const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json() )
    .then(states => {
        for(state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
 }

populateUfs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const ufValue = event.target.value

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`)
    .then( res => res.json())
    .then( cities => {
        
        for(city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        
        citySelect.disabled = false
    })
}



document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


//Itens de coleta
const itemstoCollect = document.querySelectorAll(".items-grid li")

for (item of itemstoCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    //adicionar ou removar uma classe com javascript
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados,
    //se sim, pegar os itens

    const alreadySelected = selectedItems.findIndex(item => item == itemId)


    //se já estiver selecionado
    if(alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = selectedItems.filter(item => item != itemId)
        selectedItems = filteredItems
    } else {
        // se não estiver selecionado, adicionar à seleção
        selectedItems.push(itemId)
    }

    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}