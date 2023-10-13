import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, shareReplay, switchMap} from "rxjs";
import {INumber} from "./number";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data$: Observable<INumber>;
  private reload$: BehaviorSubject<void> = new BehaviorSubject<void>(void 1);

  constructor(
    private http: HttpClient
  ) {
    this.data$ = this.reload$.pipe(
      switchMap(() => this.http.get<INumber>('https://api.rand.by/v1/integer?count=1')),
      shareReplay(1)
    );

  }

  public update(): void {
    this.reload$.next();
  }

}
