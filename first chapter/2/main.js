let name = prompt('Как тебя зовут?');

console.log(name);

let age = prompt('Сколько тебе лет?');

console.log(age);

if (age < 20) {
    alert("Вам меньше 20!")
}

else {
    let i = 0 
    for (let i = 0; i < 5; i=i+1) {
        alert('Привет!')
    }
};

let quest = confirm("Хочешь учить JS?");

console.log(quest)

if (quest) {
    alert('Super!')
};



