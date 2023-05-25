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