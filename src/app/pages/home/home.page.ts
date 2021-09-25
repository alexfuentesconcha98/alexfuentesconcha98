import { Component } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user={
    usuario:null,
    password:null
  };

  constructor(private actRoute:ActivatedRoute,
              private router:Router) 
  {
    this.actRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user)
      }
      });

  }

}
