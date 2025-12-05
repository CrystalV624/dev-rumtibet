window.addEventListener('load', ()=> {
    const video = document.querySelector('#video')
    const btnPlay = document.querySelector('#play-video')
    const btnPause = document.querySelector('#btn-pause')
    const btnMute = document.querySelector('#btn-mute')
    const btnStop = document.querySelector('#btn-stop')
    const currentTime = document.querySelectorAll('[data-current-time]')
    const volume = document.querySelector('#volume')
    video.volume = 0.1;

    btnPlay.addEventListener('click', playVideo)
    btnPause.addEventListener('click', pauseVideo)
    btnStop.addEventListener('click', stopVideo)

    function playVideo() {
        video.play();
    }

    function pauseVideo() {
        video.pause();
    }

    function stopVideo() {
        video.pause();
        video.currentTime = 0
    }

    function mutedVideo(setDataMute) {
        if (setDataMute === 'off') {
            video.muted = false
        } 
        else {
            video.muted = true
        }
    }

    currentTime.forEach(element => {
        const time = element.getAttribute('data-current-time')
        console.log(time);

        element.addEventListener('click', () => {
            video.currentTime = time
            video.play();
        })
    })

    volume.addEventListener('input', () => {
        const value = volume.value
        video.volume = value / 100;
    })

    btnMute.addEventListener('click', () => {
        const dataMute = btnMute.getAttribute('data-mute')

        if (dataMute === 'off') {
            btnMute.setAttribute('data-mute', 'on')
        }
        else {
            btnMute.setAttribute('data-mute', 'off')
        }
        const setDataMute = btnMute.getAttribute('data-mute')

        console.log(setDataMute);
        mutedVideo(setDataMute)
    })

    const initModal = ()=> {
        const trigerModalButton = document.querySelectorAll('[data-triger-modal]')
        const buttonCloseModal = document.querySelectorAll('[data-close-modal]')
        const modal = document.querySelectorAll('.modal');

        const openModal = (modal) => {
            modal.classList.add('show')
            body.classList.add('overflow-hidden');
        }

        const closeModal = () => {
            const modal = document.querySelector('.modal.show')
            modal.classList.remove('show')
            body.classList.remove('overflow-hidden');
        }

        //function open modal
        trigerModalButton.forEach(item => {
            const itemAttr = item.getAttribute('data-triger-modal')
            item.addEventListener('click', ()=> {
                const modal = document.getElementById(itemAttr)
                openModal(modal)
            })
        })

        //function close modal
        buttonCloseModal.forEach(item => {
            item.addEventListener('click', () => {
                if (item.closest('.modal-video')) {
                    closeModal()
                    stopVideo()
                } 
                else {
                    closeModal()
                }
            })
        })
        modal.forEach(item => {
            item.addEventListener('click', (event) => {
                if (item.closest('.modal-video')) {
                    if (event.target === item) {
                        stopVideo()
                        closeModal()
                    }
                } 
                else {
                    event.target === item ? closeModal() : null
                }
            });
        })
    }
    document.querySelector('[data-triger-modal]') ? initModal() : null
})
