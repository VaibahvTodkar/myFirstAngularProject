import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsetinputComponent } from './getsetinput.component';

describe('GetsetinputComponent', () => {
  let component: GetsetinputComponent;
  let fixture: ComponentFixture<GetsetinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetsetinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetsetinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
