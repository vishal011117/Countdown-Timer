const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// var countDate = new Date('nov 17, 2020 18:18:00').getTime();
var countDate = new Date('jan 1, 2021 00:00:00').getTime();

function newYear() {
  const now = new Date().getTime();
  let gap = countDate - now;

  if (gap < 0) {
    document.querySelector('.countdown').style.display = 'none';
    document.querySelector('.endcountdown').style.display = 'flex';
    return clearTimeout(x);
  }

  const d = Math.floor(gap / (day));
  const h = Math.floor(gap % (day) / (hour));
  const m = Math.floor(gap % (hour) / (minute));
  const s = Math.floor(gap % (minute) / (second));

  document.getElementById('day').innerHTML = d;
  document.getElementById('hour').innerHTML = h;
  document.getElementById('minute').innerHTML = m;
  document.getElementById('second').innerHTML = s;

  var x = setTimeout(function() {
    newYear();
  }, 1000);
}

newYear();