import { Component, computed, effect, inject, signal } from '@angular/core';
import { Account } from '@app/Models/account';
import { AuthService } from '@app/Services/auth.service';
import { TradeService } from '@app/Services/trade.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-trade-account',
  standalone: true,
  imports: [],
  templateUrl: './trade-account.component.html',
  styleUrl: './trade-account.component.css',
})
export class TradeAccountComponent {
  tradeService = inject(TradeService);
  authService = inject(AuthService);

  accounts = signal<Account[] | []>([], { equal: () => false });

  selectedTradeAccount = signal<Account | null>(null, { equal: () => false });

  constructor() {
    this.getAllAccounts();

    effect(() => {
      if (this.selectedTradeAccount()) {
        this.getTradeAccount();
        this.getAccountInstruments();
        this.getAccountOrders();
        this.getAccountOpenPositions();
      }
    });
  }

  getAllAccounts() {
    this.authService.getAllAcounts(this.authService.accessToken()!).subscribe({
      next: (res) => {
        this.authService.accounts.set(res.accounts);
        this.accounts.set(res.accounts);
      },
    });
  }

  selectAccount(event: any) {
    this.selectedTradeAccount.update(() => {
      const account = this.accounts().find(
        (account) => account.accNum == event.target.value
      );

      console.log(account);

      if (account) {
        return account;
      }

      return null;
    });
  }

  getTradeAccount() {
    this.tradeService
      .getTradeAccount(Number(this.selectedTradeAccount()?.accNum))
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
  }

  getAccountInstruments() {
    debugger;
    this.tradeService
      .getAccountInstruments(
        Number(this.selectedTradeAccount()?.accNum),
        Number(this.selectedTradeAccount()?.id)
      )
      .subscribe({
        next: (res) => {
          debugger;
          console.log(res);
        },
      });
  }

  getAccountOrders() {
    this.tradeService
      .getAccountOrders(
        Number(this.selectedTradeAccount()?.accNum),
        Number(this.selectedTradeAccount()?.id)
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
  }

  getAccountOpenPositions() {
    this.tradeService
      .getAccountOpenPositions(
        Number(this.selectedTradeAccount()?.accNum),
        Number(this.selectedTradeAccount()?.id)
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
  }
}
