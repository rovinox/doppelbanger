export default function validateAddressForm(values, setErrors) {
  const errors = {};

  //name

  if (!values.name) {
    errors.name = "first name required";
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.name)) {
    errors.name = "first name is invalid";
  }

  //lastName

  if (!values.lastName) {
    errors.lastName = "last name required";
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.lastName)) {
    errors.lastName = "last name is invalid";
  }

  //email

  if (!values.email) {
    errors.email = "Email required";
  } else if (values.email?.length < 3) {
    errors.email = "The email must have at least 3 characters";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "The email is not valid";
  }

  //address

  if (!values.address) {
    errors.address = "address required";
  } else if (values.address?.length < 3) {
    errors.address = "The address must have at least 3 characters";
  }

  //city

  if (!values.city) {
    errors.city = "city required";
  } else if (values.city?.length < 3) {
    errors.city = "The city must have at least 3 characters";
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.city)) {
    errors.city = "The city is invalid";
  }

  //state

  if (!values.state) {
    errors.state = "State Required";
  } else if (values.state?.length < 2) {
    errors.state = "The field must have at least 3 characters";
  } else if (!/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/i.test(values.state)) {
    errors.state = "The field is invalid";
  }

  if (!values.zip) {
    errors.zip = "zip code required";
  } else if (values.zip?.length < 4 || values.zip?.length > 6) {
    errors.zip = "";
  } else if (!/^[0-9]{4,6}$/i.test(values.zip)) {
    errors.zip = "Zip code must have 4-6 characters";
  }

  //phoneNumber

  if (!values.phoneNumber) {
    errors.phoneNumber = "phone number required";
  } else if (
    values.phoneNumber?.length < 8 ||
    values.phoneNumber?.length > 10
  ) {
    errors.phoneNumber = "The phone must have 8 to 10 characters";
  } else if (!/^[0-9]{8,10}$/i.test(values.phoneNumber)) {
    errors.phoneNumber = "The phone is invalid";
  }

  setErrors(errors);

  return Object.keys(errors).length === 0 ? true : false;
}
