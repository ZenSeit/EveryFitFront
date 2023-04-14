import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss'],
})
export class RegisterCustomerComponent implements OnInit {
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
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  async onSubmit(form: FormGroup) {
    try {
      const res = await this.customerService.register(form.value);
      const token = await res?.user.getIdToken();
      if (token) {
        const customerToRegister: Customer = {
          name: form.value.name,
          lastName: form.value.lastName,
          email: form.value.email,
          address: form.value.address,
        };

        this.customerService
          .createUserDB(customerToRegister)
          .subscribe((obs) => {
            alert('customer registered');
            console.log(obs);
          });

        localStorage.setItem('token', token);
        setTimeout(() => {
          this.tokenService.setToken(localStorage.getItem('token') || '');
          this.router.navigateByUrl('/home');
        }, 500);
      }

      //const token = await res
      //localStorage.setItem('token', token);
      //this.tokenService.setToken(token || '');
      //this.router.navigateByUrl('/home');
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

  get name() {
    return this.myForm.get('name');
  }

  get lastName() {
    return this.myForm.get('lastName');
  }

  get address() {
    return this.myForm.get('address');
  }
}
