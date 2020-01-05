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
- Move all functions that are used more then once into the '_lib' folder
- Move JS functions that are used by one component inside that component folder. ie. 'calcTotalTax.js' -> TotaTax
- Make sure each function, or class do one thing 'Single Responsibility Principle'

- Add Unit Tests for the rest of Utils, add Error testing as well. 
- Add Unit Tests for Components
- Add LESS prefixer for all browsers
- Style app
- Figure out how to set defaultProps
- Add reload on results page redirect to FormContainer path="/"
- Run accessibility tests
- Refactor, restructure folders, move methods to beside componenet index.js file? (Atomic Design?)

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
- There is a presentational component, TaxResultTier.jsx, that is used mulitple times in TaxResultsContainer.jsx. I do this by mapping through the taxResults array and returning an array of HTML for the TaxResultTier. Though this does decrease the readibility in the TaxResultTier.jsx file, I decided to keep this logic in the TaxResultTier.jsx vs the TaxResultsContainer.jsx so that it would be cleaner in the TaxResultsContainer.jsx file. So that the containers do not have any transformations in them, only the use of presentational components.
- Added a 'Go Back' button on the Tax Results page. This button and the browser's back button can both me used to navigate back to the previous page (Salary Input Form)
- Creating a 'componenets/lib' folder to store helper functions for easier testing and better organization

## Lessons:
- Unable to import module properly using "export default <function name> = () => {...}", instead had to "declare function as a variable first then export variable name. ie. const <function name> = () => {...} export default <function name>"