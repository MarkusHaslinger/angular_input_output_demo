import {Component, EventEmitter, Output} from '@angular/core';
import {IScore} from '../app.component';

@Component({
  selector: 'app-score-add',
  templateUrl: './score-add.component.html',
  styleUrls: ['./score-add.component.css']
})
export class ScoreAddComponent {

  public name: string;
  public score: number | null;
  @Output()
  public scoreAdded: EventEmitter<IScore>;
  private btnDisabled: boolean;

  constructor() {
    this.score = null;
    this.name = '';
    this.scoreAdded = new EventEmitter<IScore>();
    this.btnDisabled = false;
  }

  public handleSave(): void {
    // user input validation (name not null, score > 0,....)
    if (this.score === null){
      return;
    }
    this.scoreAdded.emit({
      name: this.name,
      points: this.score
    });
    this.name = '';
    this.score = null;
  }

  public disableBtn(): void {
    this.btnDisabled = true;
  }

  public get disableSave(): boolean {
    return this.btnDisabled;
  }
}
