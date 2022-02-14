import "@material-tailwind/react/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SettingLayout from "./components/SettingLayout";

import Characters from "./router/Characters";
import CharactersCreate from "./router/CharactersCreate";
import Home from "./router/Home";
import Signup from "./router/Signup";
import SignupEmail from "./router/SignupEmail";
import Login from "./router/Login";
import IdInquiry from "./router/IdInquiry";
import IdInquiryResult from "./router/IdInquiryResult";
import PwInquiry from "./router/PwInquiry";
import PwInquiryResult from "./router/PwInquiryResult";

import Alarm from "./router/Alarm";
import SettingsCharacter from "./router/SettingsCharacter";
import SettingsAccount from "./router/SettingsAccout";
import SettingsAlarm from "./router/SettingsAlarm";
import SettingsHelp from "./router/SettingsHelp";
import Achievement from "./router/Achievement";
import Profile from "./router/Profile";
import Follow from "./router/Follow";
import CharactersUpdate from "./router/CharactersUpdate";
import Search from "./router/Search";
import SearchCharacters from "./router/SearchCharacters";
import SearchStorages from "./router/SearchStorages";
import SearchTags from "./router/SearchTags";
import SearchTagsDetail from "./router/SearchTagsDetail";
import SearchTexts from "./router/SearchTexts";
import Storages from "./router/Storages";
import StoragesDetail from "./router/StoragesDetail";

import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./router/NotFound";
import { Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  let token = localStorage.getItem("idToken")
    ? JSON.parse(localStorage.getItem("idToken")).token
    : false;
  let authed = Boolean(token);
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/accounts/login", state: { from: props.location } }} />
        )
      }
    />
  );
}

function App() {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Switch>
            {/* Layout 필요 없는 주소 */}
            <Route exact path="/accounts/signup" component={Signup} />
            <Route path="/accounts/signup/email" component={SignupEmail} />
            <Route path="/accounts/login" component={Login} />
            <Route exact path="/accounts/id_inquiry" component={IdInquiry} />
            <Route path="/accounts/id_inquiry/result" component={IdInquiryResult} />
            <Route exact path="/accounts/pw_inquiry" component={PwInquiry} />
            <Route exact path="/accounts/pw_inquiry/result" component={PwInquiryResult} />
            <Route exact path="/characters/select" component={Characters} />
            <PrivateRoute exact path="/characters/create" component={CharactersCreate} />
            <PrivateRoute exact path="/characters/update" component={CharactersUpdate} />

            {/* SettingLayout 필요한 주소 */}
            <Route path="/settings/:path?" exact>
              <SettingLayout>
                <Switch>
                  <PrivateRoute exact path="/settings/character" component={SettingsCharacter} />
                  <PrivateRoute exact path="/settings/account" component={SettingsAccount} />
                  <PrivateRoute exact path="/settings/alarm" component={SettingsAlarm} />
                  <PrivateRoute exact path="/settings/help" component={SettingsHelp} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </SettingLayout>
            </Route>

            {/* Layout 필요한 주소 */}
            <Route>
              <Layout>
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/" component={Home} />
                  <PrivateRoute exact path="/alarm/center" component={Alarm} />
                  <PrivateRoute exact path="/search" component={Search} />
                  <PrivateRoute exact path="/search/characters" component={SearchCharacters} />
                  <PrivateRoute exact path="/search/storages" component={SearchStorages} />
                  <PrivateRoute exact path="/search/tags" component={SearchTags} />
                  <PrivateRoute exact path="/search/tag" component={SearchTagsDetail} />
                  <PrivateRoute exact path="/search/texts" component={SearchTexts} />
                  {/* characters, login, signup같은 닉네임이 있다면 문제 발생 가능 주의 */}
                  <PrivateRoute exact path="/:nickname" component={Profile} />
                  <PrivateRoute exact path="/:nickname/follow" component={Follow} />
                  <PrivateRoute exact path="/:nickname/achievement" component={Achievement} />
                  <PrivateRoute exact path="/:nickname/storages" component={Storages} />
                  <PrivateRoute
                    exact
                    path="/:nickname/storages/:storage_seq"
                    component={StoragesDetail}
                  />
                  <Route path="*" component={NotFound} />
                </Switch>
              </Layout>
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
