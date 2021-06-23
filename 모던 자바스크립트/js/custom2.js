document.addEventListener("DOMContentLoaded", () => {
    
    const select = document.querySelector("select")
    const form = document.querySelector("form")

    select.addEventListener("change", () => {
        
        form.action = "/board/list"
        form.method = "get"
        form.submit()

        return false;
    })


})