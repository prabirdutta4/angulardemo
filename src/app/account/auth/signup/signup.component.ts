import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  implements OnInit, AfterViewInit {
	  signupForm: FormGroup;
	  submitted = false;
	  error = '';
	  loading = false;
	  selectValue: string[];

	  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { 
			this.selectValue = ['Male', 'Female'];
	  }

   ngOnInit() {

    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
	   age: ['', Validators.required],
	   gender: ['', Validators.required],
    });
  }
   ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;
	alert("Dashboard");
  
  }

}
