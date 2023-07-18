import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginI } from 'modelos/login.interface';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  public nombre: string;
  public pass: string;

  constructor(private navctrl  :NavController, private router: Router, private auth: AuthService,public fb: FormBuilder,public alertController:AlertController) {

    this.loginForm= this.fb.group({

      name: new FormControl('',Validators.required),
      pass: new FormControl('',Validators.required),

    });

  }

  ngOnInit() {

}
async onLogin(){


  //this.loginForm.get(<formConrolName>).setValue('123');
  //this.loginForm.controls.pass.setValue(this.pass);

  console.log(this.loginForm.value);


  if(this.loginForm.invalid){
   const alert = await this.alertController.create({

     header: 'Datos incompletos o usuario incorrecto',

     message: 'llenar todos los datos.',
     buttons: ['Aceptar']
   });

   await alert.present();
   return;


  }



  this.auth.login(this.loginForm.value);


}


}
