import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalListComponent } from './signal-list.component';

describe('SignalListComponent', () => {
  let component: SignalListComponent;
  let fixture: ComponentFixture<SignalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
