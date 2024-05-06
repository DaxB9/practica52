import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { calculateMean, coinGame } from 'src/utilities/methods';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  coinForm = new FormGroup({
    nl: new FormControl('', Validators.required),
    gap: new FormControl('', Validators.required),
    cjue: new FormControl('', Validators.required),
    simulations: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }
  result:number[] = new Array();
  meanGta:number = 0;
  calculated:boolean = false;
  calcular(){
    this.calculated = true;
    this.result = coinGame(Number.parseInt(this.coinForm.value.nl!),Number.parseInt(this.coinForm.value.gap!),Number.parseInt(this.coinForm.value.cjue!),Number.parseInt(this.coinForm.value.simulations!));
    this.meanGta = calculateMean(this.result);
  }
}
