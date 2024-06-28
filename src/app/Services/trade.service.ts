import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { OrderModel } from '@app/Models/order';
import { Observable } from 'rxjs';

enum BarType {
  ASK = 'ASK',
  BID = 'BID',
  TRADE = 'TRADE',
}

@Injectable({
  providedIn: 'root',
})
export class TradeService {
  token = signal<string | null>(null, { equal: () => false });
  locale = 'en';
  from: Date = new Date();
  to: Date = new Date();
  constructor() {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      this.token.set(accessToken);
    }
  }

  http = inject(HttpClient);

  getTradeAccount(accNum: number): Observable<any> {
    debugger;
    return this.http.get<any>(
      'https://demo.tradelocker.com/backend-api/trade/accounts',
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getAccountExcutions(accNum: number, accId: number): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/accounts/${accId}/excutions`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getAccountInstruments(accNum: number, accId: number): Observable<any> {
    debugger;
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/accounts/${accId}/instruments?locale=${this.locale}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getAccountOrders(
    accNum: number,
    accId: number,
    dateFrom?: string,
    dateTo?: string,
    instrumentId?: number
  ): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/accounts/${accId}/orders?dateFrom=${this.from}&dateTo=${this.to}&instrumentId=${instrumentId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getAccountOpenPositions(accNum: number, accId: number): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/accounts/${accId}/positions`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getCurrentAccountState(accNum: number, accId: number): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/accounts/${accId}/state`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getInstruments(
    accNum: number,
    routeId: number,
    instrumentId: number
  ): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/instruments/${instrumentId}?routeId=${routeId}&locale=${this.locale}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getSessions(accNum: number, sessionId: number): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/sessions/${sessionId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getSessionStatus(sessionStatusId: number, accNum: number): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/sessionStatuses/${sessionStatusId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getDailyBar(
    accNum: number,
    routeId: number,
    barType: BarType,
    tradableInstrumentId: number
  ): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/dailyBar?routeId=${routeId}&barType=${BarType[barType]}&tradableInstrumentId=${tradableInstrumentId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getMarketDepth(
    accNum: number,
    routeId: number,
    tradableInstrumentId: number
  ): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/depth?routeId=${routeId}&tradableInstrumentId=${tradableInstrumentId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  getCurrentInstrumentPrices(
    accNum: number,
    routeId: number,
    tradableInstrumentId: number
  ): Observable<any> {
    return this.http.get<any>(
      `https://demo.tradelocker.com/backend-api/trade/quotes?routeId=${routeId}&tradableInstrumentId=${tradableInstrumentId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
      }
    );
  }

  placeNewOrder(
    accId: number,
    accNum: number,
    orderData: OrderModel
  ): Observable<any> {
    return this.http.post(
      `https://demo.tradelocker.com/backend-api/trade/accounts/${accId}/orders`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token()}`,
          accNum: `${accNum}`,
        },
        body: orderData,
      }
    );
  }
}
