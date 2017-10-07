import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: ` 'UsuarioNuevoComponent' `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute) {

        this._ActivatedRoute.parent.params.subscribe( parametros => {
          console.log('Ruta hijo');
          console.log('usuario nuevo');
          console.log(parametros);


        });

       }

  ngOnInit() {
  }

}
