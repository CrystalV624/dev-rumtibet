const trigerModalButton = document.querySelectorAll('[data-triger-modal]')
const closeModal = document.querySelector('#close-modal')

trigerModalButton.forEach((item, order, array)=>{
    const itemAttr = item.getAttribute('data-triger-modal')

    item.addEventListener('click', ()=>{console.log(itemAttr);

    const modal = document.getElementById(itemAttr)
        modal.classList.add('show')
        body.classList.add('overflow-hidden');
        body.classList.add('overlay');
    })
})

/*showModalBtn.addEventListener('click', ()=> {
	body.classList.toggle('overflow-hidden');
	body.classList.toggle('overlay');
})

closeModal.addEventListener('click', ()=> {
	body.classList.toggle('overflow-hidden');
	body.classList.toggle('overlay');
})

console.log(closeModal);*/