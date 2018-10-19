import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './admin/pages/login/login.component';
import { RegisterComponent } from './admin/pages/register/register.component';
import { RecoverComponent } from './admin/pages/recover/recover.component';
import { LockComponent } from './admin/pages/lock/lock.component';
import { MaintenanceComponent } from './admin/pages/maintenance/maintenance.component';
import { Error404Component } from './admin/pages/error404/error404.component';
import { Error500Component } from './admin/pages/error500/error500.component';
import { LandingComponent } from './landing/landing.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'admin/home', pathMatch: 'full' },
            { path: 'admin/home', loadChildren: './admin/home/home.module#HomeModule' },
            { path: 'admin/dashboard', loadChildren: './admin/dashboard/dashboard.module#DashboardModule' },
            { path: 'admin/widgets', loadChildren: './admin/widgets/widgets.module#WidgetsModule' },
            { path: 'admin/elements', loadChildren: './admin/elements/elements.module#ElementsModule' },
            { path: 'admin/forms', loadChildren: './admin/forms/forms.module#FormsModule' },
            { path: 'admin/charts', loadChildren: './admin/charts/charts.module#ChartsModule' },
            { path: 'admin/tables', loadChildren: './admin/tables/tables.module#TablesModule' },
            { path: 'admin/maps', loadChildren: './admin/maps/maps.module#MapsModule' },
            { path: 'admin/blog', loadChildren: './admin/blog/blog.module#BlogModule' },
            { path: 'admin/ecommerce', loadChildren: './admin/ecommerce/ecommerce.module#EcommerceModule' },
            { path: 'admin/extras', loadChildren: './admin/extras/extras.module#ExtrasModule' }
        ]
    },

    // Not lazy-loaded routes
    { path: 'admin/login', component: LoginComponent },
    { path: 'admin/register', component: RegisterComponent },
    { path: 'admin/recover', component: RecoverComponent },
    { path: 'admin/lock', component: LockComponent },
    { path: 'admin/maintenance', component: MaintenanceComponent },
    { path: 'admin/404', component: Error404Component },
    { path: 'admin/500', component: Error500Component },
    { path: 'landing', component: LandingComponent },

    // Not found
    { path: '**', redirectTo: 'admin/home' }

];
