import basePage from './BasePage';

// Selectors for practice module apps
const selectors = {
    // Login Module
    loginForm: '[data-testid="login-form"]',
    usernameInput: '[data-testid="username-input"]',
    passwordInput: '[data-testid="password-input"]',
    loginButton: '[data-testid="login-button"]',
    errorMessage: '[data-testid="error-message"]',
    
    // Registration Module
    registrationForm: '[data-testid="registration-form"]',
    emailInput: '[data-testid="email-input"]',
    confirmPasswordInput: '[data-testid="confirm-password-input"]',
    registerButton: '[data-testid="register-button"]',
    
    // Contact Form
    contactForm: '[data-testid="contact-form"]',
    nameInput: '[data-testid="name-input"]',
    messageInput: '[data-testid="message-input"]',
    submitButton: '[data-testid="submit-button"]',
    
    // Shopping Cart
    productList: '[data-testid="product-list"]',
    addToCartButton: '[data-testid="add-to-cart"]',
    cartIcon: '[data-testid="cart-icon"]',
    cartItems: '[data-testid="cart-items"]',
    checkoutButton: '[data-testid="checkout-button"]',
    
    // Search & Filter
    searchInput: '[data-testid="search-input"]',
    searchButton: '[data-testid="search-button"]',
    filterDropdown: '[data-testid="filter-dropdown"]',
    resultsContainer: '[data-testid="results-container"]',
    
    // User Profile
    profileForm: '[data-testid="profile-form"]',
    profilePicture: '[data-testid="profile-picture"]',
    saveButton: '[data-testid="save-button"]',
    
    // Booking System
    bookingForm: '[data-testid="booking-form"]',
    dateInput: '[data-testid="date-input"]',
    timeSlot: '[data-testid="time-slot"]',
    bookButton: '[data-testid="book-button"]',
    
    // Common elements
    successMessage: '[data-testid="success-message"]',
    loadingSpinner: '[data-testid="loading-spinner"]',
    backButton: '[data-testid="back-button"]'
};

// Page Object for Practice Module Apps
const practiceModulePage = {
    /**
     * Visit specific practice module app
     * @param {string} moduleSlug - Module slug
     */
    visitModuleApp(moduleSlug) {
        basePage.visit(`/practice/${moduleSlug}/app`);
    },

    // Login Module Methods
    login: {
        fillUsername(username) {
            basePage.getElement(selectors.usernameInput).type(username);
        },
        
        fillPassword(password) {
            basePage.getElement(selectors.passwordInput).type(password);
        },
        
        clickLogin() {
            basePage.getElement(selectors.loginButton).click();
        },
        
        verifyErrorMessage(message) {
            basePage.getElement(selectors.errorMessage).should('contain', message);
        }
    },

    // Registration Module Methods
    registration: {
        fillEmail(email) {
            basePage.getElement(selectors.emailInput).type(email);
        },
        
        fillPassword(password) {
            basePage.getElement(selectors.passwordInput).type(password);
        },
        
        fillConfirmPassword(password) {
            basePage.getElement(selectors.confirmPasswordInput).type(password);
        },
        
        clickRegister() {
            basePage.getElement(selectors.registerButton).click();
        }
    },

    // Contact Form Methods
    contact: {
        fillName(name) {
            basePage.getElement(selectors.nameInput).type(name);
        },
        
        fillEmail(email) {
            basePage.getElement(selectors.emailInput).type(email);
        },
        
        fillMessage(message) {
            basePage.getElement(selectors.messageInput).type(message);
        },
        
        clickSubmit() {
            basePage.getElement(selectors.submitButton).click();
        }
    },

    // Shopping Cart Methods
    cart: {
        addProductToCart(productIndex = 0) {
            basePage.getElement(selectors.addToCartButton).eq(productIndex).click();
        },
        
        openCart() {
            basePage.getElement(selectors.cartIcon).click();
        },
        
        verifyCartItems(count) {
            basePage.getElement(selectors.cartItems).should('have.length', count);
        },
        
        clickCheckout() {
            basePage.getElement(selectors.checkoutButton).click();
        }
    },

    // Search & Filter Methods
    search: {
        performSearch(query) {
            basePage.getElement(selectors.searchInput).type(query);
            basePage.getElement(selectors.searchButton).click();
        },
        
        selectFilter(filterValue) {
            basePage.getElement(selectors.filterDropdown).select(filterValue);
        },
        
        verifyResults() {
            basePage.getElement(selectors.resultsContainer).should('be.visible');
        }
    },

    // User Profile Methods
    profile: {
        updateName(name) {
            basePage.getElement(selectors.nameInput).clear().type(name);
        },
        
        updateEmail(email) {
            basePage.getElement(selectors.emailInput).clear().type(email);
        },
        
        saveProfile() {
            basePage.getElement(selectors.saveButton).click();
        }
    },

    // Booking System Methods
    booking: {
        selectDate(date) {
            basePage.getElement(selectors.dateInput).type(date);
        },
        
        selectTimeSlot(index = 0) {
            basePage.getElement(selectors.timeSlot).eq(index).click();
        },
        
        confirmBooking() {
            basePage.getElement(selectors.bookButton).click();
        }
    },

    // Common Methods
    verifySuccessMessage(message) {
        basePage.getElement(selectors.successMessage).should('contain', message);
    },
    
    waitForLoading() {
        basePage.getElement(selectors.loadingSpinner).should('not.exist');
    },
    
    goBack() {
        basePage.getElement(selectors.backButton).click();
    }
};

export default practiceModulePage;