import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AlarmComponent } from './alarm/alarm.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SizeComponent } from './size/size.component';
import { ShoeCardComponent } from './shoe-card/shoe-card.component';

const routes: Routes = [
  {
    path: 'size',
    component: SizeComponent
  },
  {
    path: 'search/:searchInput',
    component: SearchComponent
  },
  {
    path: 'alarm',
    component: AlarmComponent
  },
  {
    path: '**',
    redirectTo: 'size',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SizeComponent,
    AlarmComponent,
    SearchComponent,
    ShoeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
