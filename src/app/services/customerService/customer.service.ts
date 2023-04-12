import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { hostLocal } from 'src/environments/settingsToStart';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private auth:Auth,
    private http:HttpClient) { }

  register({email,password,name,lastName,address}:any){
    return createUserWithEmailAndPassword(this.auth, email, password)
    .then(
      (res)=>{
        console.log(res);
         const customerToRegister:Customer = {
          name,
          lastName,
          email,
          address
         }
         return this.createUserDB(customerToRegister).subscribe(
          obs => alert("customer registered")
         )
                
      }
    ).catch(erro => console.log(erro.message));
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  createUserDB(customer:any):Observable<any>{
    return this.http.post(hostLocal.host+`/customers`,customer)
  }

  getCustomerByEmail(email:string):Observable<any>{
    return this.http.get(hostLocal.host+`/customers/${email}`)
  }

}
