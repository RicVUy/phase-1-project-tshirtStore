TSHIRT STORE FOR ON-LINE SHOPPING



1. A store front for selling three brands of Tshirt.





2. This app has basically six major parts or components:
   * The Header  
                  It has a pink background and contains the logo, name of the store, names of the three brands of tshirt and below each of them are their product numbers.
                  If the pointer is hovered on the box inside of which is the name of the brand, a picture of the tshirt will appear and when the pointer is moved away from the box, the picture disappear.

   * The Product Description component  
                  It has a salmon background and it is where a buyer can see the detailed description of a product by entering a product number found in the Header.
                  The description includes the neck design, color, size, price and the inventory or amount of stock available.
   * The Add To Cart component 
                  It has a purple yam background and is where a buyer would enter the product number of the tshirts he decided to buy. It will also display the summary description of the tshirt he added to the cart,  the current number of items and the total amount of the products currently in the cart. The inventory of that product he added will decrease by one and this will persist in the database. He can enter any amount of any product he chooses as long as it is in stock. If the tshirt he chooses is out of stock, a message: "Sorry, the product is out of stock" will appear and he will not be able to add it to the cart.
   * The Remove from Cart component
                  It has a khaki-green background. If a buyer changes his mind and decided to remove a product from his cart, he can enter its product number. It will display a summarry description of the product he removed, the price of the product he removed,the current number of items in the cart, and the current total amount of products in the cart. As one of the results , the inventory of the product he returned will increase by one. If he mistakenly entered the number of a product which is not in his cart, a message: "Sorry, that product is not in your cart" will appear.                 
   * The Check Out component
                  It has an apple green background. When the Check Out button is clicked. The summary description of all the products added to the cart and the current total amount plus tax is displayed.
                  If after he clicked the checkout button and a buyer decided that he wants to buy another product or more of a product, he can go back to the Add To Cart component and enter its product number. Likewise, if he decided not to buy a product or all of the products already in his cart, he can go back to Remove from Cart component and enter the product number.
                  Doing all of these, everything will update including the changes in inventory which will persist in the db.json database. 
                  note: Everytime the Check Out button is clicked, the current contents of the cart is displayed on the top of a dash line.
   * The Exit component 
                  It is where the buyer can click the exit button to refresh the app to order a new batch of tshirts or if he wants to close the app and exit. It also displays the phone number and the email address of the store. A thank you message is displayed here.







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




9. When the buyer decided to remove a product from the cart, he should enter its product number and click the submit button. Everything will update including the inventory which will increased by one.




9. When the buyer checks out by clicking click me, all the products in the cart and the total amount plus the tax due will be displayed.
![Screenshot (312)](https://github.com/RicVUy/phase-1-project-tshirtStore/assets/126643320/76569676-a0b0-4190-a8fb-0e255b949aff)
We can see in the Check Out component, the three products in the cart, and we have to pay a total amount of $51.00.





10. When the buyer click the exit button, where a thank-you-message is displayed, the app will close or refresh.




This app can be installed by copying the github URL and forking and cloning  this repository from my github account.



This app project needs further improvements. I can name one of them.
1.  When the buyer changes the content of the cart,click again the checkout button, the previous content is still displayed below the current. Although I separated it from the current content by a dashed line. The advantage  of this is he can still see his original order, the disadvantage is he might get confused by it.
2.  Please add here your suggestions for further improvement.



I would like to thank all the flatiron coaches and instructors who have patiently help and guided me in building this app.

Here is a GIF of the project:
![](https://www.youtube.com/watch?v=P8Xac8vrBfk)
