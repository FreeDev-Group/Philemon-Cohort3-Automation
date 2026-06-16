

###  Folder Structure



```text
/yourname-cypress-e2e-tests
├── cypress/
│   ├── e2e/
│   │   ├── UC-Login/           # Tests for user authentication
│   │   ├── UC-CreateAccount/   # Tests for registration workflow
│   │   ├── UC-ProvideFeedback/ # Tests for taking surveys
│   │   ├── UC-ManageSurveys/   # Tests for instructor survey management
│   │   └── UC-ReviewFeedback/  # Tests for reviewing past submissions
│   ├── fixtures/               # Mock data (e.g., test users, survey JSON)
│   ├── support/                # Custom commands and global hooks
│   └── downloads/              # Folder for file download testing
├── cypress.config.js           # Cypress configuration (base URL set here)
├── package.json                # Dependencies and test scripts
└── README.md                   # Project instructions

```

---

### README.md File



```markdown
# Student Survey App - Automated E2E Tests (Cypress)

This repository contains the automated end-to-end (E2E) testing suite for the Student Survey Application. We use **Cypress** to ensure that our core use cases remain stable and functional across development cycles.

## 🚀 Getting Started

Follow these instructions to run the test suite on your local machine.

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2. Installation
Clone this repository and install the necessary dependencies:

```bash
git clone [https://github.com/FreeDev-Group/Philemon-Cohort3-Automation.git](https://github.com/FreeDev-Group/Philemon-Cohort3-Automation.git)
cd Isaya-cypress-e2e-tests 
or 
cd Paul-cypress-e2e-tests
npm install

```

### 3. Running Tests

You can run the tests in two ways:

* **Interactive Mode (Recommended for development):** Opens the Cypress Dashboard where you can watch tests run in the browser.

```bash
  npx cypress open

```

* **Headless Mode (Recommended for CI/CD):** Runs tests in the terminal.

```bash
  npx cypress run

```

## 📂 Project Structure

Tests are organized by their respective Use Cases defined in the main project documentation. Each folder in `cypress/e2e/` corresponds to a specific system requirement.

| Folder | Use Case |
| --- | --- |
| `UC-Login` | Verifies user authentication and role-based access. |
| `UC-CreateAccount` | Validates the registration workflow. |
| `UC-ProvideFeedback` | Tests the survey-taking and submission process. |
| `UC-ManageSurveys` | Tests Instructor capabilities (Create/Update/Delete). |
| `UC-ReviewFeedback` | Validates retrieval of historical survey data. |

## ⚙️ Configuration

The test environment is configured in `cypress.config.js`. By default, the tests are pointed at the official staging instance:
**URL:** [https://student.michaelkentburns.com/](https://student.michaelkentburns.com/)

## 👥 Contributors

* **Mentors:** [Philemon]
* **Mentees:** Isaya, Paul

*Built for the FreeDev Group - A-Team.*

