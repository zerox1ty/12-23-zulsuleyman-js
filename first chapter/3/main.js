// Тот самый массив

const developers = [
    { name: 'John', surname: 'Doe', age: 20, greet: () => { console.log('Здравствуйте!') } },
    { name: 'Василий', surname: 'Иванов', age: 21, greet: () => { console.log('Здравствуйте!') } },
    { name: 'Екатерина', surname: 'Демидова', age: 21, greet: () => { console.log('Здравствуйте!') } },
    { name: 'Пётр', surname: 'Шереметьев', age: 19, greet: () => { console.log('Здравствуйте!') } },
  ];
  
  const newDeveloper = {
    name: prompt('HR: Как Вас зовут?'), 
    surname: prompt('HR: Какая у Вас фамилия?'), 
    age: prompt('HR: Сколько Вам лет?'), 
  };

  if (newDeveloper.age < 18) {
      alert('Вы нам не подходите!');
  }

  else {
      alert('Вы нам подходите!');
  }
  
  let exp;
  
  // Проверка на то, что мы вводим именно число
  while (!Number.isInteger(parseInt(exp))) {
    exp = prompt('HR: Сколько лет опыта в it?');
  }
  
  if (exp < 3) {
    alert('HR: Прости, но у тебя слишком мало опыта :(');
  } 
  else {
    if (exp > 15 ) {
        alert('HR: Не ври !');
      } 
      else {
        alert("Lead: Добро пожаловать в команду!");
        alert("Lead: Поприветствуйте нового коллегу!");
      }
  }

    if (exp > newDeveloper.age - 16) {
        alert('HR: Прости, но давай без шуток :(');
        expNew = prompt('HR: Давай еще раз!');
      }
    else {
        developers.map( (item) => {
            alert(` ${item.name}, Привет! `)
        });
        developers.push(newDeveloper);
    };

    /**
     * Нужно переписать код ниже так, чтобы каждый сотрудник 
     * из массива developers поздоровался с Вами.
     * 
     * 💡 @ПОДСКАЗКА : используйте метод прототипа массивов
     * (т.е. метод, который есть у любого массива) - map()
     * 
     * Шаблон сообщения - ИМЯ: Привет!
     *  */

    /**
     * Добавить объект newDeveloper в массив developers
     * (именно в этом месте кода)
     */

console.log(developers);