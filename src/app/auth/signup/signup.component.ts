import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!:FormGroup;
  errorMessage!:string;
  
  constructor(private authservice:AuthService, private route:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    
  }
  initForm(){
    this.signUpForm=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    }      
    );

  }
onSubmit(){
  const email = this.signUpForm.get('email')?.value;
  const password = this.signUpForm.get('password')?.value;
  this.authservice.createNewUser(email,password).then(
    ()=>{this.route.navigate(['/books']);},
    (error)=>{
      this.errorMessage=error;
    }
  );

}
}
