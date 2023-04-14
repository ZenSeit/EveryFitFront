import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {


  showLogin:boolean = true;
  showText:String = "Don't have an account? Register here";

  constructor() { }

  onClickSlideToggle(){
    this.showLogin = !this.showLogin;
    if(this.showLogin){
      this.showText = "Don't have an account? Register here";
    }else{
      this.showText = "Already have an account? Login here";
    }
  }


}
