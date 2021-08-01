import React from "react";
import { Paper } from "@material-ui/core/";

const style = {
  display: "flex",
  alignItems: "Center",
  height: "100px",
  marginTop: "10px",
  marginBottom: "10px",
};

export default function JobCard(props) {
  return (
    <Paper elevation={3} style={style}>
      <div>{props.logo}</div>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.location}</div>
      <div>{props.weather}</div>
    </Paper>
  );
}
