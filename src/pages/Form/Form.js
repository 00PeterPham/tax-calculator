import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Error from "../../components/Error";

const FormContainer = ({ handleSubmit }) => {
  const [inputError, setInputError] = useState(false);
  const history = useHistory();

  const handleInputFocus = () => {
    setInputError(false);
  }

  const validationCheck = (evt) => {
    evt.preventDefault();
    const form_el = evt.target;
    const inputVal = form_el.salaryInput.value;
    const inputIsNum = /^[0-9,.]*$/.test(inputVal);
    const inputIsNotEmpty = inputVal !== '';
  
    if(inputIsNum && inputIsNotEmpty){
      setInputError(false);
      handleSubmit(evt.target);
      history.push('/results'); //Need to check if salary state has been set before going to /results page
    }else {
      setInputError(true);
    }
  }

  return (
    <div className="salary-form__container">
      <h1>Federal Income Tax Calculator 2019</h1>
      <form className="salary-form__form" onSubmit={validationCheck} noValidate>
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