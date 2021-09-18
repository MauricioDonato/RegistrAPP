import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage implements OnInit {
  correo_v : string;
  validar_campo : number;
  constructor(private alertControl: AlertController, private router          : Router,
    private activatedRouter : ActivatedRoute,) { }

  ngOnInit() { 
  }
  async restablecer (correo: HTMLInputElement)
  {
    let email = correo.value;
    
    this.correo_v = "joshua1234@gmail.com";
    this.validar_campo = 0;
    
     if (email.trim() == "")
     {
       const alerta = await this.alertControl.create({
         header: "Falta información",
         message: "Por favor ingrese información en el campo email",
       });
       this.validar_campo = 1+ this.validar_campo;
       await alerta.present();
     };
     if (email.trim() != this.correo_v && this.validar_campo == 0 )
     {
       const alerta = await this.alertControl.create({
         header: "Correo no valido",
         message: "Por favor ingrese información correcta",
       });
       await alerta.present();
     };
     if (email.trim() == this.correo_v)
     {
      const alerta = await this.alertControl.create({
        header: "su contraseña de usuario es:",
        message: "1234",
      });
      await alerta.present();
       
     };
  }
}
