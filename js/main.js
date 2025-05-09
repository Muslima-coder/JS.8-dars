// let users = [
//     {
//         id: 1,
//         name: "Hamroz",
//         surname: "Nuriddinov",
//         age: 18,
//         study: null,
//         achievements: ["Degree of 3rd in Volleyboll"]
//     },
//     {
//         id: 2,
//         name: "Islomxon",
//         surname: "Dexqonov",
//         age: 16,
//         study: undefined,
//         achievements: ["weight 80kg", "Boxer"]
//     },
//     {
//         id: 3,
//         name: "Husniddin",
//         surname: "Ismoilov",
//         age: 17,
//         study: "22-school",
//         achievements: ["nothing"]
//     },
//     {
//         id: 4,
//         name: "Ulug'bek",
//         surname: "Raxmatullayev",
//         age: 20,
//         study: null,
//         achievements: ["nothing"]
//     },
// ]
// let kiritilganAge = prompt("Yoshingizni kiriting")-0

// let res = users.filter( item => item.age > kiritilganAge  )
// let res2 = res.map(item => item.age)
// console.log(res)
// console.log(res2)

//3-misol
// let sonlar = [0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 1]
// let summa = 0
// let index = sonlar.filter((item,ind) => item % 2 == 0 && ind % 2 == 0)
// index.map(item => summa += item)
// console.log( "juft qiymatli va indexlilar",index)
// console.log(summa) 


// let users = [
//     {
//         id: 1,
//         name: "Hamroz",
//         surname: "Nuriddinov",
//         age: 18,
//         study: null,
//         achievements: ["Degree of 3rd in Volleyboll"]
//     },
//     {
//         id: 2,
//         name: "Islomxon",
//         surname: "Dexqonov",
//         age: 16,
//         study: undefined,
//         achievements: ["weight 80kg", "Boxer"]
//     },
//     {
//         id: 3,
//         name: "Husniddin",
//         surname: "Ismoilov",
//         age: 17,
//         study: "22-school",
//         achievements: ["nothing"]
//     },
//     {
//         id: 4,
//         name: "Ulug'bek",
//         surname: "Raxmatullayev",
//         age: 20,
//         study: null,
//         achievements: ["nothing"]
//     },
// ]

// let idKiritilgan = prompt("Id kiriting")-0
// let res =  users.reduce((prev, value) =>{
//   if(idKiritilgan == value.id){
//     prev = value
//   }
//   return prev
// }, {} )
// console.log(res)


//Uy ishi
//Vazifa 1
//1-misol
// let xodimlar = [
//     {
//         id: 1,
//         name: "Sho'lponoy",
//         age: 89,
//         salary: 1000
//     },
//     {
//         id: 2,
//         name: "Ro'zagul",
//         age: 95,
//         salary: 2000
//     },
//     {
//         id: 3,
//         name: "Muhammadjon",
//         age: 18,
//         salary: 7000
//     },
//     {
//         id: 4,
//         name: "Asilbek",
//         age: 18,
//         salary: 6000
//     }
// ]
//reduce siz
// let salary = xodimlar.map( item => item.salary )
// let salarySumma = 0;
// salary.forEach(function(maosh) {
//     salarySumma += maosh;
// });
// console.log(salary)
// console.log(salarySumma, "maoshlar yig'indisi")

//reduce va function orqali

// function salaryFn() {
//     let salary = xodimlar.map((item) => item.salary);
//     let salarySumma = xodimlar.reduce((summa, item) => summa + item.salary, 0);
//     return { salary, salarySumma };
//   }
  
//   const { salary, salarySumma } = salaryFn();
  
//   console.log(salary);
//   console.log("maoshlar yig'indisi:", salarySumma);

// 2-misol
// let xodimlar = [
//     {
//         id: 1,
//         name: "Sho'lponoy",
//         age: 89,
//         salary: 1000
//     },
//     {
//         id: 2,
//         name: "Ro'zagul",
//         age: 95,
//         salary: 2000
//     },
//     {
//         id: 3,
//         name: "Muhammadjon",
//         age: 18,
//         salary: 7000
//     },
//     {
//         id: 4,
//         name: "Asilbek",
//         age: 18,
//         salary: 6000
//     }
// ]
// let engKattaMaoshli = xodimlar.reduce((max, item) => {
//     if (item.salary > max.salary) {
//         return item;
//     } else {
//         return max;
//     }
// });

