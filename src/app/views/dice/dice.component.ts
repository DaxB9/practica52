import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { diceGame, obtainMeanOfObjects } from 'src/utilities/methods';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent{
  calculated = false;
  diceForm = new FormGroup({
    nmj: new FormControl('', Validators.required),
    pcj: new FormControl('', Validators.required),
    cj: new FormControl('', Validators.required),
    simulations: new FormControl('', Validators.required),
  });

  results: any[] = [];
  result: any = {};
  calcular() {
    this.results = diceGame(parseInt(this.diceForm.value.nmj!), parseInt(this.diceForm.value.cj!), parseInt(this.diceForm.value.pcj!), parseInt(this.diceForm.value.simulations!));
    this.result = obtainMeanOfObjects(this.results);
    this.calculated = true;

  }
}
