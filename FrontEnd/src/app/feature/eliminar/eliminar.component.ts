import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewEncapsulation} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {

  constructor( private http: HttpClient, private modal:NgbModal) { }

  @Input() space_id: number

  deleteSubmit() {
    this.http.delete(`http://127.0.0.1:5000/api/reservation/${this.space_id}`)
          .subscribe( ( resp: any ) => {
            console.log(resp);
    });
  }

  openSM(contenido: any){
    this.modal.open(contenido,{size:'sm'});
    console.log(this.space_id);
  }



}
