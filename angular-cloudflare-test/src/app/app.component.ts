import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-cloudflare-test';
  supabaseUrl = environment.supabaseUrl;

  ngOnInit(): void {
    console.log('Supabase URL:', environment.supabaseUrl);
  }
}

