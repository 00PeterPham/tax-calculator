import React, { useState } from "react";
import { isInvalid } from "./logic/isInvalid";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Error from "../../components/Error";

const FormContainer = ({ handleSubmit }) => {
  const [inputError, setInputError] = useState(false);

  const handleInputFocus = () => {
    setInputError(false);
  }

  const validationCheck = (evt) => {
    evt.preventDefault();
    const form_el = evt.target;
    const val = form_el.salaryInput.value;

    if(isInvalid(val)){
      setInputError(true);
    }else {
      setInputError(false);
      handleSubmit(evt.target);
    }
  }

  return (
    <div className="salary-form__container">
      <h1>Federal Income Tax Calculator 2019</h1>
      <form className="salary-form__form" onSubmit={validationCheck} noValidate>
        <Input 
          text="Please enter your annual salary"
          type="text"
          name="salaryInput"
          handleInputFocus={handleInputFocus}
        />
        <Button 
          className="salary-form__button" 
          text="submit" 
        />
        {
          inputError && 
          <Error 
            className="salary-form__error-msg"
            text="Please enter a valid number format. It can contain numbers, commas, and a decimal. ie. 150,000.75"
          />
        }
      </form>
    </div>
  )
};
export default FormContainer;