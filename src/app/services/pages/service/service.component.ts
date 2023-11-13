import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs';

import { SERVICES, Service } from './service.config';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit, OnDestroy {
  readonly SVC: typeof SERVICES = SERVICES;
  service!: Service;

  subscription?: Subscription;

  constructor(private readonly _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe((params: Params) => {
      this.service = this.SVC[params['serviceId']];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
