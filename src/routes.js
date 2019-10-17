import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Screen/Dashboard/Default'));

// PASTAS
const Homologar = React.lazy(() => import('./Screen/Pastas/Homologacao'));
const Pasta = React.lazy(() => import('./Screen/Pastas/Pasta'));
const Pastas = React.lazy(() => import('./Screen/Pastas/Pastas'));

const Admin = React.lazy(() => import('./Screen/Administradores/Index' ));

const Perfil = React.lazy(() => import('./Screen/Perfil/Index'));
const Users = React.lazy(() => import('./Screen/Users/Index'));






const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardDefault },
    { path: '/pastas', exact: true, name: 'Pastas', component: Pastas },
    { path: '/pastas/homologar', exact: true, name: 'Homologar', component: Homologar },
    { path: '/pastas/:id_pasta', exact: true, name: 'Pasta', component: Pasta },
    { path: '/admin' , exact: true, name: 'Admin', component: Admin },
    { path: '/perfil' , exact: true, name: 'Perfil', component: Perfil },
    { path: '/usuarios' , exact: true, name: 'Users', component: Users },
    
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;