import { Component, OnInit } from '@angular/core';
import { AppService } from "../services/app.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = {
    id: 0,
    nombre: "",
    apellido: "",
    dni: "",
    sexo: "M",
    foto: "pordefecto.png",
  }

  constructor(private appService: AppService) {

  }

  ngOnInit() {
  }

  insert() {
    this.appService.insert(this.form)
      .then(() => alert("El usuario ha sido dado de alta."))
      .catch((error) => console.log(error));
  }
}