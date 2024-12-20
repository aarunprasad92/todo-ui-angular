import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [],
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  username: string = '';

  constructor(private route: ActivatedRoute) {
    this.username = this.route.snapshot.params['username'];
  }
}
