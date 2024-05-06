import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { dpf } from 'src/utilities/methods';


@Component({
  selector: 'app-dpf',
  templateUrl: './dpf.component.html',
  styleUrls: ['./dpf.component.css']
})
export class DpfComponent {

  result = 0;
  dpfForm = new FormGroup({
    k: new FormControl(''),
    i: new FormControl(''),
    years: new FormControl('')
  });


  calcular(){
    const values = {... this.dpfForm.value};
    if (values.k && values.i &&values.years) {
      const result = dpf(Number.parseFloat(values.k), Number.parseFloat(values.i),  Number.parseInt(values.years));
      this.result = result;
    }  
  }
}
