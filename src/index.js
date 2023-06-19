     // created an array of prices of items chosen by the buyer
    let priceList = [];
    //created an array of product-description-summary of items chosen by the buyer
    let prodDescpn = [];
   //initialized variable for the total amount of all the products chosen.
    let totalAm = 0;

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
        prodSumry.innerText = data.productdesc
        console.log(prodSumry.innerText);
        // add to an array the price of product chosen
        priceList.push(parseFloat(priceP.innerText));
        // add to another array the product-description-summary of the same product
        prodDescpn.push(prodSumry.innerText);
        // iterate through priceList and count each element in it.
        let count = 0;
        for (const item of priceList) {
          count += 1;
        }
        numItems.innerText = count
        //add up prices in the priceList array.
        totalAm = 0;
        for (const item of priceList) {
          totalAm += Number(item);
          //console.log(totalAm)
        }
         totalAmount.innerText = totalAm
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
      //.then(res => res.json())
     // .then(inventory => console.log(inventory.innerText))
       }); 
      });
       
//Start of CHECK OUT component:
    //Add a click button to display total amount with tax and all the products in the cart
    document.getElementById("myBtn1").addEventListener("click", displayCheckOut);
    function displayCheckOut() {
    let totalWithTax1 = Math.round(totalAm * 1.1)  // instead of rounding cut to the nearest tenth
    let totalWithTax= totalWithTax1.toFixed(2) 
    document.querySelector("#amountWithTax").textContent = totalWithTax;
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

    function sequentialExecution() {
      firstFunction(secondFunction);
    }

    function firstFunction(callback) {
      setTimeout(function() {
        fetch(`http://localhost:3000/tshirt/${input.value}`)
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
        prodSumry.innerText = data.productdesc
        console.log(prodSumry.innerText);
        // add to an array the price of product chosen
        priceList.push(parseFloat(priceP.innerText));
        // add to another array the product-description-summary of the same product
        prodDescpn.push(prodSumry.innerText);
        // iterate through priceList and count each element in it.
        let count = 0;
        for (const item of priceList) {
          count += 1;
        }
        numItems.innerText = count
        //add up prices in the priceList array.
        totalAm = 0;
        for (const item of priceList) {
          totalAm += Number(item);
          //console.log(totalAm)
        }
        totalAmount.innerText = totalAm
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
      //.then(res => res.json())
     // .then(inventory => console.log(inventory.innerText))
       })
    }
