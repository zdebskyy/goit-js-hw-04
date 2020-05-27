
// const findBestEmployee = function(employees) {
   

//     const deals = Object.values (employees);
 
//     let bestEmployee = 0;
    
//     for(let i = 0; i < deals.length; i += 1){
      
        
//         if (deals[i] > bestEmployee){
//             bestEmployee = deals[i];
//         }
        
//     }
//     return  bestEmployee;

// }


const findBestEmployee = function(employees) {

  const deals = Object.keys (employees); 

  let bestEmployee = 0;
  
for( const deal of deals){

  // console.log(deal);
  // console.log(employees);
  // console.log(employees[deal]);
  // console.log(deals);
  
  if (employees[deal] > bestEmployee){
    bestEmployee = employees[deal];

  }
 
}

return `Name? : ${bestEmployee} `;
}

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux



//   Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
//   и возвращает имя самого продуктивного (который выполнил больше всех задач). 
//   Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".