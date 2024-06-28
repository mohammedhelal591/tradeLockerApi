import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTradeComponent } from './stock-trade.component';

describe('StockTradeComponent', () => {
  let component: StockTradeComponent;
  let fixture: ComponentFixture<StockTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