// console.log(engKattaMaoshli.name);


// 3-misol
// let xodimlar = [
//     {
//       id: 1,
//       name: "Sho'lponoy",
//       age: 89,
//       salary: 1000
//     },
//     {
//       id: 2,
//       name: "Ro'zagul",
//       age: 95,
//       salary: 2000
//     },
//     {
//       id: 3,
//       name: "Muhammadjon",
//       age: 18,
//       salary: 7000
//     },
//     {
//       id: 4,
//       name: "Asilbek",
//       age: 18,
//       salary: 6000
//     }
//   ];
  
//     function sortlovchiFn() {
//     let kriteriya = prompt("Sortlash uchun kriteriyni tanlang (age, name, id, salary)");
//     let tartiblovchi = ["age", "name", "id", "salary"];
    
//     if (tartiblovchi.includes(kriteriya)) {
//       xodimlar.sort((a, b) => {
//         if (a[kriteriya] < b[kriteriya]) return -1;
//         if (a[kriteriya] > b[kriteriya]) return 1;
//         return 0;
//       });
//       console.log(xodimlar); 
//     } 
//   }

  
//   sortlovchiFn(); 
  
  
//4-misol
// let sonlar = [43, 12, 76, 23, 97, 28, 11];
// let natija = sonlar.sort((a, b) => a - b);
// console.log(natija);


//5-misol
// let sonlar = [43, 12, 76, 23, 97, 28, 11];
// let natija = Math.min(... sonlar)
// console.log(natija);


//6-misol
// let sozObject = [
//     { 
//      id: 1,
//      name: "Lobar",
//      age: 15,
//      size: 45
//     },
//     { 
//      id: 2,
//      name: "Nodira",
//      age: 18,
//      size: 80
//     },
//     { 
//      id: 3,
//      name: "Sho'lponoy",
//      age: 17,
//      size: 90
//     },
// ];

// let soz = prompt("Size kiriting")-0
// function sozFn (){
//     let natija = sozObject.find(item => item.size == soz)
//     return natija.name
// }
// console.log(sozFn())

//7-misol
// let sozObject = [
//         { 
//          id: 1,
//          name: "Lobar",
//          age: 15,
//          size: 45
//         },
//         { 
//          id: 2,
//          name: "Nodira",
//          age: 18,
//          size: 80
//         },
//         { 
//          id: 3,
//          name: "Sho'lponoy",
//          age: 17,
//          size: 90
//         },
//     ];
    
//     let kiritilganId = prompt("Id kiriting")-0
//     function idTopish (){
//        let natija = sozObject.find((item) => item.id == kiritilganId)
//         return natija 
//     }
//     console.log(idTopish())
//     let natijaIndex = sozObject.findIndex((item) => item.id == kiritilganId)
//     console.log("Object indexi" ,natijaIndex)


//Vazifa 2
//1-misol
// let sonlar = [55, 3, 2, 11, 3, 4, 6, 7, 12]
// let natija = sonlar.sort((a, b) => a - b)
// console.log(natija)

//2-misol
// let arr = [1, 6, 9, 5, 8, 10, 15]
// function rangeSum (arr){
//     let yigindi = 0
//      for(let i = 2 ; i < 5; i++){
//         yigindi += arr[i]
//      }
//      return yigindi
// }
// console.log(rangeSum(arr))

//3-misol
// let sonlar = [2, 4, 5, 6, 6, 3, 2, 1]
// function natija (){
//     let yangi = []
//     for(let i = 0; i < sonlar.length; i++){
//         if(!yangi.includes(sonlar[i])){
//             yangi.push(sonlar[i])
//         }
//     }
//     return yangi
// }
// console.log(natija())

//4-misol
// let sonlar = [2, 4, 5, 6, 6, 3, 2, 1];
// let sonMax = Math.max(... sonlar.map(item => item))
// let sonMin = Math.min(... sonlar.map(item => item))
// console.log("Berilgan sonlar:", sonlar)
// console.log("Berilganlar ichida eng katta son:", sonMax);
// console.log("Berilganlar ichida eng kichik son:", sonMin);


//6-misol
// let son = Number(prompt("Ixtiyoriy son kiriting"));
// let array = []
// for(let i = 1; i <= son ; i++){
//     array.push(i)
// }
// array.reverse()
// console.log(array)


