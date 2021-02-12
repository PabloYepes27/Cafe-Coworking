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

  lista = []
  
  
  openSM(contenido: any){
    this.modal.open(contenido,{size:'sm'});
  }
  
  async acceptSubmit() {
    console.log("payedValue");
    console.log(this.payedValue);
    console.log("dateIn");
    this.lista = this.dateIn.split('-');
    console.log(this.dateIn.split('-'));

    console.log("dateOut");
    console.log(this.dateOut);
    // this.nuevoEspacio["payed_value"] = this.payedValue
    // this.nuevoEspacio["date_in"] = this.dateIn
    // this.nuevoEspacio["date_out"] = this.dateOut
    // this.nuevoEspacio["status"] = true
    // this.http.post('http://127.0.0.1:5000/api/reservation', this.nuevoEspacio)
    //       .subscribe( ( resp: any ) => {
      //         console.log(resp); 
      // });
      
      
    }
    
    getSpaces() {
      this.http.get('http://127.0.0.1:5000/api/reservation')
      .subscribe( ( resp: any ) => {
        console.log("GET");
        console.log(resp);
      });
      
    }
    






  }
  
  
  
  