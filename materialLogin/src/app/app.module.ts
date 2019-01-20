import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

// Component Imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProspectDetailsComponent } from './prospect-details/prospect-details.component';
import { ProspectSummaryComponent } from './prospect-summary/prospect-summary.component';
import { SmoLandingComponent } from './smo-landing/smo-landing.component';
import { ProspectSummaryLimitedComponent } from './prospect-summary-limited/prospect-summary-limited.component';
import { ProspectHeaderComponent } from './prospect-header/prospect-header.component';
import { SupplierTrendsComponent } from './supplier-trends/supplier-trends.component';
import { CriticalSupplierDossierComponent } from './critical-supplier-dossier/critical-supplier-dossier.component';
import { SavingsPotentialComponent } from './savings-potential/savings-potential.component';
import { ImGuidedSupplierEnablementComponent } from './im-guided-supplier-enablement/im-guided-supplier-enablement.component';
import { ProspectMatchRateComponent } from './prospect-match-rate/prospect-match-rate.component'
import { ErrorComponent } from './error/error.component';

// Services Imports
import { UserLoginService } from './user-login.service';
import { IndustryTypeService } from './industry-type.service';
import { ProspectService } from './prospect.service';
import { TaskService } from './task.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'prospectDetails',
    component: ProspectDetailsComponent
  },
  {
    path: 'prospectSummary',
    component: ProspectSummaryComponent,
    children: [
      {
        path: 'criticalSupplierDossier',
        component: CriticalSupplierDossierComponent
      },
      {
        path: 'supplierTrends',
        component: SupplierTrendsComponent
      },
      {
        path: 'savingsPotential',
        component: SavingsPotentialComponent
      }
    ]
  },
  // {
  //   path: 'smoLanding',
  //   component: SmoLandingComponent,
  //   children: [
  //     {
  //       path: 'supplierEnablement',
  //       component: ImGuidedSupplierEnablementComponent
  //     },
  //     {
  //       path: 'prospectMatch',
  //       component: ProspectMatchRateComponent
  //     }
  //   ]
  // },
  {
    path: 'prospectSummaryLimited',
    component: ProspectSummaryLimitedComponent,
    children: [
      {
        path: 'criticalSupplierDossier',
        component: CriticalSupplierDossierComponent
      },
      {
        path: 'supplierTrends',
        component: SupplierTrendsComponent
      },
      {
        path: 'savingsPotential',
        component: SavingsPotentialComponent
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProspectDetailsComponent,
    ProspectSummaryComponent,
    SmoLandingComponent,
    ProspectSummaryLimitedComponent,
    ProspectHeaderComponent,
    SupplierTrendsComponent,
    CriticalSupplierDossierComponent,
    SavingsPotentialComponent,
    ImGuidedSupplierEnablementComponent,
    ProspectMatchRateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [
    UserLoginService,
    IndustryTypeService,
    ProspectService,
    TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
