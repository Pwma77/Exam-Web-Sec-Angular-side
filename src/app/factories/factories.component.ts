import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.css']
})
export class FactoriesComponent implements OnInit {

  public mainFactory = "";

  public alternateFactory = "";

  public corporateAddress = "";

  public corporateEmail = "";

  public corporateTelephone = "";

  public rfc = "";

  factoriesForm!:FormGroup

  constructor( public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.factoriesForm = this.formBuilder.group({
      mainFactory:new FormControl('', Validators.required),
      alternateFactory:new FormControl('', Validators.required),
      corporateAddress:new FormControl('', Validators.required),
      corporateEmail:new FormControl('', Validators.required),
      corporateTelephone:new FormControl('', Validators.required),
      rfc:new FormControl('', Validators.required)
    })
  }

  get getControl(){
    return this.factoriesForm.controls;
  }

  SaveFactory(mainFactory, alternateFactory, corporateAddress, corporateEmail, corporateTelephone, rfc){
    alert("Main factory: " + mainFactory 
    + "\nAlternate factory: " + alternateFactory 
    + "\nCorporate address: " + corporateAddress
    + "\nCorporate email: " + corporateEmail
    + "\nCorporate telephone: " + corporateTelephone
    + "\nRFC: " + rfc);
  }

}
