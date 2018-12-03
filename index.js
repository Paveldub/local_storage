const myName = document.getElementById('myName');
const bDay = document.getElementById('bDay');
const about = document.getElementById('about');

const save = document.getElementById('save');
const load = document.getElementById('load');
const isSessionStorage = document.getElementById('isSessionStorage');

let storage = localStorage;

save.addEventListener('click', () => {
    storage.data = JSON.stringify({
        myName: myName.value,
        bDay: bDay.value,
        about: about.value
    });
});

load.addEventListener('click', () => {
    const data = JSON.parse(storage.data || '{}');

    myName.value = data.myName || '';
    bDay.value = data.bDay || '';
    about.value = data.about || '';
});



