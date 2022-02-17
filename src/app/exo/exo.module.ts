import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './components/exo-binding/exo-binding.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { SharedModule } from '../shared/shared.module';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { SortProduitPipe } from './pipes/filter-produit.pipe';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { ExoEnfantComponent } from './components/exo-parent/exo-enfant/exo-enfant.component';



@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoComponent,
    ExoChronoComponent,
    DisplayProductsComponent,
    SortProduitPipe,
    ExoParentComponent,
    ExoEnfantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
