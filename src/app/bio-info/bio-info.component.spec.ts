import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioInfoComponent } from './bio-info.component';

describe('BioInfoComponent', () => {
  let component: BioInfoComponent;
  let fixture: ComponentFixture<BioInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
