import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})
export class ManufacturersComponent implements OnInit {

  public manufacturer = "";

  public email = "";

  public password = "";

  manufacturerForm!:FormGroup

  constructor( public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.manufacturerForm = this.formBuilder.group({
      manufacturer:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required)
    })
  }

  //to validate
  get getControl(){
    return this.manufacturerForm.controls;
  }

  SaveManufacturer(manufacturer, email, password){
    alert("Manufacturer: " + manufacturer 
    + "\nEmail: " + email
    + "\nPassword (just to test): " + password);
  }

}
