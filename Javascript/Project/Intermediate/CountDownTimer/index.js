const countDownTimer = document.getElementById("countDownTimer")

        // we have to find targetTimer 
        const targetTime = new Date().getTime() + (1 * 60 * 1000 * 60 * 10);
        setInterval(() => {
            let currentTime = new Date().getTime()
            let diff = targetTime - currentTime

            if (diff <= 0) {
                countDownTimer.innerText = "Time Up!"
                return
            }

            let hours = Math.floor(diff / (1000 * 60 * 60))
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);


            hours = hours < 10 ? "0" + hours : hours
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            countDownTimer.innerText = `${hours}:${minutes}:${seconds}`

        }, 1000);