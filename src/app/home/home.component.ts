import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private api:ApiService) { }

  ngOnInit(): void {
  }

  postMethod(){
    let nameToSend = {
      "firstname":"Paul",
      "lastname":"Salas"
    }

    this.api.postApi(nameToSend).subscribe((response) => {
      let _response;
      _response = response;
      alert(_response.fullname);
    })
  }

  getMethod(){
    this.api.getApi().subscribe((response) => {
      let _response;
      _response = response;
      alert(_response.greetings);
    })
  }

}
