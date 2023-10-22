setInterval(showtime, 1000)
function showtime() {
    var toDay = new Date();
    var day = toDay.getDay()
    var dayList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    var monthList = ['Jan', 'Feb', 'Mar', 'April', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var hour = toDay.getHours()
    var minute = toDay.getMinutes()
    var second = toDay.getSeconds()
    var date = toDay.getDate()
    var month = toDay.getMonth()
    var year = toDay.getFullYear()
    var prepand = (hour >= 12) ? 'PM' : 'AM'
    hour = (hour >= 12) ? hour - 12 : hour
    hour = (hour < 10) ? '0' + hour : hour
    minute = (minute < 10) ? "0" + minute : minute
    second = (second < 10) ? "0" + second : second
    document.querySelector('.time #hour').innerText = hour
    document.querySelector('.time #minute').innerText = minute
    document.querySelector('.row #second').innerText = second
    document.querySelector('.row #prepand').innerText = prepand
    document.querySelector('.date #day').innerText = monthList[month] + " , " + dayList[day] + " " + date;
    document.querySelector('.year').innerText=year
}
showtime()
