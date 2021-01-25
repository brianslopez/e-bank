# **e-Ledger**  

# Description 

When a Clinent visits our Web Application the Client can Sign-Up using the Sign-Up page HE/SHE can create an account and log-in. The Clients credentials is saved and can easily enter & keep track of HE/SHE account. The User's account balance, deposit money link, transfer money link, and navigation bar links for the homepage and Sign-Out page. 

The Web Application when visited after sign-up the user can log-in and is prompted to sign-in by using Username & Password. When logged in the Client is presented with the Clients account balance, deposit-money link, withdraw-money link, transfer-money link and in the naviagetion bar the links to the homepage and sign-out can be clicked on easily. 

The Web Application can allow the user to upadate accounts by adding funds and delete funds to be able to keep track of financial.  


# Table of Contents 

1. [Heroku Deployment URL](#HerokuDeploymentURL)
2. [GitHubRepo URL](#GitHubRepoURL)
3. [Features](#Features)
4. [Installation](#Installation)
5. [Cloning](#Cloning)
6. [Usage](#Usage)
7. [Demo](#)
8. [Technologies](#Technologies)
9. [Credits](#Credits)
10. [Collaborators](#Collaborators)
11. [License](#License)


# Heroku Deployment URL



# GitHub Repo URL

https://github.com/brianslopez/e-bank

# Features 

	1. As a person that likes to keep track of my money I spend, I want to be able to: 
		i. Have a ledger by loging in on an account that is private. 
		ii. And Keep track of money I have spent or I am saving. 
	
	2. So Users can: 
		i. Keep track of my Expenses
		ii. Enter into my ledger whenever I want. 

# Installation
 
No installation is necessary. It is deployed through Heroku. 

# Cloning 

If you wanted to clone this Web Application, you will need to follow these steps: 

	1. git clone 
	2. npm install
	3. npm start 

# Usage

	1. Create an account. 
	2. Log-In to your personal Account using the information you just entered. 
	3. Hit enter and you are logged in. 
	4. You are presented with the homepage. 
	5. You can enter however much amount of money you want to keep track off.
	6. The person can update account by adding funds or deleting however much.  

# Technologies

	1. Heroku 
	2. React
	3. Graph QL
	4. Node.js
	5. Express.js
	6. Mongo DB & Mongoose ODM
	7. CSS
	8. Redux
	9. JavaScript
	10. Styled Components
	

# Credits 

# Collaborators 
 			
Brian Lopez: Backend & Project Manager 
Andy Tang: https://github.com/andytang02	Frontend 
Srikar Kudumula: https://github.com/Srikar2020   Authentication & ReadMe



# License

MIT




## USER EXPERIENCE
***

- GIVEN a fictional banking website  

- WHEN I visit the site for the first time
- THEN I am presented with the homepage; witch includes a welcome message and navigation links for; home, sign-up, and, log-in.  

- WHEN I click the sign-up link
- THEN I am promoted to enter username and password
- WHEN I click the sign-up button
- THEN my user credentials are saved, I am logged into the site, and presented with the homepage; which includes; user’s account balance, deposit money link, withdraw money link, transfer money link, and navigation bar links for the homepage and sign-out.    

- WHEN I revisit the site at a later time and click the log-in link
- THEN I am prompted to enter username & password
- WHEN I click the log-in button I am logged into the site and presented with homepage;which includes; user’s account balance, deposit-money link, withdraw-money link, transfer-money link, and navigation bar links for the homepage and sign-out  

- WHEN I click deposit-money link  
- THEN I am prompted for deposit amount  
- WHEN I click the deposit-money-button  
- THEN the user’s balance is increased by the amount entered and the user is presented with the homepage (user balance updated)  

- WHEN I click withdraw-money link  
- THEN I am prompted for withdraw amount  
- WHEN I click the withdraw-money-button  
- IF the withdraw amount entered is greater than the user’s balance  
- THEN the user is presented with an error message and prompted for new withdraw amount  
- IF the withdraw amount entered is less than or equal to the user’s balance  
- THEN the user’s balance is decreased by the amount entered and the user is presented with the homepage (user balance updated)  

- WHEN I click transfer-money link  
- THEN I am prompted for the username of the user account to transfer to and the amount  
- WHEN I click the deposit-money-button  
- IF the withdraw amount entered is greater than the user’s balance  
- THEN the user is presented with an error message and prompted for new transfer amount  
- IF the withdraw amount entered is less than or equal to the user’s balance
- THEN the user’s balance is decreased by the amount entered, the user who is receiving the transfer’s balance is increased by the amount entered and the user is presented with the homepage (user balance updated)  

## PROJECT REQUIREMENTS

***  


* Use React for the front end.

* Use GraphQL with a Node.js and Express.js server.

* Use MongoDB and the Mongoose ODM for the database.

* Use queries and mutations for retrieving, adding, updating, and deleting data.

* Be deployed using Heroku (with data).

* Meet the minimum requirements of a PWA:

	* Uses a web manifest
	
	* Uses a service worker for offline functionality
	
	* Is installable

* Have a polished UI.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Include authentication (JWT).

* Protect sensitive API key information on the server.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).

* Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

Finally, you must add your project to the portfolio that you created in Module 20.

You should also consider the following suggestions to help your project stand out:

Instead of using a CSS library like Bootstrap, consider one of the following suggestions:

* Look into the concept of **CSS-in-JS**, which abstracts CSS to the component level, using JavaScript to describe styles in a declarative and maintainable way. Some popular libraries include [styled-components](https://styled-components.com/) and [Emotion](https://emotion.sh/docs/introduction).

* Try using a component library, such as [Semantic UI](https://semantic-ui.com/), [Chakra UI](https://chakra-ui.com/), or [Ant Design](https://ant.design/).

* Create all the CSS for your application just using CSS.

Ultimately, it doesn't matter which of these options you choose&mdash;it just needs to look professional and be mobile-friendly.

Consider integrating the Stripe payment platform. Even if you don’t create an e-commerce application, you could set up your site to accept charitable donations.

**More details about the project will be provided in the lessons for Module 23 in Canvas.**

## PROJECT TEAM  

Brian Lopez
Andy Tang
Srikar Kudumula

***


