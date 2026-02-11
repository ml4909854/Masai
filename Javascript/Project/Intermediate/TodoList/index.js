 const input = document.getElementById("input")
        const btn = document.getElementById("btn")
        const list = document.getElementById("list")
        // console.log(input , btn , list)
        // const task = 
        // check data is prensent in localstorage or not 
        // if present then add get the data or if not present then 
        const tasks = JSON.parse(localStorage.getItem("tasks")) || []

        // console.log(tasks)

        // now the step is to set the task data into our local storage when clicking a addTask button
        btn.addEventListener("click", addTask)
        function addTask() {
            // task is added here
            const text = input.value.trim()
            console.log(text)
            // check if input is empty give 
            if (text === "") {
                return
            }
            // step to push the data into our task 
            tasks.push({
                text: text,

            })

            // save this task into our localstorage
            saveTaskIntoLocalStorage()
            // we call a funtion showTask as well
            showTask()
            // after that the value is trim
            input.value = ""
        }
        function showTask() {
            list.innerText = ""
            tasks.forEach((ele, index) => {

                const id = document.createElement("p")
                id.innerText = index + 1
                const li = document.createElement("li")
                li.innerText = ele.text

                let isCompleted = false;

                const completeBtn = document.createElement("button");
                completeBtn.innerText = "Complete";

                completeBtn.addEventListener("click", () => {

                    isCompleted = !isCompleted;

                    li.style.textDecoration = isCompleted
                        ? "line-through"
                        : "none";

                    completeBtn.innerText = isCompleted ? "Undo":"complete"
                });




                const deleteBtn = document.createElement("button")
                deleteBtn.innerText = "Delete"
                deleteBtn.addEventListener("click", () => {
                    console.log("Item delted")
                    tasks.splice(index, 1)
                    saveTaskIntoLocalStorage()
                    showTask()
                })


                list.append(id, li, completeBtn, deleteBtn)

            });
        }

        function saveTaskIntoLocalStorage() {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }

        showTask()