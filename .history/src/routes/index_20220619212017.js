import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import routesConfig from '~/config/routes';
import config from '~/config';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.searchProfile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
