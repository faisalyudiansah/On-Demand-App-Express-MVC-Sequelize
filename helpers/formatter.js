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

function inputDate(value) {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
}

module.exports = { dateFormattedYMD, inputDate }  // ada yang cuma bisa pakai salah satunya