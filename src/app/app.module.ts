import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MATERIAL_MODULES } from './material-imports';
import { COMPONENTS } from './components-imports';
import { AlumnoCardComponent } from './components/admin/alumnos-admin/alumno-card/alumno-card.component';
import { MateriasTablaComponent } from './components/admin/materias-admin/materias-tabla/materias-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    AlumnoCardComponent,
    MateriasTablaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    NoopAnimationsModule,
    MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }