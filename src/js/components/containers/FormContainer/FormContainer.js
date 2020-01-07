import React from "react";
import Input from "../../presentational/Input";
import Button from "../../presentational/Button";
import Error from "../../presentational/Error";

const FormContainer = ({ handleSubmit, salaryInputError }) => {
  //const [salaryInputError, setSalaryInputError] = useState(false);

  return (
    <form className="salary-form" onSubmit={handleSubmit} noValidate>
      <Input 
        label="Salary Input"
        text="Please enter your annual salary"
        type="text"
        name="salaryInput"
      />
      <Button className="salary-form__button" text="submit" />
      {
        salaryInputError && 
        <Error 
          className="salary-form__error-msg"
          text="Please enter a valid number format. It can contain numbers, commas, and a decimal. ie. 150,000.75"
        />
      }
    </form>
  )
};
export default FormContainer;

/**
  Adding local state: salaryInputError
  - salaryInputError conditionally renders <Error />
  - setSalaryInputError() should be invoked when <Button /> is clicked

  Solution:
  - Can move <Button /> outside of form, so that it does not automatically submit the form when clicked
  - Then have <Button /> onClick fire some function. valdiationCheck()
  - valdiationCheck() checks if input is valid, then submits form. .submit()
  - else show Error msg, can change salaryInputError to use local state. ie. const [salaryInputError, setSalaryInputError] = useState(false);
 */
