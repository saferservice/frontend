import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroEspecialistaPipe } from './filtro-especialista.pipe';



@NgModule({
  declarations: [FiltroEspecialistaPipe],
  exports: [ FiltroEspecialistaPipe ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
