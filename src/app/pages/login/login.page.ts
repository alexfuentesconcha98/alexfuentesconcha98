import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavigationExtras } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    usuario:null,
    password:null
  };

  constructor(private router:Router) { }
  irAlHome()
  {
    this.router.navigate(['home/']);
  }

  enviarDatos(user:any)
  {
    let navigationExtras: NavigationExtras = {
      state: {user: this.user}};
      this.router.navigate(['/home'],navigationExtras);
      
  }
  
  ngOnInit() {
  }

}
