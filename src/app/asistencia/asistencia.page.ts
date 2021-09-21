import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  nombre : string;
  lista : [];
  listado = [
    { id : '1',
      nombre: 'Joshua Ramirez',
    }];

  constructor() { }

  ngOnInit() {
  }

}
