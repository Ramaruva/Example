import React from 'react'
import { Route, Switch } from 'react-router';
import { About } from './About'
import { Contact } from './Contact'
import { Login } from './Login';
import { Navbar } from './Navbar'
import { Task } from './Task'
import { TaskPage } from './TaskPage';
function Routes ()
{
    return (
        <>
         <Navbar/>
         <Switch>
             <Route exact path="/About">
               <About/>
             </Route>
             <Route path="/Contact">
               <Contact/>
             </Route>
             <Route exact path="/Task">
                 <Task/>
             </Route>
             <Route path="/Task/:id">
                  <TaskPage/>
             </Route>
             <Route exact path="/Login">
                 <Login />
             </Route>
             <Route>
                 <h1>Page Not found</h1>
             </Route>
         </Switch>
        </>
    )
}
export {Routes}