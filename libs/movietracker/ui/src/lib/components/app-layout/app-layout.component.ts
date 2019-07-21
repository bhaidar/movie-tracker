import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@mt/api-services';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  constructor(
    private readonly auth: AuthenticationService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
