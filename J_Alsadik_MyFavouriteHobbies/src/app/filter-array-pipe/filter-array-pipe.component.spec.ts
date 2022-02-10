import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterArrayPipeComponent } from './filter-array-pipe.component';

describe('FilterArrayPipeComponent', () => {
  let component: FilterArrayPipeComponent;
  let fixture: ComponentFixture<FilterArrayPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterArrayPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterArrayPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
