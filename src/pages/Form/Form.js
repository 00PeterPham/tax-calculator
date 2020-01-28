import React, { useState } from "react";
import valdiationCheck from "./utils/validationCheck";
import Input from "../../common/components/Input";
import Button from "../../common/components/Button";
import Error from "../../common/components/Error";

const Form = ({ handleSubmit }) => {
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
export default Form;