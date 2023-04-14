import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  async onSubmit(form: FormGroup) {
    try {
      const res = await this.customerService.login(form.value);
      const token = await res.user.getIdToken();
      localStorage.setItem('token', token);
      this.tokenService.setToken(token || '');
      this.router.navigateByUrl('/home');
    } catch (err) {
      console.log(err);
    }
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
}
