import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import {MdSidenavModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MdTabsModule} from '@angular/material';
import { MainComponent } from './main/main.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { UtilsService } from './utils.service';
import { AgentComponent } from './agent/agent.component';
import {MdButtonModule} from '@angular/material';
import { Collapse } from './collapse';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'lead-agent', pathMatch: 'full' },
  { path: 'lead-agent', component: MainComponent },
  { path: 'table', component: TableComponent },
  { path: 'agent', redirectTo: 'agent/1', pathMatch: 'full'},
  { path: 'agent/:id', component: AgentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AgentComponent,
    Collapse,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MdTabsModule,
    MdButtonModule,
    BrowserAnimationsModule,
    AmChartsModule,
    MdSidenavModule
  ],
  providers: [
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
