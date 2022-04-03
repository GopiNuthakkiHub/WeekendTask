import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootnavbarComponent } from './bootnavbar.component';

describe('BootnavbarComponent', () => {
  let component: BootnavbarComponent;
  let fixture: ComponentFixture<BootnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
