import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
	
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	   this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }
  
   ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }
    // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  
   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
	alert("dashboard");
   
  }

}
