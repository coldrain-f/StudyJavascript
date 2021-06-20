document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form")
    const button = document.querySelector("button")
    button.addEventListener("click", () => {
        const select = document.querySelector("select")
        const options = select.options

        let selectedOption
        for (const option of options) {
            if (option.selected) {
                selectedOption = option
            }
        }

        console.log(selectedOption.value)

        form.action = "/board/list"
        form.method = "get"
        form.submit()

        return false
    })
})