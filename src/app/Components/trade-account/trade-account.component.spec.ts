import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAccountComponent } from './trade-account.component';

describe('TradeAccountComponent', () => {
  let component: TradeAccountComponent;
  let fixture: ComponentFixture<TradeAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
