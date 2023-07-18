import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { DatosContratistaService } from '../services/datos-contratista.service';
import { ParamMap, Router } from '@angular/router';
import { SwiperModule,SwiperComponent } from 'swiper/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  saludo = 'Ejemplo de como hacer un codigo QR con QR Code Generator';
  tipoElemento = NgxQrcodeElementTypes.CANVAS;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  valor = 'https://vitac.epacartagena.gov.co/';
  validar = 'https://vitac.epacartagena.gov.co/contratistas/';
  planta= 'https://vitac.epacartagena.gov.co/planta/';
  titulo: any;
  urlBase: string;
  character: any =[];
  listado: any;

  constructor(private router: Router, private auth: AuthService,
    private contratista: DatosContratistaService, private barcodeScanner: BarcodeScanner) {
    this.urlBase=environment.urlBase;

  }

  ngOnInit() {
    this.urlBase = environment.urlBase;
    console.log(  this.urlBase);
    console.log(   this.valor);
 this.auth.getAuxiliaresDisponiblesMotos().subscribe(async res => {
   this.listado=res;
   console.log(res);

  });


}


createCode(toEncode) {
  this.createCode = toEncode;
}



}



