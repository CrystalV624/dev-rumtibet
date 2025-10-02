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

const checketValue = ()=> {
    console.log(modalLocationsSelect.value);
    if(modalLocationsSelect.value === "") {
        console.log('ok')
    }

    if(modalDate.value === "") {
        console.log('ok')
    }

    console.log(modalMembersSelect.value);
    if(modalMembersSelect.value === "") {
        console.log('ok')
    }
}

checketValue()



