import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsDemoComponent } from './charts-demo.component';

describe('ChartsDemoComponent', () => {
  let component: ChartsDemoComponent;
  let fixture: ComponentFixture<ChartsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
