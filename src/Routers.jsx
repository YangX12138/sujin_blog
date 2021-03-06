import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from './components/common/Loading/Loading';

const Home = React.lazy(() => import('./containers/Home/Home'));
const Archive = React.lazy(() => import('./containers/Archive/Archive'))
const Blog = React.lazy(() => import('./containers/Blog/Blog'));
const Article = React.lazy(() => import('./containers/Article/Article'));
const Links = React.lazy(() => import('./containers/Links/Links'));
const NotFound = React.lazy(() => import('./components/common/NotFound/NotFound'));

function Routers() {
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                <Route path="/blog">
                    <Blog/>
                </Route>
                <Route path="/article/:id" component={Article} />>
                <Route path="/links" component={Links} />
                <Route path="/page/:page" component={Home} />
                <Route path="/archive" component={Archive} />
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/notfound" component={NotFound} />
                <Redirect to="/notfound" />
            </Switch>
        </Suspense>
    )
}

export default Routers;