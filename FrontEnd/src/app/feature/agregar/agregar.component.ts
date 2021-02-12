import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewEncapsulation} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AgregarComponent {

  
  constructor( private http: HttpClient, private modal:NgbModal) { }
  
  @Input() espacio: any = {}

  payedValue: any;
  dateIn: any;
  dateOut: any;

  listaIn = [];
  listaOut = [];
  
  
  openSM(contenido: any){
    this.modal.open(contenido,{size:'sm'});
  }
  
  async acceptSubmit() {
    this.listaIn = this.dateIn.split('-');
    this.dateIn = (this.listaIn[2] + "/" + this.listaIn[1] + "/" + this.listaIn[0]);
    this.listaOut = this.dateOut.split('-');
    this.dateOut = (this.listaOut[2] + "/" + this.listaOut[1] + "/" + this.listaOut[0]);
    
    this.espacio["payed_value"] = this.payedValue
    this.espacio["date_in"] = this.dateIn
    this.espacio["date_out"] = this.dateOut
    this.espacio["status"] = true
    this.http.post('http://127.0.0.1:5000/api/reservation', this.espacio)
          .subscribe( ( resp: any ) => {
              console.log(resp); 
      });
  }


  }
  
  
  
  