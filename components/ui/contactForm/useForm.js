import { useState } from "react";

const useForm = (callback, validationGeneral, formState) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const validationErrors = validationGeneral(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0 && formState === "paynow") {
      callback();
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues((prevvalues) => ({
      ...prevvalues,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors,
    setErrors,
  };
};

export default useForm;
