import React from "react";
import Input from "../../presentational/Input/Input";
import Button from "../../presentational/Button/Button";
import Error from "../../presentational/Error/Error";

const FormContainer = ({ handleSubmit, salaryInputError }) => (
  <form className="salary-form" onSubmit={handleSubmit} noValidate>
    <Input 
      label="Salary Input"
      text="Please enter your annual salary"
      type="text"
      name="salaryInput"
    />
    <Button className="salary-form__button" text="submit" />
    {
      salaryInputError ? 
      <Error 
        className="salary-form__error-msg"
        text="Please enter a valid number format. It can contain numbers, commas, and a decimal. ie. 150,000.75"
      /> :
      null
    }
  </form>
);
export default FormContainer;
