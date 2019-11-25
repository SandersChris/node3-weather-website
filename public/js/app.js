const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageTwo.textContent = 'Loading...'

    fetch(`/weather?address=${location}`).then(response => {
        response.json().then(data => {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }).catch(error => {
            messageTwo.textContent = `${error}`
        })
    })
})
