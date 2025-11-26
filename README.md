# 🎯 Cypress E2E Automation Framework - TestPro AI

[![Cypress Tests](https://github.com/rkshtjain3/cypress_automation_project/actions/workflows/ci.yml/badge.svg)](https://github.com/rkshtjain3/cypress_automation_project/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Cypress](https://img.shields.io/badge/Cypress-15.6.0-brightgreen)](https://www.cypress.io/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> **Professional-grade Cypress automation framework** built with Page Object Model, custom commands, environment management, structured logging, and CI/CD integration for [TestPro AI](https://testproai.com).

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Running Tests](#-running-tests)
- [Environment Configuration](#-environment-configuration)
- [Test Suites](#-test-suites)
- [Page Object Model](#-page-object-model)
- [Custom Commands](#-custom-commands)
- [Reporting](#-reporting)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🌟 Overview

This project is a **production-ready Cypress automation framework** designed to test the TestPro AI website with industry-standard practices including:

- **Functional Page Object Model** for maximum maintainability
- **Environment-based configuration** (Dev, Staging, Production)
- **Custom Cypress commands** for reusability
- **Structured logging** with comprehensive debugging capabilities
- **CI/CD integration** with GitHub Actions
- **Automated HTML reporting** with Mochawesome
- **AAA test pattern** (Arrange-Act-Assert) for clarity

Perfect for **QA professionals** looking to demonstrate expertise in modern test automation.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🏗️ **Page Object Model** | Functional object-literal based POM for clean separation of concerns |
| 🌍 **Environment Management** | Seamless switching between dev, staging, and production |
| 🔧 **Custom Commands** | 7+ reusable commands for navigation, forms, and validation |
| 📊 **Logging Framework** | Structured logging with info, error, step, and warn levels |
| 🚀 **CI/CD Ready** | GitHub Actions workflows for automated testing |
| 🎯 **Test Organization** | Tests organized by feature with tags for filtering |
| 📈 **HTML Reports** | Beautiful Mochawesome reports with merge capability |
| ⚡ **Retry Logic** | Smart retry configuration based on environment |
| 🛡️ **Error Handling** | Sophisticated exception handling for React apps |
| 📦 **Test Data Management** | JSON fixtures and constants for maintainability |

---

## 🛠️ Tech Stack

- **Test Framework**: Cypress 15.6.0
- **Language**: JavaScript (ES6+)
- **Design Pattern**: Page Object Model (Functional)
- **Reporting**: Mochawesome
- **CI/CD**: GitHub Actions
- **Package Manager**: npm
- **Node Version**: 20.x

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v20.x recommended)
- npm (v9.x or higher)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/rkshtjain3/cypress_automation_project.git
cd cypress_automation_project

# Install dependencies
npm install

# Run tests
npm test
```

### First Test Run

```bash
# Run all tests with report generation
npm test

# Open Cypress Test Runner
npm run cypress:open

# Run smoke tests only
npm run test:smoke
```

---

## 📁 Project Structure

```
cypress-automation-framework/
│
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Main CI/CD pipeline
│       └── smoke.yml                 # Smoke test workflow
│
├── cypress/
│   ├── config/                       # Environment configurations
│   │   ├── dev.json                  # Development environment
│   │   ├── staging.json              # Staging environment
│   │   └── production.json           # Production environment
│   │
│   ├── e2e/                          # Test specifications
│   │   ├── home.cy.js                # Home page tests
│   │   ├── contact.cy.js             # Contact form tests
│   │   └── navigation.cy.js          # Navigation tests
│   │
│   ├── fixtures/                     # Test data
│   │   └── testData/
│   │       └── contactFormData.json  # Contact form test data
│   │
│   ├── support/
│   │   ├── commands/                 # Custom commands
│   │   │   ├── navigation.commands.js
│   │   │   └── form.commands.js
│   │   │
│   │   ├── constants/                # Reusable constants
│   │   │   ├── testData.js           # Test data constants
│   │   │   └── timeouts.js           # Timeout configurations
│   │   │
│   │   ├── pages/                    # Page Object Model
│   │   │   ├── BasePage.js           # Base page utilities
│   │   │   ├── HomePage.js           # Home page object
│   │   │   ├── ContactPage.js        # Contact page object
│   │   │   └── NavigationPage.js     # Navigation page object
│   │   │
│   │   ├── utils/                    # Utility functions
│   │   │   └── logger.js             # Logging utility
│   │   │
│   │   ├── commands.js               # Custom command loader
│   │   └── e2e.js                    # Global configuration
│   │
│   ├── reports/                      # Generated reports
│   ├── screenshots/                  # Auto-captured screenshots
│   └── videos/                       # Test execution videos
│
├── cypress.config.js                 # Cypress configuration
├── merge-reports.js                  # Report merging script
├── package.json                      # Dependencies and scripts
├── .gitignore
└── README.md
```

---

## 🧪 Running Tests

### Basic Commands

```bash
# Run all tests headlessly (production environment)
npm test

# Run all tests (development environment, no retries)
npm run test:dev

# Run all tests (staging environment, 1 retry)
npm run test:staging

# Open Cypress Test Runner
npm run cypress:open

# Open Test Runner with dev config
npm run cypress:open:dev
```

### Test Filtering

```bash
# Run smoke tests only
npm run test:smoke

# Run specific test file
npx cypress run --spec "cypress/e2e/home.cy.js"

# Run tests with specific tag
npx cypress run --env grepTags=@smoke
```

### Browser Selection

```bash
# Run on Chrome
npm run test:chrome

# Run on Firefox
npm run test:firefox

# Run on Edge
npm run test:edge

# Run in headed mode (visible browser)
npm run test:headed
```

### Cleanup

```bash
# Clean all reports
npm run clean:reports

# Clean screenshots
npm run clean:screenshots

# Clean videos
npm run clean:videos

# Clean everything
npm run clean:all
```

---

## 🌍 Environment Configuration

The framework supports multiple environments with different configurations:

### Environment Files

- **`cypress/config/dev.json`** - Development environment
- **`cypress/config/staging.json`** - Staging environment
- **`cypress/config/production.json`** - Production environment (default)

### Configuration Options

```javascript
{
  "baseUrl": "https://testproai.com",        // Base URL for the environment
  "apiUrl": "https://api.testproai.com",     // API URL (if applicable)
  "retries": 2,                               // Number of retries on failure
  "video": true,                              // Video recording
  "defaultCommandTimeout": 15000,             // Default timeout
  "pageLoadTimeout": 40000                    // Page load timeout
}
```

### Usage

```bash
# Set environment via environment variable
export CYPRESS_ENV=staging
npm test

# Or use predefined scripts
npm run test:dev      # Uses dev.json
npm run test:staging  # Uses staging.json
npm run test:prod     # Uses production.json
```

---

## 📝 Test Suites

### Home Page Tests (`home.cy.js`)

Tests the main homepage structure and content:

- ✅ Verifies main section visibility
- ✅ Validates internship program section
- ✅ Checks contact section presence
- ✅ Confirms footer exists

**Tags**: `@smoke`, `@home`

### Contact Form Tests (`contact.cy.js`)

Validates contact form functionality:

- ✅ Displays all required form fields
- ✅ HTML5 validation on empty submission
- ✅ Book Free Session modal interactions
- ✅ Field validation messages

**Tags**: `@smoke`, `@contact`

### Navigation Tests (`navigation.cy.js`)

Tests header navigation and links:

- ✅ All navigation links present with correct URLs
- ✅ CTA buttons (Hire Testers, Join Now)
- ✅ Navigation to different pages

**Tags**: `@smoke`, `@navigation`

---

## 🏗️ Page Object Model

### Architecture

The framework uses a **functional Page Object Model** approach (object literals instead of classes) which is more idiomatic to JavaScript.

### BasePage

Foundation for all page objects with common utilities:

```javascript
import { logger } from '../utils/logger';

const basePage = {
  visit(url = '/') {
    logger.step(`Visiting: ${url}`);
    cy.visit(url, { timeout: 30000 });
  },
  
  getElement(selector, options = {}) {
    return cy.get(selector, { timeout: 10000, ...options });
  }
};

export default basePage;
```

### Example Page Object (HomePage)

```javascript
import basePage from './BasePage';

const selectors = {
  mainSection: 'main',
  internshipSection: 'Internship Program',
  footer: 'footer'
};

const homePage = {
  visitHome() {
    basePage.visit('/');
  },
  
  verifyMainSection() {
    basePage.getElement(selectors.mainSection).should('be.visible');
  }
};

export default homePage;
```

---

## 🎨 Custom Commands

### Navigation Commands

```javascript
// Navigate to section by scrolling
cy.navigateToSection('#contact');

// Click and verify navigation
cy.clickAndVerifyNavigation('Courses', '/courses');

// Verify link attributes
cy.verifyLink('Home', '/');
```

### Form Commands

```javascript
// Fill a form field with validation
cy.fillField('[name="email"]', 'test@example.com');

// Fill entire contact form
cy.fillContactForm({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@test.com',
  message: 'Test message'
});

// Verify field is required
cy.verifyFieldRequired('[name="email"]');

// Verify field validity
cy.verifyFieldValidity('[name="email"]');
```

---

## 📊 Reporting

### Mochawesome Reports

After running tests, HTML reports are automatically generated and merged:

- **Location**: `cypress/reports/html/merged.html`
- **Features**:
  - Test execution summary
  - Pass/fail statistics  
  - Screenshots on failure
  - Test duration
  - Detailed error messages

### Viewing Reports

```bash
# After running tests
open cypress/reports/html/merged.html

# Or on Linux
xdg-open cypress/reports/html/merged.html
```

### Report Generation

Reports are automatically generated via:
1. Individual test JSON files during execution
2. Merging with `merge-reports.js`
3. HTML generation with mochawesome-report-generator

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows

#### Main CI Pipeline (`.github/workflows/ci.yml`)

- **Triggers**: Push to main/develop, Pull requests, Daily at 2 AM UTC
- **Matrix Testing**: Chrome and Firefox browsers
- **Steps**:
  1. Checkout code
  2. Setup Node.js 20
  3. Install dependencies
  4. Run Cypress tests
  5. Upload test results and artifacts
  6. Upload screenshots on failure

#### Smoke Tests Pipeline (`.github/workflows/smoke.yml`)

- **Triggers**: Push to main, Manual dispatch
- **Purpose**: Quick validation with smoke-tagged tests
- **Retention**: 7 days for artifacts

### Viewing CI Results

1. Go to GitHub repository
2. Click **Actions** tab
3. Select workflow run to view results
4. Download artifacts (reports, screenshots, videos)

---

## 📚 Best Practices Implemented

### Code Quality

✅ **Functional Programming** - Using object literals instead of classes  
✅ **DRY Principle** - Reusable commands and utilities  
✅ **Separation of Concerns** - Page objects, tests, and data separated  
✅ **AAA Pattern** - All tests follow Arrange-Act-Assert  
✅ **Descriptive Names** - Clear test and function naming  

### Test Organization

✅ **Test Contexts** - Logical grouping with `context`  
✅ **Test Tags** - Filtering with `@smoke`, `@regression`  
✅ **Independent Tests** - No test dependencies  
✅ **Cleanup Hooks** - `afterEach` for teardown  

### Maintainability

✅ **Centralized Selectors** - In page objects  
✅ **Constants** - For timeouts and test data  
✅ **Fixtures** - JSON files for test data  
✅ **Logging** - Structured logging for debugging  
✅ **Error Handling** - Smart exception management  

### Scalability

✅ **Environment Config** - Easy multi-environment support  
✅ **Modular Structure** - Easy to add new tests/pages  
✅ **Custom Commands** - Extensible command library  
✅ **CI/CD Ready** - Automated testing pipeline  

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### Adding New Tests

1. Create test file in `cypress/e2e/`
2. Use AAA pattern
3. Add appropriate tags
4. Follow naming convention: `feature.cy.js`

### Adding New Page Objects

1. Create file in `cypress/support/pages/`
2. Extend from `BasePage` pattern
3. Define selectors object
4. Export page object

### Code Style

- Use functional approach (object literals)
- Add JSDoc comments
- Follow existing naming conventions
- Use logger for important steps

### Pull Request Process

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 👨‍💻 Author

**Rakshit Jain**  
QA Automation Engineer

- 📧 Email: [Your Email]
- 💼 LinkedIn: [Your LinkedIn]
- 🌐 Portfolio: [Your Portfolio]
- 📱 GitHub: [@rkshtjain3](https://github.com/rkshtjain3)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built for [TestPro AI](https://testproai.com)
- Inspired by industry best practices from Google, Amazon, and Netflix
- Cypress documentation and community

---

## 📞 Support

For questions or issues:

1. **Check Documentation** - README and code comments
2. **Open an Issue** - Use GitHub Issues for bugs
3. **Discussions** - Use GitHub Discussions for questions

---

## 🎯 Project Status

- ✅ **Production Ready**
- ✅ **Actively Maintained**
- ✅ **Open for Contributions**

### Test Coverage

| Test Suite | Status | Tests | Passing |
|------------|--------|-------|---------|
| Home Page | ✅ | 2 | 2 |
| Navigation | ✅ | 2 | 2 |
| Contact Form | ⚠️ | 3 | 1 |

**Overall Pass Rate**: 67% (Working on improving to 100%)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Rakshit Jain

</div>
