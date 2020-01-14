import React, { useState } from "react";
import valdiationCheck from "./utils/validationCheck";
import Input from "../../presentational/Input";
import Button from "../../presentational/Button";
import Error from "../../presentational/Error";

const FormContainer = ({ handleSubmit }) => {
  const [inputError, setInputError] = useState(false);

  const handleInputFocus = () => {
    setInputError(false);
  }

  const handleClick = (evt) => {
    valdiationCheck(evt, setInputError, handleSubmit);
  }

  return (
    <form className="salary-form" noValidate>
      <Input 
        label="Salary Input"
        text="Please enter your annual salary"
        type="text"
        name="salaryInput"
        handleInputFocus={handleInputFocus}
      />
      <Button 
        className="salary-form__button" 
        text="submit" 
        onClick = {handleClick}
      />
      {
        inputError && 
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
  TODO: 
  - Abstract methods into ./utils folder
  - have valdiationCheck() invoke handleSubmit() instead of submtting form with onSubmit={handleSubmit} ??


  Adding local state: inputError
  - inputError conditionally renders <Error />
  - setinputError() should be invoked when <Button /> is clicked

  Solution:
  - Change <Button /> to <a> or move <Button /> outside of form so that it does not submit form wheen clicked. 
  - Add valdiationCheck()
  - When <button> or <a> is clicked fire valdation check function. valdiationCheck()
  - valdiationCheck() checks if input is valid, then submits form. <form-element>.dispatchEvent(new Event("submit"));
  - else show Error msg, can change inputError to use local state. ie. const [inputError, setinputError] = useState(false);
 */
