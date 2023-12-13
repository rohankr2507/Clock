// let a = new Date();
// let t = a.getTime();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();
// let d = a.getDate();

// // console.log(t);
// console.log(h, m, s);
// console.log(d);
// console.log(a.getDate(), a.getMonth(), a.getFullYear());

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

setInterval(() => {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDay();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    let time = document.getElementById('timeDisplay');
    time.innerText = `${h}:${m}:${s}`;
    let day = document.getElementById('day');
    day.innerText = days[d];
}, 1000);