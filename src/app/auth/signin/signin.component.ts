import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm!:FormGroup;
  errorMessage!:string;
  
  constructor(private authservice:AuthService, private route:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    
  }
  initForm(){
    this.signInForm=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    }      
    );

  }
onSubmit(){
  const email = this.signInForm.get('email')?.value;
  const password = this.signInForm.get('password')?.value;
  this.authservice.signInUser(email,password).then(
    ()=>{this.route.navigate(['/books']);},
    (error)=>{
      this.errorMessage=error;
    }
  );

}

}
