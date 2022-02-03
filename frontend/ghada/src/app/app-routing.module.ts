import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaterielComponent} from './materiel/materiel.component';
import { ImmgComponent } from './immg/immg.component';
import { AdminConnexionComponent } from './admin-connexion/admin-connexion.component';
import { TechnicienAuthenComponent } from './technicien-authen/technicien-authen.component';
import { AdminsComponent } from './admins/admins.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { Technicien } from './model/technicien.model';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';
import { LogicielComponent } from './logiciel/logiciel.component';
import { AddLogicielComponent } from './add-logiciel/add-logiciel.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateTechnicienComponent } from './update-technicien/update-technicien.component';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';
import { UpdateLogicielComponent } from './update-logiciel/update-logiciel.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { AdminGuard } from './admin.guard';
import { AddAdminGuard } from './add-admin.guard';
import { UpdateAdminGuard } from './update-admin.guard';
import { AddTechnicienGuard } from './add-technicien.guard';
import { UpdateTechnicienGuard } from './update-technicien.guard';
import { AddMaterielGuard } from './add-materiel.guard';
import { UpdateMaterielGuard } from './update-materiel.guard';
import { AddLogicielGuard } from './add-logiciel.guard';
import { UpdateLogicielGuard } from './update-logiciel.guard';
import { AddFournisseurGuard } from './add-fournisseur.guard';
import { UpdateFournisseurGuard } from './update-fournisseur.guard';
import { DemanderInterventionComponent } from './add-demande/demander-intervention.component';
import { SuccesComponent } from './succes/succes.component';
import { DemandesComponent } from './demandes/demandes.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { UpdateInterventionComponent } from './update-intervention/update-intervention.component';
import { AddInterventionComponent } from './add-intervention/add-intervention.component';
import { InterventionsGuard } from './interventions.guard';
import { DemandesGuard } from './demandes.guard';
import { LogicielsGuard } from './logiciels.guard';
import { MaterielsGuard } from './materiels.guard';
import { TechniciensGuard } from './techniciens.guard';
import { FournisseursGuard } from './fournisseurs.guard';
import { UpdateInterventionGuard } from './update-intervention.guard';
import { AddInterventionGuard } from './add-intervention.guard';
import { HomeGuard } from './home.guard';
const routes: Routes = [
  {path:"materiel",component:MaterielComponent,canActivate:[MaterielsGuard]},
  {path:"",component:LoginComponent} ,
  {path:"admin-connexion",component:AdminConnexionComponent},
  {path:"technicien-authen",component:TechnicienAuthenComponent},
  {path:"admins",component:AdminsComponent,canActivate:[AdminGuard]},
  {path: "forbidden", component: ForbiddenComponent},
  {path:"add-admin",component:AddAdminComponent,canActivate:[AddAdminGuard]},
  {path:"technicien",component:TechnicienComponent,canActivate:[TechniciensGuard]},
  {path:"add-technicien",component:AddTechnicienComponent,canActivate:[AddTechnicienGuard]},
  {path:"logiciel",component:LogicielComponent,canActivate:[LogicielsGuard]},
  {path:"add-logiciel",component:AddLogicielComponent,canActivate:[AddLogicielGuard]},
  {path:"add-materiel",component:AddMaterielComponent,canActivate:[AddMaterielGuard]},
  {path:"fournisseur",component:FournisseurComponent,canActivate:[FournisseursGuard]},
  {path:"add-fournisseur",component:AddFournisseurComponent,canActivate:[AddFournisseurGuard]},
  {path:"update-admin/:id",component:UpdateAdminComponent,canActivate:[UpdateAdminGuard]},
  {path:"login",component:LoginComponent},
  {path:"update-technicien/:id",component:UpdateTechnicienComponent,canActivate:[UpdateTechnicienGuard]},
  {path:"update-materiel/:id",component:UpdateMaterielComponent,canActivate:[UpdateMaterielGuard]},
  {path:"update-logiciel/:id",component:UpdateLogicielComponent,canActivate:[UpdateLogicielGuard]},
  {path:"update-fournisseur/:id",component:UpdateFournisseurComponent,canActivate:[UpdateFournisseurGuard]},
  {path:"demander-intervention",component:DemanderInterventionComponent},
  {path:"succes",component:SuccesComponent},
  {path:"demandes",component:DemandesComponent,canActivate:[DemandesGuard]},
  {path:"interventions",component:InterventionsComponent,canActivate:[InterventionsGuard]},
  {path:"update-intervention/:id",component:UpdateInterventionComponent,canActivate:[UpdateInterventionGuard]},
  {path:"add-intervention",component:AddInterventionComponent,canActivate:[AddInterventionGuard]},
  {path:"immg",component:ImmgComponent,canActivate:[HomeGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
