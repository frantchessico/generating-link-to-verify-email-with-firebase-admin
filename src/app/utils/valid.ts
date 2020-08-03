
const spValidators = {
  isEmpty (string) {
      if(string.trim() === '') {
          return true;
      } else {
          return false
      }
      }, 


  isEmail(email)  {
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email.match(emailRegExp)) {
      return true;
  } else {
      return false;
  }
},


isPhone(phone)  {
  const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

  if(phone.match(phoneRegExp)) {
      return true;
  } else {
      return false;
  }
},

isLength(string) {
if(string.length < 3) {
    return true
} else {
    return false
}
},

isPassword(password){
  if(password.length < 6) {
      return true
  } else {
      return false
  }
},
isUndefined(string) {
  if(string === undefined) {
      return true
  } else {
      return false
  }
},

isNull(string) {
  if(string === 'null') {
      return true
  } else {
      return false
  }
},

isEmailVerified(emailVerified) {
  if(emailVerified === false) {
      return true
  } else {
      return false
  }
}
}


export default spValidators;
