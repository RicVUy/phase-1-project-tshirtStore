const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event)  => {
      event.preventDefault();
     
     const input = document.querySelector("input#searchByID");
  
     console.log(input.value);
  
     fetch(`http://localhost:3000/tshirt/${input.value}`)
     .then((response) => response.json())
     .then((data) => {
      //const brand = document.querySelector("section#TshirtDetails h4");
      const neckDesign = document.querySelector("section#TshirtDetails p1");
      const color = document.querySelector("section#TshirtDetails p2");
     const size = document.querySelector("section#TshirtDetails p3");
     const price = document.querySelector("section#TshirtDetails p4");
      const inventory = document.querySelector("section#TshirtDetails p5");
      //brand.innerText = data.brand;
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
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event)  => {
      event.preventDefault();
     
     const input = document.querySelector("input#EnterProductNumber");
  
     console.log(input.value);
     
     fetch(`http://localhost:3000/tshirt/${input.value}`)
     .then((response) => response.json())
     .then((data) => {
       
      let totalAmount = 0;
      let numItems = 0;
       numItems = document.querySelector("section#TshirtDetail p1");
       totalAmount = document.querySelector("section#TshirtDetail p2");
      //const pricePtax = document.querySelector("section#TshirtDetail p3");
      //const updatedInv = document.querySelector("section#TshirtDetail p4");
      price.innerText = data.price;
      processedData.push(price.innerText);
      function findTotalAmount() {
        
           for (const item of processedData) {
          totalAmount += item;
          numItems += 1;
          return totalAmount;
                 
           }
      }
      //pricePtax = price.innerText + price.innerText* 0.1;
      //return pricePtax;
     // inventory.innerText = data.inventory;
     // updatedInv = inventory.innerText - 1;
     // return updatedInv;
      
     // price.innerText = data.price;
     //pricePtax = data.price + data.price* 0.1;
     // return pricePtax;
     // inventory.innerText = data.inventory;
     //updatedInv = data.inventory - 1;
      //return updatedInv;

     });
    });
  } 
document.addEventListener('DOMContentLoaded', init1);
document.getElementById("myBtn").addEventListener("click", addToCart());

function addToCart() {
 document.getElementById("demon").innerHTML = displayCart();
}
function displayCart() {
  let totalAmount = 0;
     for (const item of processedData) {
    totalAmount += item;
    return totalAmount;
     }
}

  document.getElementById("myBtn1").addEventListener("click", displayCheckOut);

 function displayCheckOut() {
  document.getElementById("demo").innerHTML = checkOut();
 }
 function checkOut() {

 }

 document.getElementById("myBtn2").addEventListener("click", displayTy);

 function displayTy() {
  document.getElementById("demo").innerHTML = thankYou();
 }
 function thankYou(){
  console.log( "Thank You For Shopping At RICARDO'S KAMISETA");
 }