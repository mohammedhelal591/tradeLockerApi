import { Component } from '@angular/core';
import { HomeLayoutComponent } from './Components/home-layout/home-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tradeLockerApi';
}
