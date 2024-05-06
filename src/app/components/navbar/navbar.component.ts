import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subscriber: Subscription = new Subscription();
  constructor(private router: Router) { }
  route = 'home';
  ngOnInit(): void {
    this.subscriber = this.router.events.pipe().subscribe(() => {
      this.route = this.router.url.split('/')[1];
    });
  }
  navigate() {
    this.router.navigate([this.route]).then(() => {
      this.route = this.router.url.split('/')[1];
    });

  }

}
