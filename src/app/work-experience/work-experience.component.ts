import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})

export class WorkExperienceComponent {

workExperience: Array<any> = [];

constructor() { }

ngOnInit(): void {

  let work1 = {
    fecha : "2020-2021",
    ubicacion : "Apodaca, NL",
    puesto: "Software Intern",
    empresa: "Schneider Electric",
    logros : [
      {descripcion: "Comunicación trasnacional." }, 
      {descripcion: "Trabajo en movimiento de datos." },
    ]
  };
  let work2 = {
    fecha : "2021-2022",
    ubicacion : "San Pedro, NL",
    puesto: "QA Intern",
    empresa: "Epicor",
    logros : [
      { descripcion: "Manejo de Versiones" },
      {descripcion: "Testing" },
    ]
  };
  let work3 = {
    fecha : "2022-Actualidad",
    ubicacion : "Zapopan, Jal",
    puesto: "Software Development Intern",
    empresa: "Intel",
    logros : [
      { descripcion: "Creación de transactores." },
      {descripcion: "Mantenimiento a codigo." },
    ]
  };
this.workExperience.push(work1); 
this.workExperience.push(work2);
this.workExperience.push(work3);
}
}