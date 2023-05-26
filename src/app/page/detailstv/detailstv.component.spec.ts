import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstvComponent } from './detailstv.component';

describe('DetailstvComponent', () => {
  let component: DetailstvComponent;
  let fixture: ComponentFixture<DetailstvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailstvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
