# tax-calculator assignment

**This assignment may be completed using JavaScript or Python.**

Points wants to build an income tax calculator to help illustrate how marginal taxes work.

As the project lead, your job is to create a
[single page web application](https://en.wikipedia.org/wiki/Single-page_application)
that lets users submit their annual gross income to see how much they would owe in federal income tax.

This assignment may be completed using JavaScript or Python.
For Python, please implement a command line interface instead of the web interface described below.

## Notes

* Use [Canadian federal income tax rates](https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html#federal) for 2019.
* The web application should include two screens:
  * The first screen should display a form, which includes an input field and a submit button.
    * The input field should accept the user's gross salary.
    * Submitting the form should navigate to the second screen.
  * The second screen should display a breakdown of tax rates and amounts for each applicable tax bracket,
  as well as the total tax amount and effective tax rate.
    * It should be possible to navigate back to the first screen.

## Instructions

Clone or download this repository and then submit your solution to your contact
at Points. Please **do not fork or submit pull requests** to this repository.

## Requirements

* Implement your solution using JavaScript or Python.
* If using JavaScript:
    * Create a simple, yet visually appealing and responsive design.
    * Target the latest stable version of [Google Chrome](https://www.google.com/chrome/).
* If using Python:
    * Implement a simple yet intuitive command line interface.
* Include comments where you feel that they would be helpful.
* Include a README with instructions on how setup, run, and test the application.
* Include unit tests.

## TO DO:
- find a better name for TextValue.js component or don't make it a component
- use tax terms from the assignment for vars etc...

- Keep FormContainer/utils?
- Convert utils folder to utils.js file and export by name?

- Change App.js file to routing file
- Add prettier format or js beautify
- Add Unit Tests for the rest of Utils, add Error testing as well. (taxCalculator.js)
- Add Unit Tests for Components
- Create Routing file : https://codeburst.io/getting-started-with-react-router-5c978f70df91
- Add reload on results page redirect to FormContainer path="/"
- Run accessibility tests
- Refactor, restructure folders, move methods to beside componenet index.js file? (Atomic Design?)
- Refactor README.md "end with /n"
- Style app

## Dev Planning:
- If salary is <= taxBracket then calculate tax using that taxRate
- filter to see which taxBrackets <= salary
- iterate through the filtered Array and do tax calc
-- taxResult = (salary - prevTaxBracket) x taxRAte
** Issue with above implementation. Only taxBrackets <= salary are applied, the remainder of one is not taxed in the next bracket
ie. salary = 50,000. 47,630 of the salary is taxed at 15%, the remaining 2,370 should be taxed at 20.5%

*New Strategy:
- Tax salary at first bracket (50,000 x 15%)
- Subtract salary from current taxBracket amnt (ie. remainingSalary = 50,000 - 47,630 = 2,370)
- If remainingSalary > 0, then move to next taxBracket and tax salary at next taxRate (2,370 x 20.5%)
- else stop calculations (can return and escape loop or use function * generators)

Fixed Bugs:
- taxCalculator() being executed before state was set, used setState()'s callback param to execute after setting of state

## Dev Notes:
- There is a presentational component, TaxRate.jsx, that is used mulitple times in TaxResultsContainer.jsx. I do this by mapping through the taxResults array and returning an array of HTML for the TaxRate. Though this does decrease the readibility in the TaxRate.jsx file, I decided to keep this logic in the TaxRate.jsx vs the TaxResultsContainer.jsx so that it would be cleaner in the TaxResultsContainer.jsx file. So that the containers do not have any transformations in them, only the use of presentational components.
- Added a 'Go Back' button on the Tax Results page. This button and the browser's back button can both me used to navigate back to the previous page (Salary Input Form)
- Creating a 'componenets/lib' folder to store helper functions for easier testing and better organization
- Instead of naming the component file as /componenet-name/index.js to make importing it a bit easier, I decided to name the js file by its component name as well /component-name/component-name.js since working on multiple components, just shows several tabs with the name 'index.js' making it more difficult to quickly identify which component you are working on. However, I did keep an index.js file inside each component folder that needed to be imported as a module make importing cleaner but to also make refactoring or future additions easier. If new files were added, names changed, edited etc.. only the index.js file has to be edited (per component) and not everywhere they are imported
- Abstracted setState into seperate functions. ie. setSalary, to clean up App.js and follow 'Single Responsibility Principle', however, by doing so, I've had to pass 'this' (the Class Component Object) to the setState functions. Option: change Class componenet to Functional component and use hooks. ie. useState()
- Kept inputError state local to FormContainer.js, since its only used in FormContainer.js. By doing so, I had to add an onclick event to the <Button /> so that I could validate the input before submitting the form vs submitting the form by clicking the <Button /> by default, and checking the input validation afterwards in App.js
- appended a 'className' prop to the existing Error and Button Component's classes, so that the parent component that is using it, can add their own className and add additional styles outside of the base styling. ie. className="error-msg salary-form__error-msg"  

## Lessons:
- Unable to import module properly using "export default <function name> = () => {...}", instead had to "declare function as a variable first then export variable name. ie. const <function name> = () => {...} export default <function name>"
- Able to abstract this.setState() from Class component, into imported functions by passing 'this' as an argument to the function. ie. setSalaryState = (component, salary) => {          use: setSalaryState(this, salary)
    component.setState = {...}
}, 
- Set basename for <Router> if app is going to be served in a sub directory. ie. <Router basename={"/dist"}>. Issue come from when trying view the build, but it was being served from 127.01.01/dist (dist subfolder)
- When setting state based on the previous state, pass setState() a function with the previous state as an argument. ie. this.setState(prevState => ({ expanded: !prevState.expanded }))