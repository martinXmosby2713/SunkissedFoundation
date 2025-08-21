# Capstone Project

## Purpose

In this project, I used HTML, vanilla Javascript techniques, Bootstrap layouts, JQuery, and CSS to create my capstone assignment.

## Set Up

To view the capstone in the browser, find this project folder on your local file system and double click on the `index.html` file.

## Project Structure

### Capstone (Sunkissed Foundation) Walkthrough:
 
 -This application will allow users to:
1. View an online art gallery.
    - Buy custom works of art or replicas or other works.
    - Support an HBCU through donations and/or bidding on custom or historic works of art. 

2. Click the 'Tap In' button to take you to the home page. 
    - Once on the home page the user will have an option to shop or just view all of the content.
    - However, the user will not be able to shop or view the exhibit unless they are logged in.
    - If the user clicks the 'View our exhibit' button or link or the 'Shop' button or link they will be alerted to sign in first.
    - Once signed in the user will have access at shopping, viewing the exhibit and looking at their customer profile and the navbar will no longer show the option to login or create a new account.The user will have to go into their customer profile to logout or delete their account if they choose to.
    - To verify the user is signed in their username and icon image will display in the navbar, but they must first be signed up in order to sign-in. 
    - As the customer scrolls down they will see a banner of college logos which they can click on the learn more about the school. The click will take them to an external page on wikipedia.
    - Lastly towards the footer the user will see a 'Donate' button which its purpose is to select a school of the user's choice to make a donation. However due to time restraints the functionality is not accessible.
    - The footer has contact information that will give the user details how to reach out to find more information. Also the instagram button is clickable, it will take you to a page replicating Instagram, which was created using Affinity Designer.

3. Click on the 'About us' link in the navbar
    - The user will see a brief description about the Sunkissed Foundation.
    - The user will have access at looking at a Bootstrap carousel of the organizations members.
    - Next to the carousel is a custom accordion highlighting the foundations values and mission statement.
    - The user will see a display of the foundations founders.
    - Lastly towards the footer the user will see a comment section. There they can view previous comments made by other user's and leave a comment themselves and the comment will remain on the site even after logging out and another user logging in. 

4. Click on the 'Gallery' link in the navbar
    - The user will see a grid of clickable images which represent the collection different kinds of artwork which has been auctioned off and the proceeds donated to a particular college. 
    - If the user clicks any image it will display in a Bootstrap modal, which will show the image, the college logo for which the proceeds were donated and how much money it raised.
    - There is one modal that dynamically changes based off of which image the user clicks on.
    - The gallery is using a JQuery filter function that I used to create different categories of art, from paintings to photographs, or from statues to artifacts.

5. Click on the 'Exhibit' link in the navbar or the 'View our exhibit' button after signed in
    - This will take you to a page where the user can view a 3D-carousel effectively replicating an online art exhibition. 
    - The only option is to use the different mouse events to scroll through the images and hover over them and click and stop the rotation. 
    - The logo at the top of the page will take the user back to the home page once clicked.

6. Click on the Shop link in the navbar or the 'Shop' button on the home page once signed in
    - This page allows users to buy custom works or art replicas which will be stored in a shopping cart and the user can then purchase/ confirm their order.
    - Clicking on an item's cart will send it into the shopping cart which is not displayed until the user clicks the shopping cart logo underneath the navbar.
    - The user can increase the quantity of items but cannot place the same item in the cart twice.
    - Once the item is in the cart it can be increased or decreased in quantity.
    - When the user clicks on the 'Buy' button there will be a Bootstrap progress bar which has a functionality emulating that the purchase has been confirmed.

7. Click on the 'Contact Us' link on the navbar
    - This will take the user down to the footer that displays the additional contact information for the Sunkissed Foundation.

## TLM Author
This application was developed by Martin Mosby. This Project was created using JavaScript, CSS, HTML, JQuery and Bootstrap. 