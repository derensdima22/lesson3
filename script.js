alert("Условные и логические операторы");
const lesson = +prompt("Введи номер задания от 1-12");
switch (lesson) {
  case 1: {
    //1.В переменную x записывается число, введенное пользователем в диалоговое окно.
    // Проверить и вывести на экран, x – отрицательное число, положительное или ноль.
    const x = prompt("Введи число", "");
    if (x === "" || x === null) console.log("Ошибка, я ждал от тебя числа");
    let y = +x;
    if (isNaN(y)) console.log("Ошибка я ждал от тебя числа");
    if (y < 0) console.log("Введено отрицательное число");
    else if (y > 0) console.log("Введено положительное число");
    else if (y == 0) console.log("Введён 0");
    break;
  }
  case 2: {
    //2.	Создайте три переменные с любыми числовыми значениями.
    //Используя условный оператор  и не используя логические, найдите
    // минимальное число и отобразите на экране имя переменной и ее значение
    let a = 11;
    let b = 22;
    let c = -33;
    a < b ? (a < c ? `a:${a}` : `c:${c}`) : b < c ? `b:${b}` : `c${c}`;
    break;
  }
  case 3: {
    //3.У вас и у вашего друга в кармане столько денег, сколько было указано
    // в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете
    //полететь на Майорку или выпить пива. С помощью условного оператора определите
    // ваши возможности и отобразите на экране в alert.
    let user1 = +prompt("Сколько денег у первого друга", "");
    let user2 = +prompt("Сколько денег у второго друга", "");
    let result = user1 + user2;
    alert(
      result > 6000
        ? "Добро пожалвать на Майорку"
        : "Ваш отпуск пройдет на лавочке с пивасом"
    );
    break;
  }
  case 4: {
    //4.В переменную age запишите возраст человека. Если значение
    // больше или равно 20 и меньше 27, в alert выводится “Выслать повестку”.
    let age = +prompt("Введите свой возвраст", "");
    age >= 20 && age < 27 ? "Выслать повестку" : "Повезло";
    break;
  }
  case 5: {
    //5.Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255.
    // Какая маршрутка приехала – определяется в prompt. Если ваша, то вы
    //едете домой, в противном случае – ожидаете.
    let minibus = +prompt("Номер маршрутки", "");
    minibus === 7 || minibus === 225 || minibus === 255
      ? "Наконец-то моя"
      : "Сколько можно ждать";

    break;
  }
  case 6: {
    //6.В переменную day записан текущий день недели.
    //Если это не суббота и не воскресенье, выведите в alert сообщение
    // о необходимости идти на работу.
    let data = new Date();
    let day = data.getDay();
    let arr = [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "субота",
    ];
    alert(
      day > 0 && day < 6
        ? `сейчас ${arr[day]} поэтому нужно работать`
        : `сейчас ${arr[day]} ура!!! Выходные!!!`
    );
    break;
  }
  case 7: {
    //7.Запросите из prompt переменные x и y значения от -20 до 20.
    //Если переменная x равна или меньше 1, а переменная y больше или
    // равна 3 или меньше 0, то выведите сумму этих переменных, иначе
    //выведите 'Неверно!'.
    function examination(num, str) {
      while (num < -20 || num > 20) {
        alert(`Введено не верное число ${str}:${num}`);
        num = +prompt(`Введите число ${str} от -20 до 20`, "");
      }
    }
    let x = +prompt("Введите число X от -20 до 20", "");
    examination(x, "X");
    let y = +prompt("Введите число Y от -20 до 20", "");
    examination(y, "Y");
    x <= 1 && (y >= 3 || y < 0) ? alert(`сумма:${x + y}`) : alert("Неверно!");

    break;
  }
  case 8: {
    //8.Если переменная x больше 2 и меньше 11, или переменная y больше
    // или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте
    // к x число 5. Выведите новое значение переменной на экран.
    let x = 7;
    let y = 11;
    alert((x > 2 && x < 11) || (y >= 6 && y < 14) ? x + 2 : x + 5);

    break;
  }
  case 9: {
    //9.Получите из prompt значение для имени пользователя.
    //Выведите на экран приветствие. Учтите вариант, что пользователь
    // может не ввести ничего или нажать на Отмена.
    const user = prompt("Введите имя", "Вася");
    if (user === "" || user === null) alert("Ошибка");
    else alert(`Hello ${user}`);

    break;
  }
  case 10: {
    //10.Создайте две переменные: greeting и lang. Переменная greeting – пустая строка.
    // Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt).
    // Если она имеет значение 'ru', то в переменную greeting запишите
    // приветствие на русском языке, если имеет значение 'en' – то на
    // английском, если 'de' – на немецком. Выведите на экран приветствие в
    // зависимости от значения переменной lang. Решите задачу через if-else и
    // через switch-case.
    let user = confirm("Если ОК то через if, если ОТМЕНА то через switch");
    user == true ? helloIf() : helloSwitch();
    //Задание сделано через if-else.
    function helloIf() {
      alert("Задание выполняеться через if-else");
      const lang = prompt("Введите 'en' или 'ru' или 'de'");
      let greeting = "";
      if (!(lang === "en" || lang === "ru" || lang === "de")) {
        return alert("Введено не правельное значение");
      }
      if (lang === "en") greeting = "Hello world";
      else if (lang === "ru") greeting = "Привет мир";
      else if (lang === "de") greeting = "Hallo Welt ";
      alert(greeting);
    }

    //Задание сделано через switch-case.
    function helloSwitch() {
      alert("Задание выполняеться через swinch-case");
      const lang = prompt("Введите 'en' или 'ru' или 'de'");
      let greeting = "";
      switch (lang) {
        case "en":
          greeting = "Hello world";
          break;
        case "ru":
          greeting = "Привет мир";
          break;
        case "de":
          greeting = "Hallo Welt ";
          break;
        default:
          greeting = "Введено не правельное значение";
          break;
      }
      alert(greeting);
    }
    break;
  }
  case 11: {
    //11.В переменной month хранится текущий месяц (new Date()).
    // Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
    let data = new Date();
    let month = data.getMonth();
    switch (month) {
      case 0:
      case 1:
      case 11:
        alert("сейчас зима");
        break;
      case 2:
      case 3:
      case 4:
        alert("сейчас весна");
        break;
      case 5:
      case 6:
      case 7:
        alert("сейчас лето");
        break;
      case 8:
      case 9:
      case 10:
        alert("сейчас осень");
        break;
      default:
        alert("Что-то пошло не так");
        break;
    }
    break;
  }
  case 12: {
    //12.Переменная lang может принимать два значения: 'ru' и 'en'.
    //Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение 'ru',
    // то в переменную result запишите название дня недели на русском языке в
    //соответствии со значением переменной day (0 – воскресенье, 1 – понедельник,
    // 2 – вторник и т.д.). Если же lang имеет значение 'en' – то аналогично,
    // но день недели будет на английском.
    let lang = prompt("Выберите язык:'ru','en'");
    let num = +prompt("Введите число");
    const arr = {
      ru: [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "субота",
      ],
      en: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Freitag",
      ],
    };
    let result = arr[lang][num - 1];
    console.log(result);
    break;
  }
  default:
    alert("Нет такого задания");
}

