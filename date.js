export function monthAndDateFormatted(date) {
    return date.substring(5).replace("-", ".");
}

export function getTodayDateFormatted() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    return dd + '-' + mm + '-' + yyyy;    
}

export function getTimestamp(date) {
    return moment(date).format(commonData.hourMinuteSecondsFormat);
}