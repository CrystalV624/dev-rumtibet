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