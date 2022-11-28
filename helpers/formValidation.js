const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export const validationGeneral = (values) => {
  const errors = {};
  const emailAddressRegex =
    /^(?!.*(?:__|\.\.|--))[a-zA-Z](([^<>()\[\]\\//.,;:\s@"!#$%^&*+=|'?}{`~]+(\.[^<>_()\[\]\\_,;:\s@,"(?!.*?\.\.)]+)*)|(".+")){1,30}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumberRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const nameRegex = /^[A-Za-z ]+$/;
  const experienceRegex = /^[1-9][0-9]?$|^100$/;

  if (!values.username) {
    errors.username = "Name is required*";
  } else if (!nameRegex.test(values.username)) {
    errors.username = "Please enter a valid Name";
  }
  if (!values.email) {
    errors.email = "Email address is required*";
  } else if (!emailAddressRegex.test(values.email)) {
    errors.email = "Please enter valid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required*";
  } else if (!phoneNumberRegex.test(values.phoneNumber)) {
    errors.phoneNumber = "Please enter the valid phone number";
  }
  // if (!values.reCaptcha) {
  //   errors.reCaptcha = "Please complete the reCaptcha verification";
  // }
  // if (!values.yearsOfExp) {
  //   errors.yearsOfExp = "Years of Experience is required*";
  // } else if (!experienceRegex.test(values.yearsOfExp)) {
  //   errors.yearsOfExp = "Please enter the valid Years of Experience";
  // }
  if (!values.seatType) {
    errors.seatType = "Please Select Seat Type";
  }
  return errors;
};

export const validationQAAS = (values) => {
  const errors = {};
  const emailAddressRegex =
    /^(?!.*(?:__|\.\.|--))[a-zA-Z](([^<>()\[\]\\//.,;:\s@"!#$%^&*+=|'?}{`~]+(\.[^<>_()\[\]\\_,;:\s@,"(?!.*?\.\.)]+)*)|(".+")){1,30}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumberRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const nameRegex = /^[A-Za-z ]+$/;
  if (!values.username) {
    errors.username = "Name is required*";
  } else if (!nameRegex.test(values.username)) {
    errors.username = "Please enter a valid Name";
  }
  if (!values.email) {
    errors.email = "Email address is required*";
  } else if (!emailAddressRegex.test(values.email)) {
    errors.email = "Please enter valid Email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required*";
  } else if (!phoneNumberRegex.test(values.phoneNumber)) {
    errors.phoneNumber = "Please enter the valid phone number";
  }

  return errors;
};

export const validationEdubeans = (values) => {
  const errors = {};

  const emailAddressRegex =
    /^(?!.*(?:__|\.\.|--))[a-zA-Z](([^<>()\[\]\\//.,;:\s@"!#$%^&*+=|'?}{`~]+(\.[^<>_()\[\]\\_,;:\s@,"(?!.*?\.\.)]+)*)|(".+")){1,30}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumberRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const nameRegex = /^[A-Za-z ]+$/;

  if (!values.username) {
    errors.username = "Name is required*";
  } else if (!nameRegex.test(values.username)) {
    errors.username = "Please enter a valid Name";
  }
  if (!values.email) {
    errors.email = "Email address is required*";
  } else if (!emailAddressRegex.test(values.email)) {
    errors.email = "Please enter valid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required*";
  } else if (!phoneNumberRegex.test(values.phoneNumber)) {
    errors.phoneNumber = "Please enter the valid phone number";
  }
  if (!values.reCaptcha) {
    errors.reCaptcha = "Please complete the reCaptcha verification";
  }
  return errors;
};

export const validationDaas = (values) => {
  const errors = {};

  const emailAddressRegex =
    /^(?!.*(?:__|\.\.|--))[a-zA-Z](([^<>()\[\]\\//.,;:\s@"!#$%^&*+=|'?}{`~]+(\.[^<>_()\[\]\\_,;:\s@,"(?!.*?\.\.)]+)*)|(".+")){1,30}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumberRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const nameRegex = /^[A-Za-z ]+$/;

  if (!values.username) {
    errors.username = "Name is required*";
  } else if (!nameRegex.test(values.username)) {
    errors.username = "Please enter a valid Name";
  }
  if (!values.email) {
    errors.email = "Email address is required*";
  } else if (!emailAddressRegex.test(values.email)) {
    errors.email = "Please enter valid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required*";
  } else if (!phoneNumberRegex.test(values.phoneNumber)) {
    errors.phoneNumber = "Please enter the valid phone number";
  }
  if (!values.message) {
    errors.message = "Message is required*";
  }
  if (!values.reCaptcha) {
    errors.reCaptcha = "Please complete the reCaptcha verification";
  }
  return errors;
};

export function logSuccess() {
  try {
    event({
      action: "enquiry_form_submit",
      category: "enquiry",
      label: "Enquiry Form submit success",
      value: "success",
    });
  } catch (error) {
    console.error("Failed to log.");
  }
}

export function logError() {
  try {
    event({
      action: "enquiry_form_submit",
      category: "enquiry",
      label: "error in submitting enquiry form",
      value: "error",
    });
  } catch (error) {
    console.error("Failed to log.");
  }
}
