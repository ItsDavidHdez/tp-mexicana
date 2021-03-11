import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Services from "../pages/services";
import Contact from "../pages/Contact";
import Galery from "../pages/Galery";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/aboutUs";

const Dashboard = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={AboutUs} />
          <Route exact path="/experiencia" component={Experience} />
          <Route exact path="/servicios" component={Services} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/galeria" component={Galery} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Dashboard;
