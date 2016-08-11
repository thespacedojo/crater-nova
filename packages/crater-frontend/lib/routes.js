import Telescope from 'meteor/nova:lib';

import CrPostsHome from './components/CrPostsHome.jsx';

Telescope.routes.indexRoute = { name: "posts.list", component: CrPostsHome };