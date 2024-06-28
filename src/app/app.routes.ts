import { Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    canActivate: [authGuard],
    path: 'home',
    loadComponent: () =>
      import('@app/Components/home-layout/home-layout.component').then(
        (c) => c.HomeLayoutComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@app/Components/login/login.component').then(
        (c) => c.LoginComponent
      ),
    providers: [NgbActiveModal],
  },
  {
    canActivate: [authGuard],
    path: 'stock-list',
    loadComponent: () =>
      import('@app/Components/stock-list/stock-list.component').then(
        (c) => c.StockListComponent
      ),
  },
  {
    canActivate: [authGuard],
    path: 'stock-trade',
    loadComponent: () =>
      import('@app/Components/stock-trade/stock-trade.component').then(
        (c) => c.StockTradeComponent
      ),
  },
  {
    canActivate: [authGuard],
    path: 'trade-account',
    loadComponent: () =>
      import('@app/Components/trade-account/trade-account.component').then(
        (c) => c.TradeAccountComponent
      ),
  },
];
