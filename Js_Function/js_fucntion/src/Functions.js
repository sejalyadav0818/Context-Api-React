import React from "react";

const Functions = () => {
  //for..of
  const colors = ["white", "black", "blue"];
  const number = [2,34,5,7,8,9,43,5,34,4234,34,34,34,34,3,4,3545,656,5,654];
  
  for (const color of colors) {
    console.log(color);
  }

  //spread
  const clone = [...colors, colors];
  console.log(clone);

  ///sclice
  const slicearray = colors.slice(0, 2);
  console.log(slicearray);

  //includes
  const includesarray = colors.includes("white");
  console.log(includesarray);

  //every 
  const  iswhite =()=>{
    return colors.includes('white');
  }
  const everyarray = colors.every(iswhite);
  console.log(everyarray);

  //indexOf
  const indexofarray = colors.indexOf('white');
  console.log(indexofarray);


  //some 
  const iseven =(n)=>{
    for (const no of number) {
       return number % 2 === 0;
    
      
    }
  }
  const somearray = colors.some(iseven);
  console.log(somearray);

  // const filterarray = number.filter(iseven);
  // console.log(filterarray);
  // return <div>Functions</div>;
};

export default Functions;
//ref: https://dmitripavlutin.com/operations-on-arrays-javascript/
//https://medium.com/@mandeepkaur1/a-list-of-javascript-array-methods-145d09dd19a0