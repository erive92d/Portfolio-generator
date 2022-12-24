const main = document.querySelector('.main')

fetch('deorren.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
    
    dataLists(data.name,data.location,data.bio,data.linkedin,data.github)
    
    
})


console.log(localStorage.getItem('items'))

function dataLists(name,location,bio,linkedin,github) {
    const nameEl = document.createElement('p')
    const locationEl = document.createElement('p')
    const bioEl = document.createElement('p')
    const linkedinEl = document.createElement('a')
    const githubEl = document.createElement('a')

    nameEl.textContent = name
    locationEl.textContent = location
    bioEl.textContent = bio
    linkedinEl.textContent = linkedin
    githubEl.textContent = github

    main.append(nameEl,locationEl,bioEl,linkedinEl,githubEl)


}





