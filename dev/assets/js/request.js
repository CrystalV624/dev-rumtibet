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
const programUserName = document.querySelector('#program-user-name')
const programUserEmail = document.querySelector('#program-e-mail')
const programUserTelephone = document.querySelector('#program-telephone')
const submitButton = document.querySelector('#submit-button')
const message = document.querySelector('.message')
const stepsNav = document.querySelector('.steps__nav')
const stepsNavButtonFirst = document.querySelector('.steps__nav .btn_step-first')
const stepsNavButtonSecond = document.querySelector('.steps__nav .btn_step-second')
const layoutStepFirst = document.querySelector('.steps__first-step')
const layoutStepSecond = document.querySelector('.steps__second-step')
const requiredFieldStepFirst = layoutStepFirst.querySelectorAll('[data-required-field]')
const requiredFieldStepSecond = layoutStepSecond.querySelectorAll('[data-required-field]')

submitButton.setAttribute('data-step', '1')
const submitButtonStepFirst = document.querySelector("[data-step='1']")

layoutStepSecond.classList.add('steps__second-step_hidden')

const formConfig = {
    emptyMessage: "",
    errorMessage: "Все поля обязательны для заполнения. Заполните, пожалуйста, поля.",
    validMessage: "Поле заполнено. ✓",
    warnnigMessage: "warnnigMessage!",
    emptyField: true,
}

const createMessageText = (field, text) => {
    const msg = `
                <div class="message">
                    ${text} 
                </div>
            `;

    const message = field.closest('.input-box').querySelector('.message')
    message ? message.innerHTML = text : field.closest('.input-box').insertAdjacentHTML('beforeEnd', msg);
}

const createSuccessMessage = (field) => {
    field.closest('.input-box').classList.remove('error-field')
    field.closest('.input-box').classList.add('valid-field')
    createMessageText(field, formConfig.validMessage)
}

const createErrorMessage = (field) => {
    field.closest('.input-box').classList.remove('valid-field')
    field.closest('.input-box').classList.add('error-field')
    createMessageText(field, formConfig.errorMessage)
}

requiredFieldStepFirst.forEach(field => {
    field.addEventListener('change', () => {
        field.value === "" ? createErrorMessage(field) : createSuccessMessage(field)
    })
})

requiredFieldStepSecond.forEach(field => {
    field.addEventListener('input', () => {
        field.value === "" ? createErrorMessage(field) : createSuccessMessage(field)
    })
})

const createMessage = () => {
    requiredFieldStepFirst.forEach(field => {
        field.value === "" ? createErrorMessage(field) : createSuccessMessage(field)
    })
}

const createMessageStepSecond = () => {
    requiredFieldStepSecond.forEach(field => {
        field.value === "" ? createErrorMessage(field) : createSuccessMessage(field)
    })
}

const showNav = () => {
    stepsNav.classList.add('steps__nav_show')
}

const showStepFirst = () => {
    submitButton.setAttribute('data-step', '1')
    layoutStepFirst.classList.remove('steps__first-step_hidden')
    layoutStepSecond.classList.add('steps__second-step_hidden')
}

const showStepSecond = () => {
    if (modalLocationsSelect.value === "" || modalDate.value === "" || modalMembersSelect.value === "") {
        createMessage()
    } else {
        submitButton.setAttribute('data-step', '2')
        layoutStepFirst.classList.add('steps__first-step_hidden')
        layoutStepSecond.classList.remove('steps__second-step_hidden')
    }
}

stepsNavButtonFirst.addEventListener('click', showStepFirst)
stepsNavButtonSecond.addEventListener('click', showStepSecond)

const checkedValue2 = () => {

    if (programUserName.value === "" || programUserEmail.value === "" || programUserTelephone.value === "") {
        createMessageStepSecond()
    } else if (programUserName.value !== "" && programUserEmail.value !== "" && programUserTelephone.value !== "" && modalLocationsSelect.value !== "" && modalDate.value !== "" && modalMembersSelect.value !== "") {
        console.log("submit form");
        submitButton.setAttribute('type', 'submit')
    }
}

const stepSecond = () => {
    console.log('step 2');
    submitButton.setAttribute('data-step', '2')

    const submitButtonStepSecond = document.querySelector("[data-step='2']")
    submitButtonStepSecond.addEventListener('click', checkedValue2);

    showNav();
    showStepSecond()
}

const checkedValue = () => {
    if (modalLocationsSelect.value === "" || modalDate.value === "" || modalMembersSelect.value === "") {
        createMessage()
    } else {
        stepSecond()
    }
}

submitButton.addEventListener('click', checkedValue);




