import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute) {

    this._ActivatedRoute.params.subscribe( parametros => {
      console.log('Ruta Padre');
      console.log(parametros);


    });

   }

  ngOnInit() {
  }

}
