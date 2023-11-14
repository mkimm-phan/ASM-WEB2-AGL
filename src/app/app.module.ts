import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { BlogComponent } from './blog/blog.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';

import { FormsModule } from '@angular/forms';
import { Ptbac1Component } from './ptbac1/ptbac1.component';
import { Cpn78Component } from './cpn78/cpn78.component';
import { BindingPropertyComponentComponent } from './binding-property-component/binding-property-component.component';
import { BindingClassComponentComponent } from './binding-class-component/binding-class-component.component';
import { BindingEventComponentComponent } from './binding-event-component/binding-event-component.component';
import { BindingStyleComponentComponent } from './binding-style-component/binding-style-component.component';
import { BindingTwoWayComponentComponent } from './binding-two-way-component/binding-two-way-component.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { Ptbac2Component } from './ptbac2/ptbac2.component';
import { ContactComponent } from './contact/contact.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ListProduct3Component } from './list-product3/list-product3.component';
import { ListProduct4Component } from './list-product4/list-product4.component';
import { ListProduct5Component } from './list-product5/list-product5.component';
import { ListProduct6Component } from './list-product6/list-product6.component';
import { ListProduct7Component } from './list-product7/list-product7.component';
import { HttpClientModule} from '@angular/common/http';
import { Exercise86JsonComponent } from './exercise86-json/exercise86-json.component';
import { Ex89ArrProductCatalogComponent } from './ex89-arr-product-catalog/ex89-arr-product-catalog.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { Exercise89Component } from './exercise89/exercise89.component';
import { Exercise90HttpserviceComponent } from './exercise90-httpservice/exercise90-httpservice.component';
import { ProductHttpService } from './product-http.service';
import { ServiceProductHttpComponent } from './service-product-http/service-product-http.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TestComponent,
    BlogComponent,
    ThirdComponent,
    FourComponent,
    Ptbac1Component,
    Cpn78Component,
    BindingPropertyComponentComponent,
    BindingClassComponentComponent,
    BindingEventComponentComponent,
    BindingStyleComponentComponent,
    BindingTwoWayComponentComponent,
    SlideShowComponent,
    Ptbac2Component,
    ContactComponent,
    ListProductComponent,
    ListProduct2Component,
    ListProduct3Component,
    ListProduct4Component,
    ListProduct5Component,
    ListProduct6Component,
    ListProduct7Component,
    Exercise86JsonComponent,
    Ex89ArrProductCatalogComponent,
    ServiceProductImageEventComponent,
    Exercise89Component,
    Exercise90HttpserviceComponent,
    ServiceProductHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
