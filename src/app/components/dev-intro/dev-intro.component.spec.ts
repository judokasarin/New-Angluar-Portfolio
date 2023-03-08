import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevIntroComponent } from './dev-intro.component';

describe('DevIntroComponent', () => {
  let component: DevIntroComponent;
  let fixture: ComponentFixture<DevIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DevIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
