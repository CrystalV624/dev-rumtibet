let button = {
    content: 'Select 2021-07-26',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let date = new Date('2021-07-26');
        dp.selectDate(date);
        dp.setViewDate(date);
    }
}

new AirDatepicker('#date', {
    buttons: [button, 'clear'] // Custom button, and pre-installed 'clear' button
})  

NiceSelect.bind(document.getElementById("tour-select"), {searchable: true, placeholder: 'Локация для тура', searchtext: 'zoek', selectedtext: 'geselecteerd'});
NiceSelect.bind(document.getElementById("members-select"), {searchable: false, placeholder: 'Участники', searchtext: 'zoek', selectedtext: 'geselecteerd'});