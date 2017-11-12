import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Menu from './Menu';
import Catalog from '../appViews/Catalog';
import MyPosts from '../appViews/MyPosts';
import SubmitPost from '../appViews/SubmitPost';
import GuestHome from './../auth/GuestHome';
import PostDetails from '../appViews/PostDetails';
import EditPost from '../appViews/EditPost'


let ViewComponentWrapper = () =>{
    return(
        <div>
        <Menu/>
        <Switch>
            <Route exact path='/' component={GuestHome}/>
            <Route  path='/catalog' component={Catalog}/>
            <Route  path='/submit' component={SubmitPost}/>
            <Route  path='/myPosts' component={MyPosts}/>
            <Route path='/details/:id' component={PostDetails}/>
            <Route path='/edit/:id' component={EditPost}/>
        </Switch>
        </div>
    )
};

export default ViewComponentWrapper