//Циклы!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
alert("Циклы");
const lesson2 = +prompt("Введи номер задания от 1-11");
switch (lesson2) {
  case 1: {
    //1.Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.
    function stringLike(num) {
      let str = "";
      for (let i = 0; i < num; i++) {
        i % 2 === 0 ? (str += ".") : (str += "#");
      }
      alert(str);
    }
    stringLike(+prompt("Введите число больше 0"));
    break;
  }
  case 2: {
    //2.Напишите цикл с шагом 1, в теле которого распечатываются квадраты
    // каждого четного значения счетчика.
    function squaredValue(num) {
      for (let i = 1; i < num; i++) {
        if (i % 4 === 0) alert(`${i} в квадрате:${Math.pow(i, 2)}`);
      }
    }
    squaredValue(+prompt("Введите число"));
    break;
  }
  case 3: {
    //3.	Используя любой цикл, напишите программу, которая в консоли выводит
    // текстовое поздравление. Программа поздравляет того, чье имя определяется
    // в переменной username:
    //Happy birthday to you
    //Happy birthday to you
    //Happy birthday dear {{username}}
    //Happy birthday to you
    (function HappyBirthday() {
      let userName = "";
      do {
        userName = prompt("Введите имя");
        if (userName == "") {
          alert("Happy birthday to you");
        } else if (typeof userName == "string") {
          alert(`Happy birthday dear ${userName}`);
        }
      } while (userName !== null);
    })();
    break;
  }
  case 4: {
    //4.Напишите цикл с confirm, который продолжается при нажатии
    // на Отмена и прерывается при нажатии на Ok.
    (function confirmWhile() {
      let whileConfirm;
      while (!whileConfirm) {
        whileConfirm = confirm("");
      }
    })();

    break;
  }
  case 5: {
    //5.В окно prompt вводится число. Напишите цикл, в котором суммируются
    //все нечетные числа до диапазона, введенного пользователем. Результат
    // отобразите в окне alert.
    (function sumOfOdd(sum) {
      let newSum = 0;
      for (let i = 0; i < sum; i++) {
        if (i % 2 !== 0) newSum += i;
      }
      alert(newSum);
    })(+prompt("Введите число"));
    break;
  }
  case 6: {
    //6.Напишите бесконечный цикл, который прерывается при помощи команды break,
    // когда Math.random() > 0.9. Выведите в окно alert случайное число,
    //прервавшее цикл, и количество итераций цикла.
    let iteration = () => {
      let iteration = 0;
      let random = 0;
      do {
        random = Math.random();
        iteration++;
      } while (random < 0.9);
      alert(`number:${random}, iterations:${iteration}`);
    };
    iteration();
    break;
  }
  case 7: {
    //7.	Используя вложенные циклы, распечатайте в консоли значения
    // таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...
    let multiplicationTable = () => {
      let str = "";
      for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
          str += `${i}*${j}:${i * j}\n`;
        }
      }
      console.log(str);
    };
    multiplicationTable();
    break;
  }
  case 8: {
    //8.С помощью цикла for с пустым телом сформируйте строку,
    //представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...

    // 0+1 1+1 1+2 2+3 3+5
    function fibonacci(num) {
      let i = 0;
      let sum1 = 0;
      let sum2 = 1;
      let sum3 = 0;
      for (;;) {
        if (i < num) {
          console.log(`${sum3} `);
          sum3 = sum1 + sum2;
          sum1 = sum2;
          sum2 = sum3;
        }
        i++;
      }
    }
    fibonacci(+prompt("Введите число"));
    break;
  }
  case 9: {
    //9.Запустите цикл, в котором пользователю предлагается вводить число
    // с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода
    //из цикла распечатайте количество введенных чисел, их общую сумму и
    //среднее арифметическое.
    let user;
    let iteration = 0;
    let sum = 0;
    let str = 0;
    while (true) {
      user = prompt("введите число");
      if (user === null) break;
      let userNum = +user;
      if (isNaN(userNum)) {
        str++;
        continue;
      }
      sum += userNum;
      iteration++;
    }
    console.log(
      `количество введенных чисел:${iteration}. сумма:${sum}. Среднее арифметическое:${
        sum / iteration
      }. Количество попыток ввести число:${str} `
    );

    break;
  }
  case 10: {
    //10.Напишите проверку пароля, введенного пользователем (заведомо определите пароль).
    // Если введенный пароль правильный, то программа выдает сообщение “Вы успешно
    // авторизованы”. Если пароль неправильный, программа снова выдает запрос
    // пароля – до тех пор, пока пользователь не введет правильный пароль или не
    // нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с
    // текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный,
    // тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный,
    // тогда снова выдать запрос пароля

    const password = "qwerty";
    let user = "";
    outer: while (user !== password) {
      user = prompt("введите пароль");
      if (user === null) {
        let br = confirm("Точно хотите прервать");
        if (br) break;
        if (!br) continue outer;
      }
      alert("пароль не верен");
      user = prompt("введите пароль");
    }
    if (user === password) alert("вы вошли в систему");

    break;
  }
  case 11: {
    //11.	Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50,
    // но есть условия:
    //- если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
    // - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
    //- если число делится и на 3 и на 5 без остатка, то выводить не это число,
    // а слово «FizzBuzz»;
    for (let i = 0; i < 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
      else if (i % 3 === 0) console.log("Fizz");
      else if (i % 5 === 0) console.log("Buzz");
      else console.log(i);
    }

    break;
  }
  default:
    alert("Нет такого задания");
}
