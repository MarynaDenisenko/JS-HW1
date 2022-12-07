// Завдання
/* Создать функцию, которая выведет в консоль 
номер этажа и номер подъезда по номеру квартиры. 
Этажей у нас 9, квартир на этаже по 3*/
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 200; /*или любое другое число, 
но минимум трехзначное*/

let porch = 0; // номер подъезда
let floor = 0; // номер этажа
if (roomNumber >= 100)
{
porch =  roomNumber / (roomsOnFloor*floors);
porch = ((porch - (porch % 1)) + 1);

if (roomNumber % 3 == 0){
floor = (roomNumber % 27) / 3;
//floor = ((floor - (floor % 1)) + 1);
}
else if (roomNumber % 3 !== 0){
    floor = (roomNumber % 27) / 3;
    floor = ((floor - (floor % 1)) + 1);
    //floor = ((floor - (floor % 1)) + 1);
    }

console.log('Номер подъезда - '+ porch + '.');
console.log('Номер этажа - '+ floor + '.');
}
else {
    console.log('Введите любое другое число, но минимум трехзначное.');  
}
