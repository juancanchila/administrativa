import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public nombre:string;
  constructor(private router: Router, public auth: AuthService) {}
  ngOnInit() {

  }

 logout(){
   this.auth.logout2();
 }

}

