import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {
  contrasena_v : string;
  nombre_v : string;
  validar_campo : number;
  constructor(private alertControl: AlertController,
    private router          : Router,
    private activatedRouter : ActivatedRoute,) { }
  ngOnInit() {
  }
  async validar_ingreso (nombre: HTMLInputElement, contrasena: HTMLInputElement)
  {
    let name = nombre.value;
    let password = contrasena.value;
    this.nombre_v = "joshua1234";
    this.contrasena_v = "1234";
    this.validar_campo = 0;
     if (name.trim() == "")
     {
       const alerta = await this.alertControl.create({
         header: "Falta información",
         message: "Por favor ingrese información en el campo nombre",
       });
       await alerta.present();
       this.validar_campo = this.validar_campo + 1;
     }

     else if (password.trim() == "" && this.validar_campo == 0 )
     {
       const alerta = await this.alertControl.create({
         header: "Falta información",
         message: "Por favor ingrese información en el campo contraseña"
       });
       await alerta.present();
       this.validar_campo = this.validar_campo + 1;
     };
     if (name.trim() != this.nombre_v && this.validar_campo == 0 )
     {
       const alerta = await this.alertControl.create({
         header: "Nombre incorrecto",
         message: "Por favor ingrese información correcta",
       });
       await alerta.present();
       this.validar_campo = this.validar_campo + 1;
     }
     else if (password.trim() != this.contrasena_v && this.validar_campo == 0 )
     {
       const alerta = await this.alertControl.create({
         header: "Contraseña incorrecta",
         message: "Por favor ingrese información correcta"
       });
       await alerta.present();
       this.validar_campo = this.validar_campo + 1;
     };
     if (this.validar_campo == 0)
     {
      this.router.navigateByUrl('/asistencia')
       
     }
     
     ;
  }
  

}
