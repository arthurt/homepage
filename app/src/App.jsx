import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Segment} from 'semantic-ui-react'
import Sidebar from "./sidebar"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe"
import Sendwithus from "./pages/work/Sendwithus"
import Socoloco from "./pages/work/Socoloco"
import Tutela from "./pages/work/Tutela"
import Certn from "./pages/work/Certn"
import Distillery from "./pages/projects/Distillery"
import Moistlywet from "./pages/projects/Moistlywet"
import Triptracks from "./pages/projects/Triptracks"
import Whatisthisapictureof from "./pages/projects/Whatisthisapictureof";
import Recipes from "./pages/projects/Recipes";
import TripReport5040 from "./pages/trip_reports/5040";
import TripReport from "./pages/TripReport";
import warden_victoria from "./pages/trip_reports/2021_warden_an_victoria_peak.md";

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Segment id="pagecontent" basic align="center">
        <Routes>
          <Route exact path="/" element={AboutMe} />
          <Route exact path="/work/certn" element={<Certn/>} />
          <Route exact path="/work/tutela" element={<Tutela/>} />
          <Route exact path="/work/sendwithus" element={<Sendwithus/>} />
          <Route exact path="/work/socoloco" element={<Socoloco/>} />
          <Route exact path="/project/distillery" element={<Distillery/>} />
          <Route exact path="/project/moistlywet" element={<Moistlywet/>} />
          <Route exact path="/project/triptracks" element={<Triptracks/>} />
          <Route exact path="/project/recipes" element={<Recipes/>} />
          <Route exact path="/project/whatisthisapictureof" element={<Whatisthisapictureof/>} />
          <Route exact path="/trip_report/5040" element={<TripReport5040/>} />
          <Route exact path="/trip_report/warden_victoria" element={
              <TripReport markdown_filepath={warden_victoria}/>
            }/>
        </Routes>
      </Segment>
    </BrowserRouter>
  );
}

export default App;