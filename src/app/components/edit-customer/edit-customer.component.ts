import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {

  customer: Customer | undefined;

  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private tokenService: TokenService,
    private jwtAuth: JwtHelperService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      //email: [this.customer?.email, [Validators.required, Validators.email]],
      email: [
        {
          value: this.customer?.email,
          disabled: true,
        },
      ],
      name: [{
        value: this.customer?.name,
        disabled: true,
      },],
      lastName: [{
        value: this.customer?.lastName,
        disabled: true,
      }],
      address: [{value: this.customer?.address,
        disabled: true,
      }],
    });
    this.updateForm();
  }

  onSubmit(form: FormGroup) {

    if(this.customer){
      this.customer.address = form.value.address;
    }
    this.customerService.createUserDB(this.customer).subscribe((data) => {
      alert('Customer updated')
      this.updateForm();
    });

  }

  updateForm() {
    this.tokenService.loadToken();
    this.tokenService.getToken().subscribe((token) => {
      if (token) {
        this.customerService
          .getCustomerByEmail(this.jwtAuth.decodeToken(token).email)
          .subscribe((customer) => {
            this.customer = customer;
            this.myForm.patchValue({
              name: customer?.name,
              email: customer?.email,
              lastName: customer?.lastName,
              address: customer?.address,
            });
          });
      }
    });
  }

  get email() {
    return this.myForm.get('email');
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
