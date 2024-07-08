import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspritComponent } from './esprit/esprit.component';
import { FormationsComponent } from './formations/formations.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'esprit',component:EspritComponent},
  { path: '', redirectTo: '/esprit', pathMatch: 'full' },
  {path:'formation',component:FormationsComponent},
  {path:'**',component:NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
