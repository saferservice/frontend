import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  { path: 'registro-paso2', loadChildren: './pages/registro-paso2/registro-paso2.module#RegistroPaso2PageModule' },
  { path: 'registro-paso3', loadChildren: './pages/registro-paso3/registro-paso3.module#RegistroPaso3PageModule' },
  { path: 'home-cliente', loadChildren: './pages/home-cliente/home-cliente.module#HomeClientePageModule' },
  { path: 'mostrar-especialistas', loadChildren: './pages/mostrar-especialistas/mostrar-especialistas.module#MostrarEspecialistasPageModule'},
  { path: 'detalle-especialista', loadChildren: './pages/detalle-especialista/detalle-especialista.module#DetalleEspecialistaPageModule' },
  { path: 'perfil-cliente', loadChildren: './pages/perfil-cliente/perfil-cliente.module#PerfilClientePageModule' },
  { path: 'terminos-condiciones', loadChildren: './pages/terminos-condiciones/terminos-condiciones.module#TerminosCondicionesPageModule' },
  { path: 'sugerencias-reclamos', loadChildren: './pages/sugerencias-reclamos/sugerencias-reclamos.module#SugerenciasReclamosPageModule' },
  { path: 'nosotros', loadChildren: './pages/nosotros/nosotros.module#NosotrosPageModule' },
  { path: 'resumen', loadChildren: './pages/resumen/resumen.module#ResumenPageModule' },
  { path: 'comprobar-trabajo', loadChildren: './pages/comprobar-trabajo/comprobar-trabajo.module#ComprobarTrabajoPageModule' },
  { path: 'pago-especialista', loadChildren: './pages/pago-especialista/pago-especialista.module#PagoEspecialistaPageModule' },
  { path: 'evaluar-especialista', loadChildren: './pages/evaluar-especialista/evaluar-especialista.module#EvaluarEspecialistaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
