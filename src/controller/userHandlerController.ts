import firebase from '../config/firebase';



const userHandlerController = {
  async resgister(req, res) {
    const { email, password } = req.body;

    await firebase.AUTH.createUserWithEmailAndPassword(email, password)
      .then(data => {
      return res.json(data)
      }).catch(err => {
      return res.json(err)
    })
  }
}


export default userHandlerController