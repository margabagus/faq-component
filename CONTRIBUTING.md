# Contributing to FAQ Component

First off, thank you for considering contributing to the FAQ Component! It's people like you that make this component better for everyone.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible.

### Suggesting Enhancements

If you have a suggestion that is not a bug and would make this better, please file an issue with the tag "enhancement".

### Pull Requests

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

* Use semicolons
* 2 spaces for indentation
* Prefer `const` over `let`
* 80 character line length

### CSS Styleguide

* Use BEM naming convention
* Order properties alphabetically
* Use variables for repeated values
* Mobile-first approach

## Project Structure

```
project-root/
├── src/
│   ├── css/
│   │   └── faq-styles.css
│   └── js/
│       └── faq-script.js
├── dist/
│   ├── css/
│   │   └── faq-styles.min.css
│   └── js/
│       └── faq-script.min.js
├── docs/
│   └── API.md
└── tests/
    └── test.js
```