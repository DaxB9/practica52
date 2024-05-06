import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { articleSold, obtainMeanOfObjects } from 'src/utilities/methods';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  results: any[] = [];
  calculated = false;
  means = { gneta: 0, caTotal: 0 };
  articleForm = new FormGroup({
    simulations: new FormControl(''),
    nmh: new FormControl(''),
    cfd: new FormControl(''),
    cua: new FormControl(''),
    puv: new FormControl(''),

  });

  onSubmit() {
    const data = this.articleForm.value;
    if (data) {
      this.results = articleSold(parseInt(data.simulations!), parseInt(data.nmh!), parseInt(data.cfd!), parseInt(data.cua!), parseInt(data.puv!));
      this.means = obtainMeanOfObjects(this.results);
      this.calculated = true;

    }
  }
}
