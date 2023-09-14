import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { FormsModule } from '@angular/forms';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { EmiwithgraphComponent } from './emiwithgraph/emiwithgraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassbindingComponent,
    EmicalculatorComponent,
    EmiwithgraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
