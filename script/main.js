class Customer {
    constructor(fullname, username, email, password, birthdate, phoneNumber, address, city, state, zip, profileImage) {
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.profileImage = profileImage || '../images/sphinx.jpeg'
        this.accessCode = Math.random().toString(36).substring(2, 15);
    }
}
// GET ALL THE NECESSARY DOM ELEMENTS
// container to display error or success message for the signup form
const formMsg = document.getElementById('formMsg');
const signInUsername = document.getElementById('signInUsername');
const signInPassword = document.getElementById('signInPassword');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');
let deleteAccountMsg = document.getElementById('deleteAccountMsg');
const logoutBtn = document.querySelector('#logoutBtn');
const deleteAccountBtnConfirmation = document.getElementById('deleteAccountBtnConfirmation');
const loginBtn = document.getElementById('loginBtn');
const createNewAccountBtn = document.getElementById('createNewAccountBtn');
const customerSideProfileBtn = document.getElementById('customerSideProfileBtn');
const customerForm = document.getElementById('customerForm');
const signInForm = document.getElementById('signInForm');
const loginFormMsg = document.getElementById('loginFormMsg');
const closeFormButtons = document.querySelectorAll('.closeFormBtn');

// ELEMENT TO DISPLAY THE CURRENT CUSTOMER'S USERNAME AND PROFILE ICON ON THE NAVBAR
// grab the navbar container for the image icon
const profileIconFlexContainer = document.querySelector('.profileIconFlexContainer');
// h5 tag to display the username
const profileName = document.getElementById('profileName');
// sidebar profile header container
const profilePicSideContainer = document.querySelector('#profilePicSideContainer');
// container for the date in the side profile container
const dateDisplay = document.getElementById('dateDisplay');

// Event to make sure the log in is on every page of the site
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser) {
        showProfileLogin(currentUser)
    };

    const allComments = JSON.parse(localStorage.getItem('allComments'));
    allComments.forEach((comm) => addComment(comm))
});
// Both the close buttons on the signin/signout forms 
closeFormButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        setTimeout(() => {
            e.target.parentElement.parentElement.toggleAttribute("hidden")
            clearFormInputs();
        }, 20)
    })
}, false);

// Display the sign-up form
createNewAccountBtn.addEventListener('click', (e) => {
    if(signInForm.hasAttribute('hidden')){
        customerForm.toggleAttribute('hidden')
    }else{
        return
    }
});
// Display the sign-in form
loginBtn.addEventListener('click', () => {
    if(customerForm.hasAttribute('hidden')){
        signInForm.toggleAttribute('hidden')
    }else{
        return
    }
});

// MAIN EVENT LISTENER FOR THE SIGN UP FORM
customerForm.addEventListener('submit', saveCustomer);

// MAIN EVENT LISTENER SIGN IN FORM 
signInForm.addEventListener('submit', signInCustomer);

