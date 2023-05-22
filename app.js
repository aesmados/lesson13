// const { default: axios } = require("axios")

const search = document.getElementById('search-form')
const searchResult = document.querySelector('.search-result')


search.addEventListener('submit', async(e) => {
    e.preventDefault();
    userInput = document.querySelector('.search').value
    searchResult.innerHTML = ''

    const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${userInput}`)
    console.log(res.data.results)

    res.data.results.forEach(item => {
        const resultCard = document.createElement('div')
        resultCard.classList = 'result-card'
        searchResult.append(resultCard)

        const resultImg = document.createElement('img')
        resultImg.src = item.image
        resultCard.append(resultImg)

        const resultName = document.createElement('h3')
        resultName.innerText = item.name
        resultCard.append(resultName)
        

        const resultStatus = document.createElement('p')
        resultStatus.innerText = item.status
        if(resultStatus.innerHTML === 'Alive') {
            resultStatus.classList = 'green'
        } else if (resultStatus.innerHTML === 'Dead') {
            resultStatus.classList = 'red'
        } else {
            resultStatus.classList = 'gray'
        }
        resultCard.append(resultStatus)

        const resultRace = document.createElement('p')
        resultRace.innerText = item.species
        resultCard.append(resultRace)
    })
})

