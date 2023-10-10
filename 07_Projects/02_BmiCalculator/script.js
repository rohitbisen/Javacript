const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.results')
    const guide = document.querySelector('.weight-guide')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter valid height ${weight}`
    }
    else {
        const bmi = (weight/ ((height*height)/10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`
        if (bmi <= 18.6) {
            guide.innerHTML = `You Are Under Weight ${bmi}`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            guide.innerHTML = `You Are Fit, Maintain this ${bmi}`
        }
        else {
            guide.innerHTML = `You Are Over Weight ${bmi}`
        }
    }
});