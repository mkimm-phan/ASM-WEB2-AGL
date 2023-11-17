import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ptbac1Component } from './ptbac1/ptbac1.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { AboutComponent } from './about/about.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { Exercise90HttpserviceComponent } from './exercise90-httpservice/exercise90-httpservice.component';
import { LoginComponent } from './login/login.component';
import { ServiceProductHttpComponent } from './service-product-http/service-product-http.component';
import { ServiceProductHttpHandleErrorComponent } from './service-product-http-handle-error/service-product-http-handle-error.component';
import { Exercise92Component } from './exercise92/exercise92.component';
import { Exercise93Component } from './exercise93/exercise93.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  // Trang chủ
  {path: "", redirectTo:"/GioiThieu", pathMatch:"full"},

  {path: "ptbac1", component: Ptbac1Component},
  {path: "Slide", component: SlideShowComponent},
  {path: "GioiThieu", component: AboutComponent},
  {path: "Dssp", component: ServiceProductHttpComponent},
  {path: "product", component: ListProductComponent},
  {path: "product/:id", component: ProductDetailsComponent},
  {path: "Login", component: LoginComponent},
  {path: "Ex91", component: ServiceProductHttpHandleErrorComponent},
  {path: "Ex92", component: Exercise92Component},
  {path: "Ex93", component: Exercise93Component},
 

  // Page not found
  {path: "**", component: PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[Ptbac1Component, ProductDetailsComponent, SlideShowComponent, AboutComponent]