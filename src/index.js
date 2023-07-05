     // created an array of prices of items chosen by the buyer
    let priceList = [];
    //created an array of product-description-summary of items chosen by the buyer
    let prodDescpn = [];
   //initialized variable for the total amount of all the products chosen.
    let totalAm = 0;
    let count = 0;
// Start of PRODUCT DESCRIPTION component:
    // submit a product number and make the description of the chosen product display 
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
  
//Start of the ADD TO CART component:
       const inputForm1 = document.querySelector("#addToCartForm");
       inputForm1.addEventListener("submit", async (event) => {
       event.preventDefault();
       const input = document.querySelector("input#EnterProductNumber");
      
    await fetch(`http://localhost:3000/tshirt/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const priceP = document.querySelector("#priceItem");
        const prodSumry = document.querySelector("#prodDes");
        const inventory = document.querySelector("#inventory");
        const numItems = document.querySelector("#numItems");
        const totalAmount = document.querySelector("#totalAmount");

        priceP.innerText = data.price;
        window.localStorage.setItem('inventory', data.inventory)
        if (Number(data.inventory) <= 0) {
        prodSumry.innerText = (`Sorry, that product is out of stock.`)
        console.log(prodSumry.innerText);
      }
        else 
        {prodSumry.innerText = data.productdesc;
        console.log(prodSumry.innerText);
        // add to an array the price of product chosen
        priceList.push(parseFloat(priceP.innerText));
        // add to another array the product-description-summary of the same product
        prodDescpn.push(prodSumry.innerText);
        // iterate through priceList and count each element in it.
         count = 0;
        for (const item of priceList) {
          count += 1;
        }
        numItems.innerText = count
        //add up prices in the priceList array.
        totalAm = 0;
        for (const item of priceList) {
          totalAm += Number(item);
          //console.log(totalAm)
        }}
         totalAmount.innerText = `$${totalAm.toFixed(2)}`
        })


       // update the inventory of the product added to the cart
      await fetch(`http://localhost:3000/tshirt/${input.value}`, {
          method: "PATCH",
          headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      
      body:JSON.stringify({
      "inventory": (window.localStorage.getItem('inventory') - 1)
      })
      
       }); 
      });
    
     // Start of Remove From Cart Component
     const inputForm2 = document.querySelector("#removeFromCartForm");
     inputForm2.addEventListener("submit", async (event) => {
     event.preventDefault();
     const input1 = document.querySelector("input#EnterProductNumber1");
    
  await fetch(`http://localhost:3000/tshirt/${input1.value}`)
    .then((response) => response.json())
    .then ((data) => {
      console.log(data)
      
      const prodSumry1 = document.querySelector("#prodDes1");
      const inventory = document.querySelector("#inventory");

      
      window.localStorage.setItem('inventory', (data.inventory))
     prodSumry1.innerText = data.productdesc;
      console.log(prodSumry1.innerText);

      // remove to an array the product description of product chosen
      for (const item of prodDescpn){
         if (item ===  (prodSumry1.innerText)) {
           let index = prodDescpn.indexOf(item);
             if (index > -1) {
               prodDescpn.splice(index, 1);
             }
             return prodDescpn;
           }}
           
        
      
      })
      await fetch(`http://localhost:3000/tshirt/${input1.value}`)
      .then((response) => response.json())
      .then ((data) => {
      const priceP1 = document.querySelector("#priceItem1");
       const numItems1 = document.querySelector("#numItems1");
      const totalAmount1 = document.querySelector("#totalAmount1");
       priceP1.innerText = data.price;
       console.log(typeof priceP1.innerText)
       console.log(priceP1.innerText)
       console.log(totalAm)
        // remove to an array the price of product removed
/*for (const prices of priceList){

       if (prices == (priceP1.innerText)) {
         let index = priceList.indexOf(prices);
         console.log(typeof prices)
           if (index > -1) {
             priceList.splice(index, 1);
           }
           return priceList;
         }}
         totalAm = 0;
         count = 0;
         for (const prices of priceList){
            totalAm += (prices)
            count += 1
         }*/
         totalAm = totalAm - Number(priceP1.innerText)
         console.log(totalAm)
         count -= 1
       

         console.log(count)
         totalAmount1.innerText = `$${totalAm.toFixed(2)}`
         numItems1.innerText = count
     
     })
     // update the inventory of the product added to the cart
    await fetch(`http://localhost:3000/tshirt/${input1.value}`, {
        method: "PATCH",
        headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    
    body:JSON.stringify({
    "inventory": (Number(window.localStorage.getItem('inventory')) + 1)
    })
    
     }); 
    });

//Start of CHECK OUT component:
    //Add a click button to display total amount with tax and all the products in the cart
    document.getElementById("myBtn1").addEventListener("click", displayCheckOut);
    function displayCheckOut() {
    let totalWithTax1 = Math.round(totalAm * 1.1)  // instead of rounding cut to the nearest tenth
    let totalWithTax= totalWithTax1.toFixed(2) 
    document.querySelector("#amountWithTax").textContent = `$${totalWithTax}`;
    console.log(prodDescpn);
    
    // to display in the check out all the products bought or added to the cart
    const listProducts = document.getElementById("itemList");
    // Create an unordered list element
    const ulProducts = document.createElement("ul");
    // Loop through the array and create list items for each element
    prodDescpn.forEach(item => {
    const liProducts = document.createElement("li");
    liProducts.textContent = item;
    ulProducts.appendChild(liProducts);
    });
    // Append the unordered list to the desired element in the document
    listProducts.appendChild(ulProducts);
    const line = document.getElementById("itemList");
    const lineSep = document.createElement("ul");
    const lineSeparator = document.createElement("li");
    lineSeparator.textContent = `---------------------`;
    lineSep.appendChild(lineSeparator)
    line.appendChild(lineSep)

    }

// Start of the EXIT component:
    // Get references to the exit or refresh button
    const element = document.getElementById("myBtn");
    // Add a click event listener to the exit button
    element.addEventListener("click", myF);
    function myF() {
    location.reload();
    }
    });
// End of the EXIT component;

// Continuation of the updating of Inventory:
    function sequentialExecution() {
      firstFunction(secondFunction);
    }
  // To wait 3000 ms before executing the callback
    function firstFunction(callback) {
      setTimeout(function() {
        fetch(`http://localhost:3000/tshirt/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const inventory = document.querySelector("#inventory");
        priceP.innerText = data.price;
        window.localStorage.setItem('inventory', data.inventory)
      })
        if (typeof callback == 'function') {
          callback();
        }
      }, 3000)
    }

    function secondFunction() {
      fetch(`http://localhost:3000/tshirt/${input.value}`, {
          method: "PATCH",
          headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      
      body:JSON.stringify({
      "inventory": (window.localStorage.getItem('inventory') - 1)
      })

       })
    }
    function sequentialExecution() {
      firstFunction(secondFunction);
    }

    function firstFunction(callback) {
      setTimeout(function() {
        fetch(`http://localhost:3000/tshirt/${input1.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const inventory = document.querySelector("#inventory");
        priceP.innerText = data.price;
        window.localStorage.setItem('inventory', (data.inventory))
      })
        if (typeof callback == 'function') {
          callback();
        }
      }, 6000)
    }

    function secondFunction() {
      fetch(`http://localhost:3000/tshirt/${input1.value}`, {
          method: "PATCH",
          headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      
      body:JSON.stringify({
      "inventory": (Number(window.localStorage.getItem('inventory'))+ 1)
      })

       })
    }