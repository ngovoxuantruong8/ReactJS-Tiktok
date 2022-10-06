/* Layout */
import { HeaderOnly } from '~/components/Layout'

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publishRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly }
]

const privateRoutes = [

]

export { publishRoutes, privateRoutes }