import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  espacios: any = {}

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/api/reservation')
    .subscribe( ( resp: any ) => {
      console.log(resp);
      this.espacios = resp;
    });
  }

  trm: number

  // getSpaces() {
  //   this.http.get('http://127.0.0.1:5000/api/reservation')
  //         .subscribe( ( resp: any ) => {
  //           console.log(resp);
  //           this.espacios = resp;
  //   });

  // }

  getTrm() {
    this.http.get('https://www.datos.gov.co/resource/32sa-8pi3.json?$limit=1')
          .subscribe( ( resp: any ) => {
            console.log(resp);
            this.trm = resp[0]["valor"];
    });

  }




  // updateReservation() {
  //   this.http.put('http://127.0.0.1:5000/api/reservation')
  //         .subscribe( ( resp: any ) => {
  //           console.log(resp);
  //           this.espacios = resp;
  //   });

  // }

 

  // }




}
