


    const container = document.getElementById("container")
    const prev = document.getElementById("prev")
    const img = document.getElementById("image")
    const next = document.getElementById("next")
    const dotContainer = document.getElementById("dotContainer")

    let currentIndex = 0
    let Interval;

    const Images = [
        "https://cdn.pixabay.com/photo/2024/12/13/08/36/new-year-9264474_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/11/26/18/50/skyscraper-9226515_640.jpg",
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg",
        "https://cdn.pixabay.com/photo/2024/12/13/21/21/eye-9266169_640.jpg",
        "https://cdn.pixabay.com/photo/2024/12/13/18/36/landscape-9265991_640.jpg",
        "https://cdn.pixabay.com/photo/2024/11/22/10/03/canyon-9215914_640.jpg",
    ];


    function showImage() {
        img.src = Images[currentIndex]
        img.alt = `Image ${currentIndex + 1}`
        UpdateDots()
    }

    // let move on a next part move slider and create into an 
    // autoslide parts
    function autoSlideImages() {
        Interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % Images.length
            showImage()

            return () => clearInterval(Interval)
        }, 1000);
    }


    // write funtion to pass a privous intervals
    function pauseInterval() {
        clearInterval(Interval)
    }

    // slide using prev and next button

    prev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + Images.length) % Images.length
        showImage()
        // pauseInterval()
    })

    next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % Images.length
        showImage()
        // pauseInterval()
    })
    // Now its time to create some dots
    function createDots() {
        dotContainer.innerHTML = ""
        Images.forEach((_, index) => {
            let dot = document.createElement("div")
            dot.classList.add("dot")
            if (index === currentIndex) {
                dot.classList.add("active")
            }
            dot.addEventListener("click", () => {
                currentIndex = index
                showImage()
                pauseInterval()
                // autoSlideImages()
            })
            dotContainer.append(dot)
        })
    }

    function UpdateDots() {
        const dots = document.querySelectorAll(".dot")
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex)
        })
    }

    img.addEventListener("click" , ()=>{
        autoSlideImages()
    })
    createDots()
    showImage()
    autoSlideImages()