//7-misol
// let son =  [5, 4, 36, 7, 8, 3, 2, 9, 6, 1,]
// let natija = son.filter(item => item % 2 === 0)
// console.log(natija)
// console.log("Juft sonlar miqdori:" ,natija.length)

//8-misol
// let son = [2, 3, 4, 5, 7]
// let natija = son.filter((item, index) => index % 2 != 0)
// console.log(natija)

//9-misol
// let son =  [5, 4, 36, 7, 8, 3, 2, 9, 6, 1,]
// function natija (){
//     let res = son.filter((item, index) => index % 2 != 0)
//     return res
// }
// console.log( "Toq indexli sonlar:",natija())
// res = natija()
// let maxRes = Math.max(...res)
// console.log( "Toq indexlilar ichida eng kattasi:",maxRes)


//10-misol
// let son =  [5, 4, 36, 7, 8, 3, 2, 9, 6, 1,]
// function natija (){
//     let res = son.filter((item, index) => index % 2 != 0)
//     let maxRes = Math.max(...res)
//     let minRes = Math.min(...res)

//     res = res.map(item => {
//     if(item === maxRes) return 0
//     if(item === minRes) return 0
//     return item
//     })

//     return res
// }

// console.log( natija())


//11-misol
// let son = Number(prompt("Ixtiyoriy son kiriting"));
// let natija = []
// for(let i = 1; i <= son ; i++){
//     natija.push(i)
// }
// let toqSonlar = natija.filter(item => item % 2 != 0)
// console.log(toqSonlar)


//12-misol
// let sonlar = [22, 3, 5, 6, 3, 2, 3];
// let teskariSonlar = [];
// for (let i = sonlar.length - 1; i >= 0; i--) {
//     teskariSonlar.push(sonlar[i]);
// }
// console.log(teskariSonlar);


//13-misol
// let son = [3, 5, 6, 3, 2, 3];
// function fn() {
//     let natija = [...new Set(son)]
//     natija.sort((a , b) => a - b)
//     return natija;
// }
// console.log(fn());


//14-misol
// let son = [3, 5, 6, 3, 2, 3, 4, 5, 8, 9, 1];
// function fn (){
//     let juftSonlar = son.filter(item => item % 2 === 0)
//     let juftlarniKichigi = Math.min(...juftSonlar)
//     return juftlarniKichigi
// }
// console.log(fn())


//Vazifa 3
//1-misol
// let fruits = [ 'Apple', 'Banana', 'Orange']
// let natija = fruits.includes('Banana')
// console.log(natija)

//2-misol
// let person = [
//     {
//         name:"Qodir",
//         age: 20
//     },
//     {
//         name:"Abdulloh",
//         age: 19
//     },
//     {
//         name:"Dilshodbek",
//         age: 20
//     }

// ]
// function personFn (){
//     let kerakliPerson = []
//    for(let i = 1; i < person.length; i++){
//     if(person[i].age === 19){
//         kerakliPerson.push(person[i])
//        }
//    }
//     return kerakliPerson
// }
// console.log(personFn())


//3-misol
// let arr1 = [2, false, "Hello"]
// let arr2 = [null, 5, "Apple"]
// let arr3 = ["Username", false, 7]
// //1-usul concat bilan
// // let natija = arr1.concat(arr2 , arr3)
// //2-usul shunchaki, arr larni yoyvorish
// let natija = [...arr1, ...arr2,... arr3]
// console.log(natija)

//4-misol
// let son1 = Number(prompt("1-sonni kiriting"))
// let ishora = prompt("Ishorani kiriting (+, -, *, /)")
// let son2 = Number(prompt("2-sonni kiriting"))
// let natija;
// switch (ishora) {
//     case "+":
//     natija = son1 + son2;
//     break;
//     case "-":
//     natija = son1 - son2;
//     break;
//     case "*":
//     natija = son1 * son2;
//     break;
//     case "/":
//     natija = son1 / son2;
//     break;
//     default:
//   console.log("Noto'g'ri ishora kiritildi");

// }
// console.log("Natija:", natija)

//5-misol
// let arr1 = [7, 8, 9]
// let arr2 = [6, 5, 4]
// let arr3 = [3, 2, 1]
// let hammaArr = arr1.concat(arr2, arr3)
// let sortlanganArr = hammaArr.sort((a, b) => a - b)
// console.log(sortlanganArr)


