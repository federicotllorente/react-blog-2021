import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Public Routes Pages
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Posts from '../pages/Posts';
import PostPage from '../pages/PostPage';
import Category from '../pages/Category';

// Admin Routes Pages
import Dashboard from '../pages/Dashboard';
import PostsAdmin from '../pages/PostsAdmin';
import Pages from '../pages/Pages';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Contact from '../pages/Contact';

// Error 404 Page
import NotFound from '../pages/NotFound';

const App = (): JSX.Element => (
    <BrowserRouter>
        <Switch>
            {/* Public Routes */}
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/:postPath" component={PostPage} />
            <Route exact path="/posts/:categoryPath" component={Category} />
            {/* Admin Routes */}
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/posts" component={PostsAdmin} />
            <Route exact path="/admin/pages" component={Pages} />
            <Route exact path="/admin/profile" component={Profile} />
            <Route exact path="/admin/settings" component={Settings} />
            <Route exact path="/admin/contact" component={Contact} />
            {/* Not Found: Error 404 */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;