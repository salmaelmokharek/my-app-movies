import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageqComponent } from './imageq.component';

describe('ImageqComponent', () => {
  let component: ImageqComponent;
  let fixture: ComponentFixture<ImageqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
