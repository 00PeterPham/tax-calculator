import React from "react";
import PropTypes from "prop-types";
import formatNumber from '../../../utils/formatNumber';

const SalaryTitle = ({ salary }) => {
  const salaryString = formatNumber(salary || 0);

  return <h1>Salary: $ {salaryString}</h1>
}
SalaryTitle.propTypes = {
  salary: PropTypes.number.isRequired,
}
export default SalaryTitle;

