import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "./components/pages/Authentication";
import Register from "./components/pages/Authentication/Register";
import ForgotPassword from "./components/pages/Authentication/ForgotPassword";
import Error404 from "./components/pages/Authentication/Error-404";

import AdminDashboard from "./components/pages/Dashboard/AdminDashboard";
import ReferaFriend from "./components/pages/Oxyloans/Lender/ReferaFriend";
import Writetous from "./components/pages/Oxyloans/Lender/Writetous";
import Whatapplog from "./components/pages/Authentication/Whatapplog";
import Profile from "./components/pages/Blog/Profile";
import Program1 from "./components/pages/Dashboard/Program1";
import MyApplicationProgress from "./components/pages/Dashboard/MyApplicationProgress/MyApplicationProgress";
import MyApplicationUni from "./components/pages/Dashboard/MyApplicationProgress/MyApplicationUni";
import Applicationpage from "./components/pages/Dashboard/Applicationpage";
import ViewChat from "./components/pages/Dashboard/ViewChat/ViewChat";
import Quickapply from "./components/Quickapply";
import Normalsearch from "./components/pages/Normalsearch";
import Addvancesearch from "./components/pages/Reusecomponent/Addvancesearch/AddvanceSearch";
import ApplicationStatus from "./components/pages/Reusecomponent/ApplicationStatus";
import ProfileTab from "./components/pages/Reusecomponent/ProfileTab/ProfileTab";
import ChatUnivercity from "./components/pages/Reusecomponent/Chatsupport/ChatUnivercity";
import Quicksearch from "./components/pages/Reusecomponent/quicksearch/Quicksearch";
import Buildsop from "./components/pages/Dashboard/Applicationpage/Buildsop/Buildsop";
import BuildFilter from "./components/pages/Dashboard/Applicationpage/Buildsop/BuildFilter";
import TabFilter from "./components/pages/Dashboard/Applicationpage/Buildsop/TabFilter";
import SopTab from "./components/pages/Dashboard/Applicationpage/Buildsop/SopTab";
import UniversityChatCard from "./components/pages/Reusecomponent/UniversityChatCard/UniversityChatCard";
import ChatSupport from "./components/pages/Reusecomponent/ChatSupportUnivercity/ChatSupport";
import Adminstudentview from "./components/pages/Admin/Adminstudentview";
import Waitingforapproval from "./components/pages/Admin/Waitingforapproval";



const appcontainer = () => {
  return (
    <Router Router basename="/">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/profiletab" component={ProfileTab} />
        <Route path="/error404" component={Error404} />
        <Route path="/dashboard" component={AdminDashboard} />
        <Route path="/viewchat"  component={ViewChat} />   
        <Route path="/quicksearch"  component={Quicksearch} /> 
        <Route path="/addvancesearch1"  component={Addvancesearch} />
        <Route path="/buildFilter"  component={BuildFilter} /> 
                <Route path="/addvancesearch1"  component={Addvancesearch} />
                <Route path="/build"  component={Buildsop} />
                <Route path="/soptab"  component={SopTab} />
                <Route path="/universitychatcard"  component={UniversityChatCard} />
                <Route path="/tabfilter"  component={TabFilter} />
        {/* `` */}
        <Route path="/waitingforapproval"  component={Waitingforapproval} /> 
        <Route path="/chatunivercity" component={ChatUnivercity} />  
        <Route path="/profile" component={ProfileTab} />   
        {/* <Route path="/profile" component={Profile} />      */}
        <Route path="/applicationpage1" component={Applicationpage} />   
        <Route path="/adminstudentview" component={Adminstudentview} />  
        <Route path="/applicationstatus" component={ApplicationStatus} />         
        <Route path="/writetous" component={Writetous} />       
        <Route path="/programfinder" component={Program1} />
        <Route path="/chatSupport" component={ChatSupport} />
        <Route path="/myapplicationprogress" component={MyApplicationProgress} />
        <Route path="/normalsearch" component={Normalsearch} />
        <Route path="/referaFriend" component={ReferaFriend} />
        
        {/* <Route path="/myreferalStatus" component={MyreferalStatus} /> */}
        {/* <Route path="/myEarnings" component={MyEarnings} /> */}

        <Route
          path="/myapplicationuni"
          component={MyApplicationUni}
        />
        <Route
          path="/quickapply"
          component={Quickapply}
        />
        <Route path="/whatapplogin" component={Whatapplog} />
        {/* 
        oxyroutes End */}
      </Switch>
    </Router>
  );
};

export default appcontainer;
