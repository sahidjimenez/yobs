import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router :Router
  ) { }

  ngOnInit() {
  }

  onClickGoogleLogin(){
    this.authService.loginGoogle()
    .then((res) =>{
      //console.log(res);
      this.router.navigate(['/feed']);
    }).catch(err => console.log(err.message));
  }
}
