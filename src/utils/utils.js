import * as Yup from "yup";

export const yupProfileValidation = Yup.object().shape({
  name: Yup.string()
    .notRequired()
    .nullable()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(3, "Must at least be more than 3 characters"),
  email: Yup.string().email().notRequired(),
  address1: Yup.mixed().notRequired(),
  address2: Yup.mixed().notRequired(),
  state: Yup.string().notRequired(),
  lga: Yup.string().notRequired(),
});
export const yupBillingValidation = Yup.object().shape({
  cardName: Yup.string()
    .required("Please enter the card holder's name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(4, "Must at least be more than 4 characters"),
  cardType: Yup.string().required("card type is required"),
  cardDetails: Yup.string().required("card number is required"),
  cardExpiryDate: Yup.string().required("card  expiry date is required"),
  cardCVV: Yup.number().required("card cvv is required"),
});

export const onlyAlphabets = (e) => {
  e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, "");
};
export const onlyDigits = (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, "");
};
export const spaceCardNumber = (e) => {
  e.target.value = e.target.value.substring(0, 16);
  let cardNumberSections = e.target.value.match(/\d{1,4}/g);
  if (cardNumberSections !== null) {
    e.target.value = cardNumberSections.join("      ");
  }
};

export const formatExpiryDate = (event) => {
  let code = event.keyCode;
  let allowedKeys = [8];
  if (allowedKeys.indexOf(code) !== -1) {
    return;
  }

  event.target.value = event.target.value
    .replace(
      /^([1-9]\/|[2-9])$/g,
      "0$1/" // 3 > 03/
    )
    .replace(
      /^(0[1-9]|1[0-2])$/g,
      "$1/" // 11 > 11/
    )
    .replace(
      /^([0-1])([3-9])$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
      "$1/$2" // 141 > 01/41
    )
    .replace(
      /^([0]+)\/|[0]+$/g,
      "0" // 0/ > 0 and 00 > 0
    )
    .replace(
      /[^\d/]|^[/]*$/g,
      "" // To allow only digits and `/`
    )
    .replace(
      /\/\//g,
      "/" // Prevent entering more than 1 `/`
    );
};
