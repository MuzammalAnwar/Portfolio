import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleworkComponent } from './singlework.component';

describe('SingleworkComponent', () => {
  let component: SingleworkComponent;
  let fixture: ComponentFixture<SingleworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
