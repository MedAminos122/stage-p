import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login:boolean
  us:string="";
  invalidLogin: boolean = false;
  message: any;
  loogedin:boolean;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private apiService: EmployeeService) { }
   ngOnInit() {
  //  this.loginForm = this.formBuilder.group({
    //  username: ['', Validators.compose([Validators.required])],
      //password: ['', Validators.required]
    //});
   }

   Login(){
     //console.log(this.loginForm.value);
     if (this.loginForm.invalid) {
      return;
    }

     const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

     this.apiService.login(loginData).subscribe((data: any) => {
      
      this.message = data.message;
     console.log(data.token);
      if(data.token) {
        this.login=true;
          window.localStorage.setItem('token', data.token);
          this.router.navigate(['view']);
       } else {
         this.invalidLogin = true;
        // alert('a' + data.message);
       }
     });
 

   }
   username:string;
   password:string;
   loginNow()
   {
       if((this.username=="aminos") &&(this.password=="markstive"))
       {
         this.apiService.session=true;
         this.router.navigate(['view']);
       }
       else
       {
         this.router.navigate(['login']);
         alert("nom utilisateur ou mot de passe n'est pas correcte");
         this.username="";
         this.password="";
       }
   }
   getPassword()
   {res:String;
  const res=prompt("quel est votre pays préféré");
  if(res=="france")
  {alert("password :      markstive");}
  
  
  }

}
