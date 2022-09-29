import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { asyncScheduler, scheduled } from 'rxjs';

@Component({
  template: '',
})
class NonTransitiveServicesComponent {
  constructor(private httpClient: HttpClient) {}
}

@Injectable({ providedIn: 'root' })
class LoaderService {
  constructor(private httpClient: HttpClient) {}
}

@Component({
  template: '',
})
class TransitiveServicesComponent {
  constructor(private loaderService: LoaderService) {}
}

describe('Newsletter Component', () => {
  it('succeeds to mount', () => {
    cy.mount(NonTransitiveServicesComponent, {
      providers: [{ provide: HttpClient, useValue: null }],
    });
  });

  it('fails to mount', () => {
    cy.mount(TransitiveServicesComponent, {
      providers: [{ provide: HttpClient, useValue: null }],
    });
  });
});
