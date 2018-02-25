import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {PageHeaderComponent} from "./page-header/page-header.component";
import {PageSafetyComponent} from "./page-safety/page-safety.component";
import {PageTechComponent} from "./page-tech/page-tech.component";
import {PageFaqComponent} from "./page-faq/page-faq.component";
import {PageContactComponent} from "./page-contact/page-contact.component";
import {PageFooterComponent} from "./page-footer/page-footer.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageHeaderComponent,
    PageSafetyComponent,
    PageTechComponent,
    PageFaqComponent,
    PageContactComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
