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
    const inputForm1 = document.querySelector("form1");
    inputForm1.addEventListener("submit", (event)  => {
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
      
     price.innerText = data.price;
      processedData.push(price.innerText);

      function findNumItems() {
        for (const item of processedData) {
          numItems +=1;
          return numItems;
       }
      
     }
      function findTotalAmount() {
        
           for (const item of processedData) {
          totalAmount += item;
          numItems += 1;
          return totalAmount;
                 
           }
      }
       
    });
  });
}
document.addEventListener('DOMContentLoaded', init1);


  
document.getElementById("myBtn1").addEventListener("click", displayCheckOut);

 function displayCheckOut() {
  document.getElementById("demo").innerHTML = checkOut();
 }
 function checkOut() {

 const amountTax = totalAmountpTax();
      amountTax  += amountTax* 0.1;
      return amountTax;

     
 }
  
    

 document.getElementById("myBtn2").addEventListener("click", displayTy);

 function displayTy() {
  document.getElementById("demo").innerHTML = thankYou();
 }
 function thankYou(){
  console.log( "Thank You For Shopping At RICARDO'S KAMISETA");
 }