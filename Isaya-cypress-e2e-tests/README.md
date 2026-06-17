Simple description of specs

- `cypress/e2e/UC-CreateAccount/create_account.cy.js`
  - User account creation test.
  - Opens the homepage, clicks `User`, then `Register as Student`.
  - Fills the form with data from `student-mock`.
  - Then visits the WordPress registration page and attempts to register with the same user.
  - Verifies the error for an already registered username.

- `cypress/e2e/UC-Login/spec.cy.js`
  - Login test file.
  - Currently contains an empty `template spec` with no active steps.

- `cypress/e2e/UC-ManageSurveys/spec.cy.js`
  - Survey management test file.
  - Currently contains an empty `template spec` with no active steps.

- `cypress/e2e/UC-ProvideFeedback/spec.cy.js`
  - Feedback submission test file.
  - Currently contains an empty `template spec` with no active steps.

- `cypress/e2e/UC-ReviewFeedback/spec.cy.js`
  - Feedback review test file.
  - Currently contains an empty `template spec` with no active steps.

> In summary: only the `UC-CreateAccount` spec is actually implemented; the others are skeletons ready to be filled in.
