const form = document.querySelector('form')

form.onsubmit = function(event){
    event.preventDefault()

    const input = form.querySelector('input')
    const value = input.value

    const li = document.createElement('li')
    li.textContent = value

    ul
}