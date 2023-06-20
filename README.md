TSHIRT STORE FOR ON-LINE SHOPPING



1. A store front for selling three brands of Tshirt.





2. This app has basically five major parts or components:
   * The Header part which has a pink background contains the logo, name of the store, names of the three brands of tshirt and below each of them are their product numbers.
   * The Product Description component which has a salmon background is where a buyer can see the detailed description of a product by entering the product numbers found in the Header.
   * The Add to Cart component which has a purple background is where a buyer would enter the product number he decided to buy. It will also display the number of items and the total amount currently in the cart.
   * The Check Out component which has an apple green background is where all the products added to the cart and the total amount plus tax is displayed.
   * The Exit component is where the buyer can refresh the app to remove if he want to change the contents of the cart or if he wants to close the app. 






3. An on-line shopper will choose from the product numbers under each brand of tshirt.
Then, the product number of the Tshirt brand is entered in the Product Description component, and in this screenshot, it is #3 and the submit button is clicked,
 In this screenshot, all the product descriptions including the neck design-"roundneck", color-"white", size-"large", price-"$12.50, and inventory- 94, of the product was displayed in the browser.
![Screenshot (305)](https://github.com/RicVUy/phase-1-project-tshirtStore/assets/126643320/3cfcf582-c04c-4ccb-8a13-2818c1f772a7)
Take note that the current inventory of product #3 is 94.





4. Items can then be added to a cart by entering the product number in the Add To Cart component and clicking submit .
After the submit button is clicked, the description of the product chosen,the price of the product , the current number of items in the cart and the current total amount  is displayed.
![Screenshot (307)](https://github.com/RicVUy/phase-1-project-tshirtStore/assets/126643320/c2d9656b-97af-4821-9799-995de225adf2)
Here, we can see that when product #3 is submitted in Add to Cart, there is a short description of the product, the price is $12.50, there is one item in the cart, and the amount is $12.50 since it is the only item yet.






6. When product #3 in the Add To Cart component is clicked again, we can see that the number of items is now 2 and total amount is now $25.00.
![Screenshot (308)](https://github.com/RicVUy/phase-1-project-tshirtStore/assets/126643320/955c5c44-d6d7-424b-9dfc-df5752251f41)





7. If the buyer chose another product and click the submit button again, the description, the total amount and number of items should update.
![Screenshot (309)](https://github.com/RicVUy/phase-1-project-tshirtStore/assets/126643320/c184d684-1a69-403c-b150-609632f54a85)
Here, product #10 is added to the cart, and the number of items is now 3 and the total amount is now $46.00.





8. Inventory of a product will update everytime the buyer add that product to the cart, but it will not show immediately, however, changes in inventory can be seen if the product number is entered and submit button is clicked in Product Description component of this app.
![Screenshot (310)](https://github.com/RicVUy/phase-1-project-tshirtStore/assets/126643320/4f089c72-1258-465c-8d33-1352be27c7fb)
So here, when we entered product #3 in Product Description component, take note that the inventory, which is previously 94 is now 92.






9. When the buyer checks out by clicking click me, all the products in the cart and the total amount plus the tax due will be displayed.
![Screenshot (312)](https://github.com/RicVUy/phase-1-project-tshirtStore/assets/126643320/76569676-a0b0-4190-a8fb-0e255b949aff)
We can see in the Check Out component, the three products in the cart, and we have to pay a total amount of $51.00.





10. When the buyer click the exit button, where a thank-you-message is displayed, the app will close or refresh.




This app can be installed by copying the github URL and forking and cloning  this repository from my github account.



This app needs a lot of improvement(due to time constraint) and everyone is welcome to contribute. I can mention some of them below:
* It should prevent a buyer from adding a product to the cart if the inventory is currently zero.
* It produces an error if the checkout is clicked more than once during a transaction.
* A Remove Product from Cart component should be added, so that the buyer would not have to erase the entire order in case a product is removed from the cart.
* The total amount plus tax should not be rounding off. 



I would like to thank all the flatiron coaches and instructors who have patiently help me in building this app.