// CONDUCTOR FUNCTION THAT STORES THE NEW CUSTOMER INSIDE OF THE LOCAL STORAGE 
// USING HELPER FUNCTIONS 
function saveCustomer(event) {
    event.preventDefault();
    // get all the customers from local storage
    const customers = grabCustomers();
    // create a new FormData object from the form
    const formData = new FormData(this);
    // I'm creating an empty object to convert it or stringify it
    let formDataObject = {};
    // for-of loop to pass the empty object to data from the form
    for (let [key, value] of formData.entries()) {
        // pass the data to the empty object
        formDataObject[key] = value;
    }
    // test to see if the new customer already exists and if they do show an error message
    if (customers.find(customer => customer.username === formDataObject.username && customer.password === formDataObject.password)) {
        displayMessage('formError', 'User Already Exists')
    } else {
        // create a new instance of a customer using the form information
        const newCustomer = new Customer(formDataObject.fullname, formDataObject.username, formDataObject.email, formDataObject.password, formDataObject.birthdate, formDataObject.phoneNumber, formDataObject.address, formDataObject.city, formDataObject.state, formDataObject.zip, formDataObject.profileImage);
        // push the newly created customer into the storage array
        customers.push(newCustomer);
        //  save updated users array to localStorage
        localStorage.setItem('customerProfiles', JSON.stringify(customers))
        // display the success message to the user
        displayMessage('successfulSignup', 'Signup successful! You can now log in.')
        // hide the form after successful completion
        setTimeout(() => hideElement(customerForm), 1000)
        // hide the new account button 
        setTimeout(() => hideElement(createNewAccountBtn), 1000)
    }
}
/**  User Collection (Local Storage) **/
// get the customer info from the LOCAL STORAGE
function grabCustomers() {
    // get all the customers info from the localStorage
    const customerData = localStorage.getItem('customerProfiles');
    //  if there is some customersData parse the data, or set it to an empty array
    return customerData ? JSON.parse(customerData) : [];
}
// Function to find customer in the localStorage returns boolean
function findCustomer(username, password) {
    // get the array of customers from the local storage
    const customers = grabCustomers();
    // search customers and see if their is a match
    return customers.find(customer => customer.username === username && customer.password === password);
}
// EVENT LISTENER TO DELETE A CUSTOMER'S PROFILE
deleteAccountBtnConfirmation.addEventListener('click', () => {
    deleteCustomerProfile();
    deleteAccountMsg.textContent = `Your profile has been deleted!`
    setTimeout(() => location.reload(true), 2000)
    // clear the session storage
    sessionStorage.clear()
})
// MAIN FUNCTION FOR THE SIGN IN FORM
function signInCustomer(event) {
    event.preventDefault()
    // username value
    const username = signInUsername.value;
    // users password value
    const password = signInPassword.value;
    // store the current user using the findCustomer function
    const currentUser = findCustomer(username, password)

    if (currentUser) {
        // set the session storage
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
        showProfileLogin(currentUser);
        location.reload()
    }
    else if (!currentUser) {
        loginFormMsg.textContent = "Please provide correct information!"
        setTimeout(() => { loginFormMsg.textContent = "" }, 2000)
    }
}
// DISPLAYING ON THE NAVBAR THE LOGGED IN PROFILE INFORMATION
function showProfileLogin(currentUser) {
    // display the current user icon 
    displayNewUser(currentUser);
    // show the logout option
    showElement(logoutBtn);
    // show the delete profile
    showElement(deleteAccountBtn);
    // show the sideProfileBtn
    showElement(customerSideProfileBtn);
    // hide the login button 
    hideElement(loginBtn);
    // hide the new account button 
    hideElement(createNewAccountBtn);
    // hide the sign-in form from display 
    hideElement(signInForm);


}
// Function to delete customer from the local storage
function deleteCustomerProfile() {
    // grab all the customers from local storage
    const customers = grabCustomers();
    // grab sessionStorage
    const currentPerson = JSON.parse(localStorage.getItem('currentUser'))
    // select the currentCustomer to remove
    const currentUserToRemove = findCustomer(currentPerson.username, currentPerson.password)
    // call the remove customer function
    removeCustomer(customers, currentUserToRemove)
    // save the local storage
    localStorage.setItem('customerProfiles', JSON.stringify(customers))
}
// LOGGING THE CURRENT USER OUT AND RELOADING THE SITE
const logoutBtnConfirmation = document.getElementById('logoutBtnConfirmation')
logoutBtnConfirmation.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html'
})
/* HELPER FUNCTIONS TO PASS TO THE CONDUCTOR FUNCTION */
// helper function to remove an exact item from array
function removeCustomer(customers, removable) {
    const index = customers.indexOf(removable);
    return customers.splice(index, 1)
}
// helper function to display error or success message
function displayMessage(klass, text) {
    formMsg.classList.add(klass);
    formMsg.textContent = text;
}
// helper function to hide element
function hideElement(element) {
    element.classList.add('d-none')
}
// helper function to show element
function showElement(element) {
    element.classList.remove('d-none')
}
// helper function to clear the inputs after successful form input
function clearFormInputs() {
    document.querySelectorAll('.inputValues').forEach(input => {
        // clear all the form inputs after the submission
        input.id !== 'birthdate' ? input.value = '' : input.value = null;
    });
    // clear the birthdate <select> input
    document.querySelector('select').value = 'default';
}
// Function that will take the customer info from the form
// and display in the navbar their icon image and username
function displayNewUser(object) {
    // give it the username contents
    profileName.innerHTML = `<span class="profileSpanIcon">☥</span>${object.username}<span class="profileSpanIcon">△</span> `;
    // create a new image element
    const profileImgIcon = document.createElement('img');
    // set the attribtute for the source pathway to the image selected
    profileImgIcon.setAttribute('src', `${object.profileImage}`);
    // give it and id for styling
    profileImgIcon.id = 'profileImgIcon';
    // add it to the DOM
    profileIconFlexContainer.prepend(profileImgIcon);
    // set the Session time for how long the user has been on the site
    // set the date for when the user is on the site
    const dayOfTheMonth = new Date().toDateString()
    // clone the profile image to pass it to the side bar customer profile
    dateDisplay.textContent = dayOfTheMonth
    // add the user icon to the customer side profile
    profilePicSideContainer.prepend(profileImgIcon.cloneNode(true));
}

