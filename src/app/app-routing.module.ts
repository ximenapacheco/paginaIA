import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FalconComponent } from './falcon/falcon.component';
import { Falcon9Component } from './falcon9/falcon9.component';
import { HeavyComponent } from './heavy/heavy.component';
import { StarshipComponent } from './starship/starship.component';
import { SpacexComponent } from './spacex/spacex.component';

const routes: Routes = [
  {path: "cohetes/falcon", component: FalconComponent},
  {path: "cohetes/falcon9", component: Falcon9Component},
  {path: "cohetes/heavy", component: HeavyComponent},
  {path: "cohetes/starship", component: StarshipComponent},
  {path: "spacex", component: SpacexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
