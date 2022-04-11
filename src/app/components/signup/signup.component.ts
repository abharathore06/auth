import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private auth:AuthService) { }
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword:new FormControl('')

  });
  ngOnInit(): void {
    this.loadState();
  }
  onSubmit(){
    this.router.navigate(['login']);
    alert("REGISTRATION SUCCESSFUL");
  }
  saveDetails(email:any,password:any){
    const deatils={
       "email": email,
       "password":password
    }
    this.auth.admins.push(deatils);
    console.log(this.auth.admins);
    this.saveState();
    
  }
  saveState(){
    localStorage.setItem("users",JSON.stringify(this.auth.admins))
  }
  loadState(){
    try{
      const todoInStorage=JSON.parse(localStorage.getItem('users')|| '{}');
    if(!todoInStorage) return;
    this.auth.admins.length=0;
    this.auth.admins.push(...todoInStorage);
    }
    catch(e){
      console.log("something is wrong");
      console.log(e);
      
      
    }
  }

}
