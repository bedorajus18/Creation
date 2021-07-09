import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creer-livre',
  templateUrl: './creer-livre.component.html',
  styleUrls: ['./creer-livre.component.scss']
})
export class CreerLivreComponent implements OnInit {
  email:FormControl;
    form: FormGroup;

  constructor() { 
    
  this.email = new FormControl('',[Validators.required,Validators.minLength(4)]);
  this.form = new FormGroup({email :new FormControl('')});
  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    }

}
