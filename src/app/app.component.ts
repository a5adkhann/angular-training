import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HostListenerExampleComponent } from './host-listener-example/host-listener-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, UserProfileComponent, HostListenerExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FC Barcelona';
}
