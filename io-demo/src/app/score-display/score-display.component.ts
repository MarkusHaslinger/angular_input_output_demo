import {Component, Input} from '@angular/core';
import {IScore} from '../app.component';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent {

  @Input()
  public score!: IScore;

  constructor() { }

}
