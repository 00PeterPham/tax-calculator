import React, { useState } from "react";
import Input from "../../presentational/Input";
import Button from "../../presentational/Button";

const FormContainer = ({ handleSubmit }) => (
  <form className="salary-form" onSubmit={handleSubmit}>
    <Input 
      label="Salary Input"
      text="Please enter your annual salary"
      type="text"
      name="salaryInput"
    />
    <Button className="salary-form__button" text="submit" />
  </form>
);
export default FormContainer;
