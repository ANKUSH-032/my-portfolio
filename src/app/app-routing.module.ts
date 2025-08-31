import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioInfoComponent } from './bio-info/bio-info.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
const routes: Routes = [
  { path: '', component: PortfolioComponent },            // your portfolio (default)
  { path: 'profile/:username', component: BioInfoComponent }, // your bio page
  { path: '**', redirectTo: '' } // fallback
];



@NgModule({
 imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'   // 👈 important
    })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
