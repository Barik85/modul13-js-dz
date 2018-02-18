/*
  Соединить задание 1 и 2
  
  Напишите функцию validate которая проверяет все поля формы 
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для поля.
  
  При клике на кнопку submit должна происходить проверка.
  
  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.
  
    showResults добавляет в список с классом .results 
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation
  
    Для li с положительным результатом дать класс success, 
    с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

submitBtn.addEventListener("click", validate);



//My code

let regName = /^\s*[a-zа-яґєії`´ʼ’ʼ’]+$/i;
let regPhone = /^\+?3?8?0{1}[1-9]{1}\d{8}$/;
let replaceReg = /[()-\s]/g

function validate(evt) {
    evt.preventDefault();
    let result = {};
    result.firstname = regName.test(firstname.value);
    result.lastname = regName.test(lastname.value);

    let clearTel = tel.value.replace(replaceReg, "");
    result.tel = regPhone.test(clearTel);
    showResults(result);
    return result;
}

function showResults(result) {
    let markup = "";
    for (key in result) {
        if (result[key] == true){
            markup += "<li class='success'>" + "SUCCESS: " + key + " passed validation " + "</li>";
        } else if (result[key] == false){
            markup += "<li class='error'>" + "ERROR: " + key + " failed validation " + "</li>";         
        }
    }
    resultsList.innerHTML = markup;
}



// Testing validation

// let names = ["Vasya", "marina", " Петя", "Петя", "эДуард", "Nd4sksd", "19203", "1Hekwl", "Den2", 
// "Мой властелин", "А.нтон", "Віка", "Інна", "іван", "Євген"
// ];

// function validateDev(name, reg){
//     return reg.test(name);
// };
// names.map( (name) => {
//     console.log( name + " : " +validateDev(name, regName) ) 
// });

// let phoneNums = ['+380502456421', '380443214566', '563521313', '050 322 21 34',
// 'fafa341414', '4323fafaf', '0994562145', '00532156723',
// '80664326781', "+38 050 654 31 67", "+3806643414141414141",
// "050-654-31-67", "(050) 654-31-67"];

// phoneNums.map( (phone) => {
//     let clearPhone = phone.replace(replaceReg, "");
//     console.log(phone + " : " + validateDev(clearPhone, regPhone))
// });