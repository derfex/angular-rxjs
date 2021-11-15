import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ChangeDataError, StringsModel } from './strings-observer.types';
import { TestService } from './test.service';

@Component({
  selector: 'app-strings-observer',
  styleUrls: ['./strings-observer.component.less'],
  templateUrl: './strings-observer.component.html',
})
export class StringsObserverComponent implements OnDestroy {
  data$: Observable<StringsModel> = this.testService.data$;
  error: string = CHANGE_DATA_WITHOUT_ERROR;
  loading: boolean = false;
  subscriptions: Subscription = new Subscription();

  constructor(
    private readonly testService: TestService,
  ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  changeOne(): void {
    this.changeData({
      one: createRandomString(),
    });
  }

  changeTwo(): void {
    this.changeData({
      two: createRandomString(),
    });
  }

  private changeData(newData: Partial<StringsModel>): void {
    this.loading = true;
    this.subscriptions.add(
      this.testService.changeData(newData)
        .subscribe((error: ChangeDataError): void => {
          this.error = error.error || CHANGE_DATA_WITHOUT_ERROR;
          this.loading = false;
        }),
    );
  }
}


const CHANGE_DATA_WITHOUT_ERROR: string = '—';

function createRandomString(): string {
  return '' + Math.floor(Math.random() * 900 + 100);
}
