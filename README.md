# TestPro AI - Cypress Automation Framework

A professional Cypress test automation framework for [TestPro AI](https://testproai.com) using the Page Object Model (POM) design pattern.

## 🚀 Features

- **Page Object Model (POM)** - Clean, maintainable, and scalable test architecture
- **Comprehensive Test Coverage** - Navigation, Home Page, and Contact Form tests
- **HTML Reports** - Automated mochawesome report generation
- **Clean Code Structure** - Follows industry best practices
- **Exception Handling** - Global error handling for React applications

## 📁 Project Structure

```
testproTesting/
├── cypress/
│   ├── e2e/                      # Test specifications
│   │   ├── home.cy.js
│   │   ├── contact.cy.js
│   │   └── navigation.cy.js
│   ├── support/
│   │   ├── pages/                # Page Object classes
│   │   │   ├── BasePage.js
│   │   │   ├── HomePage.js
│   │   │   ├── ContactPage.js
│   │   │   └── NavigationPage.js
│   │   ├── e2e.js
│   │   └── commands.js
│   ├── fixtures/                 # Test data
│   ├── screenshots/              # Auto-generated screenshots
│   └── reports/                  # HTML test reports
├── cypress.config.js
├── package.json
└── README.md
```

## 🛠️ Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd testproTesting
```

2. Install dependencies
```bash
npm install
```

## 🧪 Running Tests

### Run all tests (headless)
```bash
npm test
```

### Run all tests in Cypress UI
```bash
npm run cypress:open
```

### Run specific test file
```bash
npx cypress run --spec "cypress/e2e/home.cy.js"
```

## 📊 Test Reports

After running tests, HTML reports are automatically generated using mochawesome:

- **Location**: `cypress/reports/html/merged.html`
- **View Report**: Open the HTML file in your browser

## 📝 Test Suites

### Navigation Tests
- Verifies header navigation links
- Tests CTA buttons
- Validates page navigation

### Home Page Tests
- Verifies hero section
- Validates main page sections
- Tests internship program section

### Contact Tests
- Validates form fields
- Tests booking modal functionality
- Verifies form validation

## 🏗️ Page Object Model

The framework uses POM for better code organization:

### BasePage
- Common methods for all pages
- Global exception handling
- Reusable utility functions

### HomePage
- Home page specific selectors
- Methods for home page interactions

### ContactPage
- Contact form selectors
- Form interaction methods
- Modal handling

### NavigationPage
- Navigation menu selectors
- Link verification methods

## 🔧 Configuration

Main configuration is in `cypress.config.js`:
- Base URL
- Viewport settings
- Report generation
- Test file patterns

## 📈 Best Practices Implemented

✅ Page Object Model design pattern  
✅ Separation of test logic and selectors  
✅ Reusable components  
✅ Descriptive test names  
✅ Proper error handling  
✅ Automated reporting  
✅ Clean project structure  

## 🤝 Contributing

1. Follow the existing code structure
2. Add new page objects for new pages
3. Keep tests independent and atomic
4. Update README for new features

## 📄 License

This project is created for portfolio purposes.

---

**Author**: [Your Name]  
**Portfolio**: [Your Portfolio Link]  
**LinkedIn**: [Your LinkedIn]
