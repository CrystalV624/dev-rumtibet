const requestData = document.querySelector('#request-data')
const locationsSelect = document.querySelector('#locations-select')
const dateInput = document.querySelector('#date')
const membersSelect = document.querySelector('#members-select')
const trigerRequest = document.querySelector('#triger-request')

const requestConfig = {
    location: "",
    date: "",
    members: "",
}

locationsSelect.addEventListener('change', ()=> {
    let value = locationsSelect.value
    requestConfig.location = value
    console.log(requestConfig);
})

dateInput.addEventListener('change', ()=> {
    let value = dateInput.value
    requestConfig.date = value
    console.log(requestConfig);
})

membersSelect.addEventListener('change', ()=> {
    let value = membersSelect.value
    requestConfig.members = value
    console.log(requestConfig);
})

const setValue = ()=> {
    const formValue = `Локация для тура: ${requestConfig.location}\nДата похода: ${requestConfig.date}\nУчастники: ${requestConfig.members}`
    requestData.innerHTML = formValue
}

trigerRequest.addEventListener('click', setValue)

const modalLocationsSelect = document.querySelector('#modal-locations-select')
const modalDate = document.querySelector('#modal-date')
const modalMembersSelect =  document.querySelector('#modal-members-select')
const submitButton = document.querySelector('#submit-button')
const message = document.querySelector('.message')
const stepsNav = document.querySelector('.steps__nav')
const stepsNavButtonFirst = document.querySelector('.steps__nav .btn_step-first')
const stepsNavButtonSecond = document.querySelector('.steps__nav .btn_step-second')
const layoutStepFirst = document.querySelector('.steps__first-step')
const layoutStepSecond = document.querySelector('.steps__second-step')
const requiredFieldStepFirst = layoutStepFirst.querySelectorAll('[data-required-field]')
const requiredFieldStepSecond = layoutStepSecond.querySelectorAll('[data-required-field]')

layoutStepSecond.classList.add('steps__second-step_hidden')

const formConfig = {
    emptyField: true,
    emptyMessage: "",
    errorMessage: "Все поля обязательны для заполнения. Заполните, пожалуйста, поля.",
    validMessage: "Все поля заполнены. ✓",
}

console.log("emptyField: " + formConfig.emptyField);

const createErrorMsg = (field)=> {
    const errorMsg =  `
                <div class="message">
                    ${formConfig.errorMessage}
                </div>
            `;
    field.closest('.input-box').insertAdjacentHTML('beforeend', errorMsg);
}

requiredFieldStepFirst.forEach(field => {
    field.addEventListener('change', ()=> {
        console.log("change");
        field.closest('.input-box').classList.add('valid-field')

        if (!field.value) {
            console.log("значение не указано");
            field.closest('.input-box').classList.add('error-field')
            field.closest('.input-box').classList.remove('valid-field')
            console.log('createErrorMessage(field)');

            createErrorMsg(field)
        }
    })
})

const errorMessage = ()=> {
    requiredFieldStepFirst.forEach(field => {
        if (field.value === "") {
            formConfig.emptyField = true
            field.closest('.input-box').classList.add('error-field')
            field.closest('.input-box').classList.remove('valid-field')
            console.log("emptyField: " + formConfig.emptyField);
        }
        else if (field.value !== "") {
            formConfig.emptyField = false
            field.closest('.input-box').classList.remove('error-field')
            field.closest('.input-box').classList.add('valid-field')
            console.log("emptyField: " + formConfig.emptyField);
        }
    })
}

const removeValidMessage = () => {
    message.classList.add('message__hidden')
    message.innerHTML = formConfig.emptyMessage
}

const validMessage = () => {
    message.classList.add('message__valid')
    message.innerHTML = formConfig.validMessage
    setTimeout(removeValidMessage, 2000);
}

const showNav =()=> {
    stepsNav.classList.add('steps__nav_show')
}

const showStepFirst = ()=> {
    layoutStepFirst.classList.remove('steps__first-step_hidden')
    layoutStepSecond.classList.add('steps__second-step_hidden')
}

const showStepSecond = ()=> {
    layoutStepFirst.classList.add('steps__first-step_hidden')
    layoutStepSecond.classList.remove('steps__second-step_hidden')
}

stepsNavButtonFirst.addEventListener('click', showStepFirst)
stepsNavButtonSecond.addEventListener('click', showStepSecond)

const stepSecond = ()=> {
    validMessage();
    showNav();
    showStepSecond();
    console.log('step 2');
}

const checkedValue = ()=> {
    errorMessage()
    if (modalLocationsSelect.value === "" || modalDate.value === "" || modalMembersSelect.value === "") {
        errorMessage()
    }
    else {
        stepSecond()
    }
}

submitButton.addEventListener('click', checkedValue);




