  function name()
  {
  let adminName = "Наталья Богатырева";
  var userName = prompt ("Введите свое имя ", "Имя");
  var userSur = prompt ("Введите свою фамилию ", "Фамилия");
  var txt=("");
  if (adminName == (userName+" "+userSur))
      {
          alert("Ты - автор программы. Так не считается. Позови другого пользователя!");
      }
  else
      {     
          alert( "Привет " + userName +" "+ userSur +"! Поздравляю! Вы участвуете в тестировании моего Домашего Задания по JavaScript. Спасибо!");
      }
  }

   name();
   