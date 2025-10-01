window.addEventListener('load', ()=> {
    const initModal = ()=> {
        const trigerModalButton = document.querySelectorAll('[data-triger-modal]')
        const buttonCloseModal = document.querySelectorAll('[data-close-modal]')
        const modal = document.querySelectorAll('.modal');

        const openModal = (modal)=> {
            modal.classList.add('show')
            body.classList.add('overflow-hidden');
        }

        const closeModal = ()=> {
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
            item.addEventListener('click', ()=> {
                closeModal()
            })
        })
        modal.forEach(item => {
            item.addEventListener('click', (event)=>  event.target === item ? closeModal() : null);
        })
    }
    document.querySelector('[data-triger-modal]') ? initModal() : null
})
