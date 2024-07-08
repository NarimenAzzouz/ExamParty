import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspritComponent } from './esprit.component';

describe('EspritComponent', () => {
  let component: EspritComponent;
  let fixture: ComponentFixture<EspritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspritComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
