const spValidators = require('sp-validators');

import firebase from '../config/firebase';
import RequestI from '../models/requestInterface'

import defaultPhotoURL from '../utils/fakePhoto';


let errors: any = {}

const userHandlerController =  {
  async resgister(req, res){
    const { 
      email, 
      password, 
      firstName, 
      lastName, 
      city,
      state,
      brandName,
      phoneNumber,
      typeOfbusiness,
      biNumber, 
     } : RequestI = req.body;

    
    if(!spValidators.isEmail(email)) {
         errors.email = 'Email must be valid'
    }
    if(spValidators.isEmpty(email)) {
      errors.email = 'Email field must not be empty';
    }
    

    if(spValidators.isLength(password)) {
      errors.password = 'Password is too weak';
    }
    if(spValidators.isEmpty(password)) {
      errors.password = 'Password field must not be empty';
    }

    
     
    if(spValidators.isLength(firstName)) {
      errors.firstName = 'Firstname is too short';
    }
    if(spValidators.isEmpty(firstName)) {
      errors.firstName = 'Firstname must not be empty';
    }

    


    if(spValidators.isLength(lastName)) {
      errors.lastName = 'Lastname is too short';
    }
    if(spValidators.isEmpty(lastName)) {
      errors.lastName = 'Lastname must not be empty';
    }

    
    // if(spValidators.isPhone(phoneNumber)) {
    //   errors.phoneNumber = 'Phone number must be valid';
    // }

    if(spValidators.isLength(phoneNumber)) {
      errors.phoneNumber = 'Phone number is too short';
    }

    if(spValidators.isEmpty(phoneNumber)) {
      errors.phoneNumber = 'Phone number must not be empty';
    }

    

    if(spValidators.isLength(state)) {
      errors.state = 'State is too short';
    }

    if(spValidators.isEmpty(state)) {
      errors.state = 'State must not be empty';
    }

    

    if(spValidators.isLength(city)) {
      errors.city = 'City is too short';
    }

    if(spValidators.isEmpty(city)) {
      errors.city = 'City must not be empty';
    }

   

    if(spValidators.isLength(biNumber)) {
      errors.biNumber = 'B.I number is too short';
    }
    if(spValidators.isEmpty(biNumber)) {
      errors.biNumber = 'B.I number must not be empty';
    }

    
     
    if(spValidators.isLength(typeOfbusiness)) {
      errors.typeOfbusiness = 'Type of business is too short';
    }

    if(spValidators.isEmpty(typeOfbusiness)) {
      errors.typeOfbusiness = 'Type of business must not be empty';
    }

    
    if(spValidators.isLength(brandName)) {
      errors.brandName = 'Brand name is too short';
    }
    if(spValidators.isEmpty(brandName)) {
      errors.brandName = 'Brand name must not be empty';
    }

   

    if(
      errors.email || 
      errors.password ||
      errors.firstName ||
      errors.lastName  ||
      errors.phoneNumber ||
      errors.state ||
      errors.city ||
      errors.biNumber ||
      errors.typeOfbusiness ||
      errors.brandName
      ) {
      return spValidators.errorsLength(errors, res)
    }
   const brandValid =  brandName.toLowerCase().replace(/\s/g, '');
   const verifyBrandName = firebase.FIRESTORE.doc(`users/${brandValid}`).get();
   if((await verifyBrandName).exists) {
     return res.json({inffo: 'User was taken'})
   }
  
   await firebase.AUTH.createUserWithEmailAndPassword(email, password)
      .then(data => {
     firebase.FIRESTORE.doc(`users/${brandValid}`)
     .set({
       uid: data.user.uid,
      email, 
      firstName, 
      lastName, 
      photoURL: defaultPhotoURL,
      city,
      state,
      brandValid,
      phoneNumber,
      typeOfbusiness,
      biNumber
     }, { merge: true});

     const fullName = firstName + ' ' + lastName;
    
     data.user.updateProfile({
          displayName: fullName,
          photoURL: defaultPhotoURL,
     })
     
     data.user.sendEmailVerification().then(()  => {
     
     })
     .then(() => {
      //  return res.json({success: 'Please, verify your email'})
      return res.json(data)
     })
      }).catch(err => {
        if(err.code === 'auth/email-already-in-use') {
          return  res.json({error: 'Email was taken'}) 
        }
    })
  },

  async loginEmailPassword(req, res) {
    const { 
      email, 
      password}: RequestI = req.body;

      let errors: any = {}
    
    if(!spValidators.isEmail(email)) {
         errors.email = 'Email must be valid'
    }
    if(spValidators.isEmpty(email)) {
      errors.email = 'Email field must not be empty';
    }
    

    if(spValidators.isLength(password)) {
      errors.password = 'Password is too weak';
    }
    if(spValidators.isEmpty(password)) {
      errors.password = 'Password field must not be empty';
    }

    if(
      errors.email || 
      errors.password
      
      ) {
      return spValidators.errorsLength(errors, res)
    }
   
firebase.AUTH.signInWithEmailAndPassword(email, password)
.then(data => {
  return res.json(data)
}).catch(err => {
  return res.json(err)
})

  },

 async resetPassword(req,res) {
   const { email } = req.body;
   let errors: any = {}
    
    if(!spValidators.isEmail(email)) {
         errors.email = 'Email must be valid'
    }
    if(spValidators.isEmpty(email)) {
      errors.email = 'Email field must not be empty';
    }
    if(
      errors.email
      ) {
      return spValidators.errorsLength(errors, res)
    }
   firebase.AUTH.sendPasswordResetEmail(email)
   .then(() => {
    return res.json({success: 'Please, verify your email and reset your password'})
   }).catch(err => {
     if(err.code === 'auth/user-not-found') {
       return res.json({error: `Email doesn't not exist, please make sure if your email is correcty`})
     }
     
   })
 },

 async updatePhoneNumber(req, res) {

  
   const { phoneNumber } = req.body;
   const { uid } = req.params;

   if(spValidators.isLength(phoneNumber)) {
    errors.phoneNumber = 'Brand name is too short';
  }
  if(spValidators.isEmpty(phoneNumber)) {
    errors.phoneNumber = 'Brand name must not be empty';
  }

 

  if(
    
    errors.phoneNumber
    ) {
    return spValidators.errorsLength(errors, res)
  }

   firebase.admin.auth().updateUser(uid, {
    phoneNumber: phoneNumber
  }).then(data => {
    return res.json(data)
  }).catch(err => {
    return res.json(err)
  })
   
 },

 updateEmail(req, res) {
   const { email } = req.body;
   const { uid } = req.params;
   firebase.admin.auth().updateUser(uid, {
     email
   }).then(data => {
    firebase.AUTH.currentUser.sendEmailVerification().then(() => {
      return res.json(data)
    }).catch(err => {
      return res.json(err)
    })
   })
 },
 async updateUser(req, res) {
   const { userName } = req.params;
   
     firebase.FIRESTORE.doc(`users/${userName}`).update({

     })
 },
 
 getUser(_, res) {
  const user = firebase.AUTH.currentUser;
  return res.json(user)
 },
}










export default userHandlerController