import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringsObserverComponent } from './strings-observer.component';

describe('StringsObserverComponent', () => {
  let component: StringsObserverComponent;
  let fixture: ComponentFixture<StringsObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringsObserverComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringsObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
