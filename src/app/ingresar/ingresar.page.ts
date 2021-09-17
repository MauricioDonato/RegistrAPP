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

  constructor(private alertControl: AlertController) { }
  ngOnInit() {
  }
  async validar_ingreso (nombre: HTMLInputElement, contrasena: HTMLInputElement)
  {
    let name = nombre.value;
    let password = contrasena.value;
    this.nombre_v = "joshua1234";
    this.contrasena_v = "1234";
     if (name.trim() == "")
     {
       const alerta = await this.alertControl.create({
         header: "Falta información",
         message: "Por favor ingrese información en el campo nombre",
       });
       await alerta.present();
     }

     else if (password.trim() == "")
     {
       const alerta = await this.alertControl.create({
         header: "Falta información",
         message: "Por favor ingrese información en el campo contraseña"
       });
       await alerta.present();
     };
     if (name.trim() != this.nombre_v)
     {
       const alerta = await this.alertControl.create({
         header: "Nombre incorrecto",
         message: "Por favor ingrese información correcta",
       });
       await alerta.present();
     }
     else if (password.trim() != this.contrasena_v)
     {
       const alerta = await this.alertControl.create({
         header: "Contraseña incorrecta",
         message: "Por favor ingrese información correcta"
       });
       await alerta.present();
     };
  }
  

}
