// app.routing.ts

import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";

const appRoutes : Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "header", component: HeaderComponent, pathMatch: "full" },
  { path: "work-experience", component: WorkExperienceComponent, pathMatch: "full" }
];

export const routing = RouterModule.forRoot(appRoutes);