import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewEncapsulation} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ActualizarComponent {

  constructor( private http: HttpClient, private modal:NgbModal) { }

  @Input() espacio: any = {}

  openSM(contenido: any){
    this.modal.open(contenido,{size:'sm'});
  }



  acceptSubmit() {
      this.http.put('http://127.0.0.1:5000/api/reservation', this.espacio)
          .subscribe( ( resp: any ) => {
            console.log(resp);

    });
  }
}