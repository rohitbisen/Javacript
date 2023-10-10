const myobj = {
    js: 'javascript',
    cpp: 'c++',
    py: 'Python',
    rb: 'Ruby'
}

for (const key in myobj) {
    // console.log(`${key} is shortcut for ${myobj[key]}`);
}

const programming = ['js', 'cpp', 'java', 'python', 'c']

for (const key in programming) {
    console.log(programming[key]);
}