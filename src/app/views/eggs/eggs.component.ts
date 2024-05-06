import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { eggsProblem, obtainMeanOfObjects } from 'src/utilities/methods';

@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.css']
})
export class EggsComponent {
  calculated = false;
  results: any[] = [];
  means = { gneta: 0, nhue: 0, npv: 0, npm: 0, nhuer: 0 };
  sugarForm = new FormGroup({
    simulations: new FormControl(''),
    nmd: new FormControl(''),
    pvuh: new FormControl(''),
    pvup: new FormControl(''),
  });

  onSubmit() {
    this.calculated = false;
    const data = this.sugarForm.value;
    if (data) {
      this.results = eggsProblem(parseInt(data.simulations!), parseInt(data.nmd!),
        parseInt(data.pvuh!), parseInt(data.pvup!));
      this.means = obtainMeanOfObjects(this.results);
      this.calculated = true;
    }
  }
}
