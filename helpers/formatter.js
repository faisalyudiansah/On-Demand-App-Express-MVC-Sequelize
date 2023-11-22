function currencyToIDR(value) {
    if(!value) value = 0;
    let newFormatted = value.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    return newFormatted
}

function dateFormattedYMD(value) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };
    let newFormat = value.toLocaleDateString('id-ID', options).split('/')
    let [date, month, year] = newFormat
    return [year, month, date].join('-')
}

module.exports = { currencyToIDR, dateFormattedYMD }