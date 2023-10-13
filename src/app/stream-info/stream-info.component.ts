import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {INumber} from "../number";

@Component({
  selector: 'app-stream-info[stream]',
  templateUrl: './stream-info.component.html',
  styleUrls: ['./stream-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamInfoComponent {
  @Input() public stream!: Observable<INumber>;
  @Input() public title: string = 'Первый';
}
