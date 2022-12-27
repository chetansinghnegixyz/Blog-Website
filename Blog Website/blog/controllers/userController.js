import UserModel from "../models/User.js"

class UserController{
  static home = (req, res) => {
    res.render("index", {'title': 'Home'});
  }
  static blogs = (req, res) => {
    res.render("blogs", {'title': 'Blogs'});
  }
  static register = (req, res) => {
    res.render("register", {'title': 'Registration'});
  }
  static createUserDoc = async(req, res) => {
    try{
      const doc = new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
      })
      await doc.save()
      res.redirect('/login');
    }
    catch(error){
      console.log(error)
    }
  }
  static userLogout = async(req, res) => {

    try{
      req.session.destroy();
      res.redirect('/login');
    }
    catch(error){
      console.log(error)
    }
  }
  static login = (req, res) => {
    res.render("login", {'title': 'Login'});
  }
  static ai = (req, res) => {
    res.render("ai", {'title': 'Artificial Intelligence'});
  }
  static ds = (req, res) => {
    res.render("ds", {'title': 'Data Sciece'});
  }
  static wd = (req, res) => {
    res.render("wd", {'title': 'Web Development'});
  }
  static dm = (req, res) => {
    res.render("dm", {'title': 'Digital Marketing'});
  }
  static bc = (req, res) => {
    res.render("bc", {'title': 'Block Chain Development'});
  }
  static gd = (req, res) => {
    res.render("gd", {'title': 'Graphic Designing'});
  }
  static verifyLogin = async(req, res) => {
    try{
      const{email, password} = req.body
      const result = await UserModel.findOne({email:email})
      if(result != null){
      if(result.email == email && result.password == password){
        res.redirect("/blogs");
      }
      else{
        res.send("<h1>Email or password is not valid</h1>");
      }
    }
      else{
        res.send("<h1>You are not a Registered User</h1>");
      }
    }
    catch(error){
      console.log(error)
    }
   }
  }

export default UserController