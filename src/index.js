const init = () => {
    const inputForm = document.querySelector("#productDescriptionForm");
    inputForm.addEventListener("submit", (event)  => {
      event.preventDefault();
     
     const input = document.querySelector("input#searchByID");
  
     
  
     fetch(`http://localhost:3000/tshirt/${input.value}`)
     .then((response) => response.json())
     .then((data) => {
      
      const neckDesign = document.querySelector("#neckDesign");
      const color = document.querySelector("#color");
     const size = document.querySelector("#size");
     const price = document.querySelector("#price");
      const inventory = document.querySelector("#inventory");
      
      neckDesign.innerText = data.neckDesign;
      color.innerText = data.color;
      size.innerText = data.size;
      price.innerText = data.price;
      inventory.innerText = data.inventory;
     });
    });
  }
   document.addEventListener('DOMContentLoaded', init);
  
  let processedData = [];
 
  const init1 = () => {
    const inputForm1 = document.querySelector("#addToCartForm");
    inputForm1.addEventListener("submit", (event)  => {
      event.preventDefault();
     
     const input = document.querySelector("input#EnterProductNumber");
  
    

     fetch(`http://localhost:3000/tshirt/${input.value}`)
     .then((response) => response.json())
     .then((data) => {
       
       const priceP = document.querySelector("#priceItem");
       const numItems = document.querySelector("#numItems");
       const totalAmount = document.querySelector("#totalAmount");
       //let processedData = [];
      
       priceP.innerText = data.price;
      processedData.push(priceP.innerText);
      console.log(processedData);
      //add up prices from the process data.
      // processed data is an array of prices.
      // iterate through processedData and count each element in it.
      // Use a for loop to iterate.
        let count = 0;
       for (const item of processedData) {
           //  console.log(item)
           count += 1;

       }

       console.log(count);
       
       numItems.innerText = count
       let totalAm = 0;
       for (const item of processedData){
       // console.log(typeof item)
        const pr = Number(item);
            totalAm += pr;

       }
     // console.log(totalAm);
        totalAmount.innerText = totalAm
        });
  });
}
document.addEventListener('DOMContentLoaded', init1);

document.getElementById("myBtn1").addEventListener("click", displayCheckOut);

  let totalAm = 0;
  for (const item of processedData){
   console.log(typeof item)
   const pr = Number(item);
       totalAm += pr;
     }
 console.log(totalAm);
  
 function checkOut() {
      totalAm += totalAm*0.1;
      return totalAm;
 }
function displayCheckOut() {
  document.getElementById("demo1").innerHTML = checkOut();
 }
   // Get references to the button and the thank you message
   // Add a click event listener to the exit button
const element = document.getElementById("myBtn");
element.addEventListener("click", myF);
function myF() {
document.getElementById("demo").innerHTML= "Thank you for shopping at Ricardo's Kamiseta";
}
