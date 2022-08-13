let bundeslaender = [];
let filter = [];

async function init() {
        let response = await fetch('./bundesland.json');
        bundeslaender = await response.json();
        renderStates();
        getFirstCharacters()
    }


function renderStates() {
    for (let i = 0; i < bundeslaender.length; i++) {
        document.getElementById('states').innerHTML += `<a href="${bundeslaender[i]['url']}" class="state">
                                                            <div class="name">${bundeslaender[i]['name']}</div>
                                                            <div class="population">${bundeslaender[i]['population']}</div>    
                                                        </a>`
        
    }
}

function getFirstCharacters() {
    for (let i = 0; i < bundeslaender.length; i++) {
        let name = `${bundeslaender[i]['name']}`
        let firstCharacter = name.charAt(0)
        
        if (filter.indexOf(firstCharacter) == -1) {
            filter.push(firstCharacter);
        }    
    }
    showFilter()
}

function showFilter() {
    for (let i = 0; i < filter.length; i++) {
        document.getElementById('filter').innerHTML += `<div class="filterCharacter">${filter[i]}<div>`
    }
}