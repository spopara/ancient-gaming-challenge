import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxListComponent } from './components/box-list/box-list.component';
import { HeaderComponent } from './components/header/header.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent, BoxListComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
