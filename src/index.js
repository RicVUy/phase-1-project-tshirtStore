const init = () => {
    const inputForm = document.querySelector("#productDescriptionForm");
    inputForm.addEventListener("submit", (event)  => {
      event.preventDefault();
     
     const input = document.querySelector("input#searchByID");
  
     console.log(input.value);
  
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
  
  //let processedData = [];
 
  const init1 = () => {
    const inputForm1 = document.querySelector("#addToCartForm");
    inputForm1.addEventListener("submit", (event)  => {
      event.preventDefault();
     
     const input = document.querySelector("input#EnterProductNumber");
  
     console.log(input.value);
     
     fetch(`http://localhost:3000/tshirt/${input.value}`)
     .then((response) => response.json())
     .then((data) => {
       
       const price = document.querySelector("#priceItem");
       let numItems = document.querySelector("#numItems");
       let totalAmount = document.querySelector("#totalAmount");
       let processedData = [];
      
       price.innerText = data.price;
      processedData.push(price.innerText);
      console.log(processedData);
      
     numItems =  function findNumItems() {
        for (const item of processedData) {
          numItems +=1;
          }return numItems;
       }
       console.log(numItems());
      totalAmount = function findTotalAmount() {
        for (const item of processedData) {
          totalAmount += item;
       } return totalAmount;
      }
       console.log(totalAmount());
        });
  });
}
document.addEventListener('DOMContentLoaded', init1);

document.getElementById("myBtn1").addEventListener("click", displayCheckOut);

 function displayCheckOut() {
  document.getElementById("demo").innerHTML = checkOut();
 }
 function checkOut() {
     totalAmount += totalAmount*0.1;
     return totalAmount;
 
}
  
   // Get references to the button and the thank you message
const exitButton = document.getElementById('exitButton');
const thankYouMessage = document.getElementById('thankYouMessage');

// Add a click event listener to the exit button
exitButton.addEventListener('click', function() {
  // Show the thank you message
  thankYouMessage.style.display = 'block';
});
