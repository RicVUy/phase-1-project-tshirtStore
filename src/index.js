const init = () => {
    const inputForm = document.querySelector("form1");
    inputForm.addEventListener("submit", (event)  => {
      event.preventDefault();
     // console.log(event);
     const input = document.querySelector("input#searchByID");
  
     console.log(input.value);
  
     fetch(`http://localhost:3000/tshirt/${input.value}`)
     .then((response) => response.json())
     .then((data) => {
      const title = document.querySelector("section#TshirtDetails h4");
      const summary = document.querySelector("section#TshirtDetails p");
  
      brand.innerText = data.brand;
      color.innerText = data.color;
      
     });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);