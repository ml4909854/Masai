 const rightBox = document.getElementById("rightBox")
const leftBox = document.getElementById("leftBox")
const lists = document.getElementsByClassName("list")

let selected = null

// drag start
for (let list of lists) {
    list.addEventListener("dragstart", (e) => {
        selected = e.target
    })
}

// allow drop
rightBox.addEventListener("dragover", (e) => e.preventDefault())
leftBox.addEventListener("dragover", (e) => e.preventDefault())

// drop
rightBox.addEventListener("drop", () => {
    if (selected) {
        rightBox.appendChild(selected)
        selected = null
    }
})

leftBox.addEventListener("drop", () => {
    if (selected) {
        leftBox.appendChild(selected)
        selected = null
    }
})
