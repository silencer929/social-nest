import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
// import ProfileForm from '../profile-forms/ProfileForm';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import create from '../profile-forms/CreateProfile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import Poster from '../post/PostForm';
import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = (props) => {
	return (
		<section className="container">
			<Alert />
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/profiles" component={Profiles} />
				<Route exact path="/profile/:id" component={Profile} />
				<Route exact path="/create" component={create} />
				<Route exact path="/poster" component={Poster} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute
					exact
					path="/add-experience"
					component={AddExperience}
				/>
				<PrivateRoute
					exact
					path="/add-experience"
					component={AddExperience}
				/>
				<PrivateRoute
					exact
					path="/add-education"
					component={AddEducation}
				/>
				<PrivateRoute exact path="/posts" component={Posts} />
				<PrivateRoute exact path="/posts/:id" component={Post} />
				<Route component={NotFound} />
			</Switch>
		</section>
	);
};

export default Routes;
