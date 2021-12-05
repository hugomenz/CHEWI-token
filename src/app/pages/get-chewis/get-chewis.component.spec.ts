import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChewisComponent } from './get-chewis.component';

describe('GetChewisComponent', () => {
  let component: GetChewisComponent;
  let fixture: ComponentFixture<GetChewisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetChewisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetChewisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
