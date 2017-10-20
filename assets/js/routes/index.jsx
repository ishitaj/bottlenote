import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import Login from './Login'
import React from 'react'
import browserHistory from 'react-router/lib/browserHistory'
import ResetPassword from './ResetPassword'
import Home from './Home'
import MainLayout from '../components/MainLayout'
import NoteList from './NoteList'
import NotFound from './NotFound'
function requireAuth(nextState, replace) {
	if (!localStorage.token) {
		replace({
			pathname: '/app/login',
			state: { nextPathname: '/app' }
		})
	}
}

const routes =
	<Router history={browserHistory}>
		<Route path="/app" component={MainLayout} >
			<IndexRoute component={Home} />
			<Route path='login' component={Login} />
			<Route path='notes' component={NoteList} onEnter={requireAuth} />
			<Route path='reset-password' component={ResetPassword} onEnter={requireAuth} />
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>

export default routes