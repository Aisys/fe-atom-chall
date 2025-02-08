import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Route, Router, RouterEvent } from '@angular/router';
import { filter, Observable, subscribeOn, Subscriber, Subscription } from 'rxjs';
import { PATH_USER_TASKS, PATH_DEV_NOTES } from './pages.routing.module';

@Component({
  selector: 'app-login',
  templateUrl: 'pages.component.html',
  styleUrls: ['pages.component.scss']
})

export class PagesComponent implements AfterViewInit, OnInit, OnDestroy {

  PATH_USER_TASKS = PATH_USER_TASKS;
  PATH_DEV_NOTES = PATH_DEV_NOTES;

  currentPath: any = '';

  private routerEventsSubscription: Subscription = new Subscription();


  constructor(
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.currentPath = this.router.url.split('/').pop();
    this.routerEventsSubscription =
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
          if (event) {
            this.currentPath = event.url.split('/').pop();

          }
        })
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }


  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }


}
