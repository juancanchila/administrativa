import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { LoginI } from 'modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from 'modelos/response.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Datosdelcontrato } from 'modelos/datosdelcontrato.interface';
import { AuthService } from 'src/app/services/auth.service';
import { map, tap } from 'rxjs/operators';

import { AlertController, MenuController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatosContratistaService {
  idTiendaSeleccionada: string;
  tokencsrf: any;
  b64: string;
  constructor(private http2: HttpClient, private router: Router, private menucontrol: MenuController, private auth: AuthService) { }



  seleccionarProductosTiendas() {

    this.auth.getToken();
    this.tokencsrf = localStorage.getItem("csrf_token");
    console.log(this.tokencsrf, 'aqui new csrf');
    this.b64 = localStorage.getItem("base64").toString();
    console.log(this.b64, 'aqui b64');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Authorization': 'Basic ' + this.b64,
      'X-CSRF-Token': this.tokencsrf });
    console.log(headers, 'aqui header en act prodcuto tiendas');
    let url = 'https://vitac.epacartagena.gov.co/productos/1?_format=json';
    console.log(url);
    return this.http2.get(url, { headers: headers }).pipe(map((res: any) => {
                 return res;
        })
      )


    //this.router.navigate(['/rutas']);

  }


}
