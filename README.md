# React Bank

This is my bank application

## Main

The main part includes a few pages with about section , contact form, register and login, as well as the branches which are retrieved from the backend 

### App

The application includes the my account which has the balance a deposit and withdraw form , a make transactions button which goes to the transactions component, a my loans page and a my cards page.

### Account:
The header with the full name and a greeting, the account balance and the deposit withdraw form, history which shows all transactions their date the amount and the balance if you click on one it gives you the details.

### My loans
Has a loan page which shows no loan if you haven't taken a loan , a take a loan button which goes to a form that let's you take a loan which then updates the loan page, with the loan information.



### My Cards
A page where there is a credit card and it's history, a get card button which transfers you to a form that let's you pick a manufactorer a date and the credit limit, once taken you get the card information as well as the history of the card use.


### Transactions
the most important page, here you can choose which type of transaction you would like to do, salary which let's you input an employer name and amount, a transfer which let's you choose any other account in the application and let's you transfer money to that account, Payment which is a form that let's you choose to pay for a loan or the credit card, and the pay with card which let's you use the credit card

### Notes
I used axiosInstance which defines the token and the main url, then if a request fails it checks the token and refreshes it until the refresh token no longer works, then you are logged out of the service, the access token lives for 5 minutes and the refresh for 20 minutes.
