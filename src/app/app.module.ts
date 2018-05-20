import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ng-color-picker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BootstrapComponent } from './theme/bootstrap/bootstrap.component';
import { ThemeControlComponent } from './theme/bootstrap/theme-control/theme-control.component';
import { ThemeComponent } from './theme/bootstrap/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BootstrapComponent,
    ThemeControlComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