//100 ballga
// Function Declaration -  bu eng oddiy va ko'p ishlatiladigan function yaratish usulidir. Bu usulda function nomi aniq ko'rsatilgan bo'lib, uni keyincha chaqirish mumkin. Funksiya definitiondan keyin chaqirilishi mumkin.
//Function Expression – bu function o‘zgaruvchiga tayinlanadi va functionni bir o‘zgaruvchi sifatida ishlatish imkonini beradi. Bu usulda function yozilgan joyda darhol chaqirilmaydi.
//Arrow Function – bu ES6 bilan joriy qilingan va ancha qisqaroq yozilishi bilan ajralib turadigan function turidir. Arrow functionda function kalit so‘zi o‘rniga => operatori ishlatiladi. Bu turdagi funksiyalar, ayniqsa, qisqa va o‘zgarmas funksiya yaratishda foydalidir.
// Immediately Invoked Function Expression (IIFE)
// Yaratilgandan so‘ng darhol bajariladigan funksiya. Odatda, qo‘llanilishdan keyin global o‘zgaruvchilardan qochish va xususiy (private) scope yaratish uchun ishlatiladi.
// Constructor Function
// Obyekt yaratish uchun ishlatiladigan maxsus funksiya. new operatori bilan chaqiriladi va this orqali yangi obyektga xususiyatlar beriladi.
// Factory Function
// Yangi obyektlarni yaratish uchun oddiy funksiya (constructor functionsiz). Odatda, obyektni qaytaradi va new ga ehtiyoj yo‘q.
// Recursive Function
// O‘zini o‘zi chaqiradigan funksiya. Odatda, takrorlanuvchi (iterativ) masalalar uchun ishlatiladi.

//Function Declaration
//Ikki sonni qo‘shadigan funksiya yoz. Funksiya nomi qoshish bo‘lsin, ikkita parametr olsin va ularning yig‘indisini qaytarsin.
// function Qoshish (a, b){
//     return a + b
// }
// console.log(Qoshish( 5, 8))

//Function Expression
// Ikki sonni ko‘paytiradigan funksiya yoz. Funksiya nomi kopaytirish bo‘lsin, ikkita parametr olsin va ularning ko‘paytmasini qaytarsin. Bu safar function expressiondan foydalan.
// const kopaytirish = function(a, b) {
//     return a * b;
// }
// console.log(kopaytirish(4, 6));

//Arrow function
// Ikki sonni ko‘paytiradigan funksiya yoz. Funksiya nomi kopaytirish bo‘lsin, ikkita parametr olsin va ularning ko‘paytmasini qaytarsin. Bu safar function expressiondan foydalan.
// const kopaytirish = (a, b) => {
//     return a * b;
// }
// console.log(kopaytirish(44, 68));


// Immediately Invoked Function Expression (IIFE)
// Ikki sonni ko‘paytiradigan funksiya yoz. Funksiya nomi kopaytirish bo‘lsin, ikkita parametr olsin va ularning ko‘paytmasini qaytarsin. Bu safar function expressiondan foydalan.
// (function(a, b) {
//     console.log(a * b);
// })(5, 10);


// Constructor Function
// Ikki sonni  bo'ladigan funksiya yoz. Funksiya nomi kopaytirish bo‘lsin, ikkita parametr olsin va ularning bo'linmasini qaytarsin. Bu safar function expressiondan foydalan.
// const bolish = function(a, b) {
//     return a / b;
// }
// console.log(bolish(200, 8));

//Factory Function
// Factory Function misoli
// function foydalanuvchiYarat(ism, yosh) {
//     return {
//         ism: ism,
//         yosh: yosh,
//         salomBer: function() {
//             console.log(`Salom, mening ismim ${ism} va yoshim ${yosh} da.`);
//         }
//     };
// }
// const user1 = foydalanuvchiYarat("Laylo", 15);
// const user2 = foydalanuvchiYarat("Ali", 16);
// user1.salomBer();
// user2.salomBer();

//Recursive Function
// Recursive function + Array methodlari (flatMap, reduce)
// function yigindi(arr) {
//     return arr.reduce((sum, current) => {
//         if (Array.isArray(current)) {
//             return sum + yigindi(current);
//         } else {
//             return sum + current;
//         }
//     }, 0);
// }
// const numbers = [1, [2, 3], [4, [5, 6]], 7];
// const natija = yigindi(numbers);
// console.log(natija); 
