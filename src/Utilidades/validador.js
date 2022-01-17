import { useState} from "react";
import validator from 'validator'


export const validateEmail = (mail) => {
    var email = mail;
  
    if (validator.isEmail(email)) {
     return true;
    } else {
      return false;
    }
}