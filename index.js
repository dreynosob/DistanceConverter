
var converType = 'miles';
var heading = document.querySelector('h1')
var intro = document.querySelector('p');
var answerDiv = document.getElementById('answer');
var form = document.getElementById('convert');

document.addEventListener('keydown', function(event){
    const key = event.code;

    if(key === 'KeyK'){
        converType = 'Kilometers'
        heading.innerHTML = `${converType} to Miles converter`;
        intro.innerHTML = '<p>Type in a number of kilometers and click the button to convert the distance to miles.</p>'
    }else {
        converType = 'Miles'
        heading.innerHTML = `${converType} to Kilometers converter`;
        intro.innerHTML = '<p>Type in a number of miles and click the button to convert the distance to kilometerss.</p>'
    }


})

form.addEventListener('submit', function(event){
    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value)
    var conversion = (distance * 1.609344).toFixed(3);
    if(distance){
        if(converType === 'Miles'){
            var conversion = (distance * 1.609344).toFixed(3)
            answerDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`

        }else {
            var conversion = (distance * 0.621371192).toFixed(3)
            answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles</h2>`

        }
    }else {
        answerDiv.innerHTML = '<h2>Please provide a number!</h2>'
    }
})
