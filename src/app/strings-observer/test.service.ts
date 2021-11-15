import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { ChangeDataError, StringsModel } from './strings-observer.types';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  // Возвращает текущие данные. На старте обе строки не пустые.
  data$: BehaviorSubject<StringsModel> = new BehaviorSubject<StringsModel>({
    one: '256',
    two: '100',
  });

  private changeDataSuccessful: boolean = true;

  // Действие по изменению данных. Функция через раз возвращает ошибку (+ задержка 3 сек).
  // Отсутствие `error` — операция успешна.
  changeData(newData: Partial<StringsModel>): Observable<ChangeDataError> {
    this.changeDataSuccessful = !this.changeDataSuccessful;

    const result: ChangeDataError = this.changeDataSuccessful ? {} : { error: 'Some error' };
    return of<ChangeDataError>(result)
      .pipe(
        delay<ChangeDataError>(CHANGE_DATA_DELAY),
        tap((): void => {
          if (this.changeDataSuccessful) {
            this.data$.next({
              ...this.data$.value,
              ...newData,
            })
          }
        }),
      );
  }
}


const CHANGE_DATA_DELAY: number = 3000;
