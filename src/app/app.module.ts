import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ZzButtonComponent } from './zz-button/zz-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ZzButtonComponent
  ],
  entryComponents: [
    ZzButtonComponent
  ],
  imports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(ZzButtonComponent, { injector: this.injector });
    customElements.define('zz-button', el);
  }
}
