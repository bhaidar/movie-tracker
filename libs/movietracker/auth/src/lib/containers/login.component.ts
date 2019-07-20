import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.services';

@Component({
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <mat-card class="login-card">
        <mat-card-header>
          <mat-card-title>Login</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field>
            <input matInput placeholder="Username" formControlName="username" />
            <div *ngIf="submitted && f.username.errors">
              <mat-error *ngIf="f.username.errors.required"
                >Username is required</mat-error
              >
            </div>
          </mat-form-field>
          <mat-form-field>
            <input
              matInput
              placeholder="Password"
              formControlName="password"
              type="password"
            />
            <div *ngIf="submitted && f.password.errors">
              <mat-error *ngIf="f.username.errors.required"
                >Password is required</mat-error
              >
            </div>
          </mat-form-field>
          <mat-spinner
            [style.display]="showSpinner ? 'block' : 'none'"
          ></mat-spinner>
          <mat-error *ngIf="error" class="alert alert-danger">{{
            error
          }}</mat-error>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button type="submit" color="primary">Login</button>
        </mat-card-actions>
      </mat-card>
    </form>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
      }
      .login-card {
        width: 300px;
        margin: 50px;
      }
      mat-form-field {
        width: 100%;
      }
      .alert-danger {
        background-color: #f44336; /* Red */
      }
      .alert {
        padding: 20px;
        color: white;
        margin-bottom: 15px;
        text-align: center;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showSpinner = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.showSpinner = true;
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.error = '';
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          console.log(error);
          this.showSpinner = false;
        }
      );
  }
}
