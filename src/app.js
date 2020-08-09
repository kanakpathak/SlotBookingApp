import React, { useEffect } from "react";
import Slots from "./slots";
import UserForm from "./userForm/index";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { SlotProvider } from "./context/slotContext";

const App = () => {
  useEffect(() => {
    return () => {
      window.localStorage.clear();
    };
  }, []);

  return (
    <SlotProvider>
      <Switch>
        <Route exact path="/">
          <Slots />
        </Route>
        <Route path="/userform">
          <UserForm />
        </Route>
      </Switch>
    </SlotProvider>
  );
};

export default App;
