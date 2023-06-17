let processedData = [];
let totalAm = 0;
document.addEventListener('DOMContentLoaded', () => {
  const inputForm = document.querySelector("#productDescriptionForm");

  inputForm.addEventListener("submit", (event) => {
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

  const inputForm1 = document.querySelector("#addToCartForm");
  inputForm1.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("input#EnterProductNumber");



    fetch(`http://localhost:3000/tshirt/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const priceP = document.querySelector("#priceItem");
        const inventory = document.querySelector("#inventory");
        const numItems = document.querySelector("#numItems");
        const totalAmount = document.querySelector("#totalAmount");
        //let processedData = [];

        priceP.innerText = data.price;
        inventory.innerText = data.inventory
        processedData.push(parseFloat(priceP.innerText));
        let inv = Number(inventory.innerText)
        function updateInv(){
           inv -= 1;
           return inv
        }
        console.log(inv)
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



        numItems.innerText = count
        totalAm = 0
        
        for (const item of processedData) {
          totalAm += Number(item);
          console.log(totalAm)
        }
        totalAmount.innerText = totalAm
        
       console.log(inventory.innerText)
   
 

      });
       updateInventory = ( inventory.innerText );
       
      function updateInventory( newInventory ){
        fetch(`http://localhost:3000/tshirt/${id}`, {
          method: "PATCH",
          headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      
      body: JSON.stringify({
        "inventory": newInventory 
      })
        }) 
      }
  });

  // Add a click button to Check Out
  document.getElementById("myBtn1").addEventListener("click", displayCheckOut);
  function displayCheckOut() {
    let totalWithTax = Math.round(totalAm * 1.1)  // instead of rounding cut to the nearest tenth
    document.querySelector("#amountWithTax").textContent = totalWithTax;
    
  

    
  }
  // Get references to the button and the thank you message
  const element = document.getElementById("myBtn");
  // Add a click event listener to the exit button
  element.addEventListener("click", myF);
  function myF() {
    document.getElementById("demo").innerHTML = "Thank you for shopping at Ricardo's Kamiseta";
    location.reload();
  }
   
});
