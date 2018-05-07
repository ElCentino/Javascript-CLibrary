
import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/skidaylist'

window.React = React;

render(
  <SkiDayList days={
    [
      {
        resort: "Tel Aviv Suite",
        date: new Date('1/3/2017'),
        powder: true,
        backcountry: false
      },
      {
        resort: "German Consulate",
        date: new Date('12/3/2017'),
        powder: false,
        backcountry: true
      },
      {
        resort: "White House",
        date: new Date('21/3/2017'),
        powder: false,
        backcountry: false
      }
    ]
  }/>,
  document.getElementById("react-container")
);
