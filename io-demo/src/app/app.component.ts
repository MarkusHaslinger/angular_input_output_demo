import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ScoreAddComponent} from './score-add/score-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly URL = 'http://localhost:3000/scores';
  public title = 'io-demo';
  public scores: IScore[];
  @ViewChild('add')
  public addComponent!: ScoreAddComponent;

  constructor(private readonly http: HttpClient) {
    this.scores = [];
  }

  public ngOnInit(): void {
    this.loadScores();
  }

  private loadScores(): void {
    this.http.get<IScore[]>(this.URL)
      .subscribe(data => {
        this.scores = data;
      }, err => {
        console.log(err);
      });
  }

  public async handleScoreAdded(newScore: IScore): Promise<void> {
    await this.http.post(this.URL, newScore).toPromise();
    this.scores.push(newScore);
    // or (with additional server round trip): this.loadScores();
    this.addComponent.disableBtn();
  }
}

export interface IScore {
  name: string;
  points: number;
}
