import { Component } from '@angular/core';
import {delay, Observable} from "rxjs";
import {INumber} from "./number";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public one$: Observable<INumber>;
  public two$: Observable<INumber>;
  public three$: Observable<INumber>;

  constructor(
    public dataService: DataService
  ) {
    this.one$ = this.dataService.data$.pipe(delay(500));
    this.two$ = this.dataService.data$.pipe(delay(1000));
    this.three$ = this.dataService.data$.pipe(delay(1500));
  }
}
