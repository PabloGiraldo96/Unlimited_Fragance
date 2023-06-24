import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocionesComponent } from './lociones/lociones.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
            {path: '', component: HomeComponent, pathMatch: 'full'}, 
            {path: 'lociones', component: LocionesComponent}, 
            {path: 'clientes', component: ClientesComponent},   
            {path: 'footer', component: FooterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
