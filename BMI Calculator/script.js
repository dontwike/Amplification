const form = document.querySelector('.form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const h = parseInt(document.querySelector('.height').value)
    const w = parseInt(document.querySelector('.weight').value)

    console.log(h, w)
    const res = (w / ((h * h) / 10000)).toFixed(2);

    document.querySelector('.result').innerHTML = `${res}`
})