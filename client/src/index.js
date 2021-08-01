import ReactDOM from "react-dom";
import React from "react";
import ControlBar from "./components/navbar/controlbar";
import { Container } from "@material-ui/core";
import JobList from "./components/jobtable/jobList";
import "./index.scss";

function Main() {
  return (
    <div>
      <Container>
        <ControlBar></ControlBar>
        <JobList></JobList>
      </Container>
    </div>
  );
}
ReactDOM.render(<Main></Main>, document.getElementById("reactbody"));
