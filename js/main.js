// make days
const daysOfWeeks = ['sun','mon','tus','wed','thu','fri','sat'];

// make month
const months = ['JAN','FEB','MAR','APR','MAY','JUL','JUN','AUG','SEP','OCT','NOV','DEC'];

function clock() {
    // set variabel date
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let dayToday = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let day = '';

    // add leading zeros to them
    // AM OR PM
    if (hour < 11) {
        day = 'AM';
    } else {
        day = 'PM';
    }

    // hour process
    if (hour < 10) {
        hour = '0'+hour;
    } else {
        hour;
    }

    // minute process
    if (minute < 10) {
        minute = '0'+minute;
    } else {
        minute;
    }
    
    // second process
    if (second < 10) {
        second = '0'+second;
    } else {
        second;
    }

    // print time
    document.getElementById('hours').innerHTML = hour; 
    document.getElementById('min').innerHTML = minute; 
    document.getElementById('sec').innerHTML = second;
    document.getElementById('time').innerHTML = day;  
    document.getElementById('day').innerHTML = date;
    document.getElementById('month').innerHTML = months[month];
    document.getElementById('year').innerHTML = year;   
    document.getElementById(''+daysOfWeeks[dayToday]+'').style.color = '#fff'; 
}

// callback clock
clock();

setInterval(function(){
    clock();
}, 400)