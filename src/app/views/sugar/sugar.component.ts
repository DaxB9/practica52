import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { sugarProblem, obtainMeanOfObjects } from 'src/utilities/methods';

@Component({
  selector: 'app-sugar',
  templateUrl: './sugar.component.html',
  styleUrls: ['./sugar.component.css']
})
export class SugarComponent {

  means = { gneta: 0, dins: 0, ct: 0 };
  results: any[] = [];
  calculated = false;
  sugarForm = new FormGroup({
    simulations: new FormControl(''),
    nmd: new FormControl(''),
    bod: new FormControl(''),
    creord: new FormControl(''),
    cuinv: new FormControl(''),
    cua: new FormControl(''),
    pvu: new FormControl('')
  });

  async onSubmit() {
    this.calculated = false;
    const data = this.sugarForm.value;
    this.results = await sugarProblem(parseInt(data.simulations!), parseInt(data.nmd!),
      parseInt(data.bod!), parseInt(data.creord!),
      parseInt(data.cuinv!), parseInt(data.cua!),
      parseInt(data.pvu!))
    this.means = obtainMeanOfObjects(this.results);
    this.calculated = true;


  }
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));