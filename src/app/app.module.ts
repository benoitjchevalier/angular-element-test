import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ZzButtonComponent } from './zz-button/zz-button.component';
import { ZzButtonnComponent } from './zz-buttonn/zz-buttonn.component';

@NgModule({
  declarations: [
    AppComponent,
    ZzButtonComponent,
    ZzButtonnComponent
  ],
  entryComponents: [
    ZzButtonComponent,
    ZzButtonnComponent
  ],
  imports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(ZzButtonComponent, { injector: this.injector }),
    el2 = createCustomElement(ZzButtonnComponent, { injector: this.injector });
    customElements.define('zz-button', el);
    customElements.define('zz-buttonn', el2);
  }
}