// THIS NEXT SECTION IS FOR THE ABOUT US PAGE
// Current User whose comment will be appended
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
// COMMENT SECTION TO ADD BACKGROUND COLOR TO EVERY ODD COMMENT
function addBgColor() {
    const comments = document.querySelectorAll('.userCommentContainer');
    comments.forEach((comment, index) => {
        index % 2 === 1 ? comment.style.background = '#6e6161b5' : comment.style.background = 'transparent';
    })
}
// Dom elements for the comment section
const newCommentWrap = document.querySelector('.newCommentWrap');
const commentBtn = document.getElementById('commentBtn');
// Button to submit the comment
const submitCommentBtn = document.querySelector('#submitCommentBtn');
// text area where the comment is typed 
const newCommentText = document.getElementById('newCommentText');
// container that will show the comments
const commentContainer = document.querySelector('.commentContainer');

if (commentBtn !== null) {
    commentBtn.addEventListener('click', (e) => {
        newCommentWrap.toggleAttribute('hidden');
        if (!newCommentWrap.hasAttribute('hidden')) {
            commentBtn.textContent = '➖';
            newCommentText.style.border = 'none'
            newCommentText.placeholder = "ADD COMMENT HERE"
        } else {
            commentBtn.textContent = '➕'
        }
    });
}

if (commentContainer && commentContainer.hasChildNodes) {
    addBgColor()
};

submitCommentBtn ? submitCommentBtn.addEventListener('click', () => {
    if (!currentUser) {
        newCommentText.style.border = '1px solid red'
        document.querySelector('#errorComm').textContent = "PLEASE LOG IN FIRST!"
        console.error('Please login first!')
    } else if (currentUser) {
        if (newCommentText.value === "") {
            document.querySelector('#errorComm').textContent = "PLEASE ADD TEXT FIRST!"
        } else {
            document.querySelector('#errorComm').textContent = ""
            const commentUser = {
                img: currentUser.profileImage,
                user: currentUser.username,
                comment: newCommentText.value,
                timestamp: new Date().toDateString(),
            }
            newCommentWrap ? newCommentWrap.toggleAttribute('hidden'): null;
            dropComment(commentUser);
            saveComments(commentUser)
        }
    }
}) : null;

function saveComments(obj) {
    const allComments = grabComments();
    allComments.push(obj);
    localStorage.setItem('allComments', JSON.stringify(allComments))
}

function dropComment(obj) {
    if (newCommentText.value === '') {
        newCommentText.style.border = '1px solid red'
        newCommentText.placeholder = "PLEASE ADD A COMMENT!"
    } else {
        addComment(obj)
    }
}
function addComment(obj) {
    const profileWrap = document.createElement('div');
    const imgWrapper = document.createElement('div');
    const userCommentImg = document.createElement('img');
    const usernameContainer = document.createElement('div');
    const username = document.createElement('h6');
    const userCommentContainer = document.createElement('div');
    const currComment = document.createElement('p');
    const daySpan = document.createElement('span')
    daySpan.append(obj.timestamp)
    daySpan.classList.add('daySpan');

    username.textContent = `☥${obj.user}△`;
    username.classList.add('userCommentName')
    usernameContainer.className = 'usernameContainer'
    usernameContainer.append(username);
    userCommentImg.src = `${obj.img}`;
    userCommentImg.alt = 'current user';
    userCommentImg.className = 'userCommentImg';
    imgWrapper.className = 'imgWrapper'
    imgWrapper.append(userCommentImg, usernameContainer);
    currComment.textContent = `${obj.comment}`;

    currComment.className = 'comment';
    userCommentContainer.className = 'userCommentContainer'
    userCommentContainer.append(currComment);
    profileWrap.className = 'profileWrap';
    profileWrap.append(imgWrapper, userCommentContainer, daySpan);

    commentContainer ? commentContainer.prepend(profileWrap) : null;
    commentContainer ? commentContainer.scrollHeight = { 'top': 0 }: null;

    addBgColor();
    newCommentText ? newCommentText.value = '' : null;
    commentBtn ? commentBtn.textContent = '➕': null
}
function grabComments() {
    // get all the comments info from the localStorage
    const allComments = localStorage.getItem('allComments');
    //  if there is some users questions parse the data, or set it to an empty array
    return allComments ? JSON.parse(allComments) : [];
}