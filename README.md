# Pharmacy2U
Pharmacy2UProject

Used HTML/CSS/JavaScript stack for development.

Stored dummy data for the 3 conversion ratios in the rates.json file which I realise now should have been pulled from the server side rather than from the client side. The index.html file in the public folder is the client side program where the user can convert any amount to and from any of the 4 currencies listed. 

In terms of input validation, the currency choices are only made available via combo boxes so the user cannot type in them, the second combo box (converting to value) is refreshed whenever the convert from value selection has changed and that value would no longer be available, this resolves the issue of a used trying to convert from the same currency. For the text input field, I have used RegEx to validate the currency amount entered.

I used Node.js for the server side and Express.js for the database to store the conversion audit. A JSON object is passed to the database on the server each time a valid conversion has been sent by the client. The log.html file contains the code that creates a HTML table which displays all the data in the database.
