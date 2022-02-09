import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterielComponent } from './materiel/materiel.component';
import{FormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ImmgComponent } from './immg/immg.component';
import { AdminConnexionComponent } from './admin-connexion/admin-connexion.component';
import {ROUTES, Routes} from "@angular/router";

import { NavbarComponent } from './navbar/navbar.component';
import { TechnicienAuthenComponent } from './technicien-authen/technicien-authen.component';
import { AdminsComponent } from './admins/admins.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { LogicielComponent } from './logiciel/logiciel.component';
import { AddLogicielComponent } from './add-logiciel/add-logiciel.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateTechnicienComponent } from './update-technicien/update-technicien.component';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';
import { UpdateLogicielComponent } from './update-logiciel/update-logiciel.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { DemanderInterventionComponent } from './add-demande/demander-intervention.component';
import { SuccesComponent } from './succes/succes.component';
import { DemandesComponent } from './demandes/demandes.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { AddInterventionComponent } from './add-intervention/add-intervention.component';
import { UpdateInterventionComponent } from './update-intervention/update-intervention.component';
import { UpdateDemandeComponent } from './update-demande/update-demande.component';

//const appRoutes:Routes = [{path:'materiels',component:'MaterielsComponent'}];
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ImmgComponent,
    AdminConnexionComponent,
    NavbarComponent,
    TechnicienAuthenComponent,
    AdminsComponent,
    AddAdminComponent,
    TechnicienComponent,
    AddTechnicienComponent,
    MaterielComponent,
    AddMaterielComponent,
    LogicielComponent,
    AddLogicielComponent,
    FournisseurComponent,
    AddFournisseurComponent,
    UpdateAdminComponent,
    LoginComponent,
    ForbiddenComponent,
    UpdateTechnicienComponent,
    UpdateMaterielComponent,
    UpdateLogicielComponent,
    UpdateFournisseurComponent,
    DemanderInterventionComponent,
    SuccesComponent,
    DemandesComponent,
    InterventionsComponent,
    AddInterventionComponent,
    UpdateInterventionComponent,
    UpdateDemandeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
