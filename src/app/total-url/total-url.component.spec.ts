import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUrlComponent } from './total-url.component';

describe('TotalUrlComponent', () => {
  let component: TotalUrlComponent;
  let fixture: ComponentFixture<TotalUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
