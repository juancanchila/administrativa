import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { LoginI } from 'modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from 'modelos/response.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Datosdelcontrato } from 'modelos/datosdelcontrato.interface';
import { map, tap } from 'rxjs/operators';
import { AlertController, MenuController, NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  public currentUser: BehaviorSubject<ResponseI>;
  public anonimustoken1: string;
  public tokencsrf2: string;
  public statusError: any;
  public csrf: string;
  public base64: string;


  public url = 'https://vitac.epacartagena.gov.co/user/login?_format=json';
  urlexit = 'https://vitac.epacartagena.gov.co/user/logout=';
  urlregister = 'https://vitac.epacartagena.gov.co/user/register?_format=hal_json';
  urlSesionAnonima: 'https://vitac.epacartagena.gov.co/session/token';

  authSubject = new BehaviorSubject(false);
  confirmexit: any;
  nameuser: any;
  anonimustoken: any;
  urlAuxName: string;

  constructor(private http: HttpClient, private router: Router, private menucontrol: MenuController) { }

  login(user: LoginI) {

    this.base64 = btoa(user.name + ':' + user.pass);


    const headers = new HttpHeaders().set('Content-Type', 'application/hal+json');
    this.http.post<ResponseI>(this.url, user, { headers: headers })
      .subscribe(data => {
        this.router.navigateByUrl('/home');
        this.csrf = data['csrf_token'];
        this.nameuser = data['current_user']['name'];
        console.log(data);
        console.log(this.csrf);
        localStorage.setItem('csrf_token', this.csrf);
        localStorage.setItem('base64', this.base64);
        localStorage.setItem('user_id', '5');
        console.log(this.base64);
        this.tokencsrf2 = localStorage.getItem('csrf_token');

        console.log(this.tokencsrf2);


      }, error => {
        console.log(error);
        console.log(error.status);
        this.statusError = error.status;
        // eslint-disable-next-line eqeqeq
        if (this.statusError == 400) {
          alert('Usuario o contraseña incorrectos');

        }
      });

  }

  logout() {
    console.log('esto');
    this.token = '';
    localStorage.removeItem('ACCES_TOKEN');
    this.router.navigateByUrl('/login');

  }
  logout2() {

    this.router.navigateByUrl('/login');
    this.menucontrol.close();
    const exit = this.urlexit + localStorage.getItem('EXPIRES_IN');
    this.http.get(exit, {})
      .subscribe(data => {
        console.log(data);
      }, error => {
        this.confirmexit = error.error.text;
        //console.log(error);
        console.log(error.error.text);
        console.log(error.status);
      });

  }
  public saveToken(token: string, csrftoken: string, logout_token: string, name: string): void {

    localStorage.setItem('ACCES_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', logout_token);
    localStorage.setItem('NAME', name);
    localStorage.setItem('csrf-token', csrftoken);
  }


  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('ACCES_TOKEN')
    }
    return this.token;
  }
  public getUser(name: LoginI): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/hal+json');
    headers.set('Accept', 'application/hal+json');
    headers.set('Authorization', 'Bearer ' + this.anonimustoken);
    console.log('esto');
    console.log(name);
    this.http.post<ResponseI>('https://vitac.epacartagena.gov.co/perfil-de-usuario-json', name, { headers: headers }).subscribe(data2 => {
      console.log(data2);
    }, error2 => {
      this.anonimustoken = error2.error.text;
      console.log(error2);
      console.log(error2.error.text);
      console.log(error2.status);
    });




  }


  getAuxiliaresDisponiblesMotos() {
    console.log('Test');
    const auxB64 = localStorage.getItem('base64');
    const usr = localStorage.getItem('user_id');
    console.log(usr);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + auxB64,
    });

    console.log('Basic ' + auxB64);

   // this.urlAuxName = 'https://vitac.epacartagena.gov.co/tesok/' + usr + '/';
   this.urlAuxName = 'https://vitac.epacartagena.gov.co/perfil-de-usuario-json';
    return this.http.get(this.urlAuxName, { headers: headers })
      .pipe(
        map((res: any) => {
          console.log(res,'estoy en data');
          return res;

        })
      )

  }


  getCiudad() {
    this.urlAuxName = 'https://vitac.epacartagena.gov.co/contratistas';
    return this.http.get(this.urlAuxName,).pipe(map((res: any) =>
    { return res; }) );

  }



}
