  TSHIRT STORE FOR ON-LINE SHOPPING



1. A store front for selling three brands of Tshirt.

2. This app has basically six major parts or components:
   * The Header - 
                  
    It has a pink background and contains the logo, name of the store,names of the three brands of tshirt 
    and below each of them are theirproduct numbers.If the pointer is hovered on the box inside of which 
    is the name of the brand, a picture of the tshirt will appear and when the pointer is moved away 
    from the box,the picture disappear.

   * The Product Description component - 
                 
   It has a salmon background and it is where a buyer can see the detailed description of a product by 
   entering a product number found in the Header.The description includes the neck design, color, size, 
   price and the inventory or amount of stock available.
   
   
   * The Add To Cart component -
                 
   It has a purple yam background and is where a buyer would enter the product number of the tshirts he 
    would like to buy. It will also display the summary description of the tshirt he added to the cart,  the current 
    number of items and the total amount of the products currently in the cart. The inventory of that product 
    he added will decrease by one and this will persist in the database. He can enter any amount of any product 
    he chooses as long as it is in stock. If the tshirt he chooses is out of stock, a message: 
    "Sorry, the product is out of stock" will appear and he will not be able to add it to the cart.
   
   * The Remove From Cart component-
                  
   It has a khaki-green background. If a buyer changes his mind and decided to remove a product from his cart, 
   he can enter its product number. It will display a summarry description of the product he removed, the price
    of the product he removed,the current number of items in the cart, and the current total amount of products
     in the cart. As one of the results , the inventory of the product he returned will increase by one. 
     If he mistakenly entered the number of a product which is not in his cart, a message: 
     "Sorry, that product is not in your cart" will appear.                 
   
   * The Check Out component-
                 
   It has an apple green background. When the Check Out button is clicked. The summary description of all the 
   products added to the cart and the current total amount plus tax is displayed.
   If after he clicked the checkout button and a buyer decided that he wants to buy another product or more of a product,
    he can go back to the Add To Cart component and enter its product number. Likewise, if he decided not to buy a product
   or all of the products already in his cart, he can go back to Remove from Cart component and enter the product number.
   Doing all of these, everything will update including the changes in inventory which will persist in the db.json database. 
   note: Everytime the Check Out button is clicked, the current contents of the cart is displayed on the top of a dash line.
  
   * The Exit component -
                 
    It is where the buyer can click the exit button to refresh the app to order a new batch of tshirts or if he wants to 
    close the app and exit. It also displays the phone number and the email address of the store. A thank you message is displayed here.


              ---------------------------------------------------

This app can be installed by copying the github URL and forking and cloning  this repository from my github account.

              --------------------------------------------------

This app project needs further improvements. I can name one of them.
1.  When the buyer changes the content of the cart,click again the checkout button, the previous content is still displayed below 
the current. Although I separated it from the current content by a dashed line. The advantage  of this is he can still see his 
original order, the disadvantage is he might get confused by it.
2.  Please add here your suggestions for further improvement.

            -----------------------------------------------------

I would like to thank all the flatiron coaches and instructors who have patiently help and guided me in building this app.

            --------------------------------------------------

Here are some screenshots of the app:

1. The app as it appears when reloaded:

![Alt text](<Screenshot (369).png>)

------------------------------------------------

2. The mouse is hovered over the Yalex brand:

![Alt text](<Screenshot (340).png>)

----------------------------------------------

3. after adding two of product number 8, it became out of stock:

![Alt text](<Screenshot (358).png>)

-----------------------------------------------

4. Product number 4 is added and then remove from the cart:

![Alt text](<Screenshot (365).png>)

----------------------------------------------

5.The buyer has mistakenly removed a product that is not in his cart. The products in the cart are also shown.

![Alt text](<Screenshot (367).png>)

------------------------------------------------
Please click the link to see a walk-through video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/P8Xac8vrBfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>