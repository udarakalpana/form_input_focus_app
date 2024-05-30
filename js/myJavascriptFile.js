const form = document.getElementById('myForm')

form.addEventListener('keydown', (event) => {
    event.preventDefault()

    if (event.code === "Enter") {
        const currentElement = event.target

        let nextElement = currentElement.nextElementSibling

        while (nextElement && nextElement.tagName !== 'INPUT') {
            nextElement = nextElement.nextElementSibling
        }

        nextElement.focus()
    }
})