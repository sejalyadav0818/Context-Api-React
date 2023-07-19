import React from "react";
import ReactDOM from "react-dom/client";
import { Greet, Greet2 } from "./UseEffect";
import { SideEffectCleanup, SideEffectCleanupp } from "./SideEffectCleanup";
import { TypesUseEffect } from "./TypesUseEffect";
import { UseofUseeffeact } from "./UseofUseeffeact";
import { CountInputChnages, CountInputChnagess } from "./InfiniteLoop";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Side Effect and Use Effect</h1>
    <Greet name="Eric" />
    <Greet name="Eric" />
    <Greet name="Eric" />
    <Greet2 name="Eric" />
    <Greet2 name="Eric" />
    <Greet2 name="Eric" />
    <h1>Types of Use Effect</h1>
    <TypesUseEffect name="sejal" />
    <TypesUseEffect name="sejal" />
    <TypesUseEffect name="sejal" />
    <h1>Side Effect Cleanup</h1>
    <SideEffectCleanup message="My Message" />
    <SideEffectCleanupp message="My Message2" />
    <h1>Use of use-Effect</h1>
    <UseofUseeffeact />
    <h1> Infinite loop and side-effect updating state</h1>
    <CountInputChnages />
    <CountInputChnagess />
  
  </React.StrictMode>
);
