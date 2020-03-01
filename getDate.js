var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };

let date = document.querySelector('.date')

function prnDt(opt = options){
    date.innerHTML = new Date().toLocaleTimeString('en-us', opt)
}
