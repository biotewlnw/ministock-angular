import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  //ตัวแปร
  message:string ="Hello Angular";

  profile ={
    "name":"xxx",
    "tel":"08343434",
    "gender":"Male",
  };

  //2 Ways DataBinding
  userData = {
    "email":"",
    "password":"",
  }

  //ตัวแปร object
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitLogin(){
    // alert("Hey Angluar");
    if(this.userData.email == "admin@email.com" && this.userData.password == "1234"){
      alert("Login Success");
      this.router.navigate(["backend"]);
    }else{
      alert("Login Fail");
    }
  }

}
