import React from "react";
import Input from "../presentational/Input.jsx";
import SubmitButton from "../presentational/SubmitButton.jsx";

const FormContainer = ({ handleSubmit }) => (
  <form className="salary-form" onSubmit={handleSubmit}>
    <Input 
      label="Salary Input"
      text="Please enter your annual salary"
      type="text"
      name="salaryInput"
    />
    <SubmitButton />
  </form>
);
export default FormContainer;
