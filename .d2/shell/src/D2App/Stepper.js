import React from "react";
import { useLocation } from "react-router-dom";
export const Stepper = () => {
  const location = useLocation();
  const getLinkClass = path => {
    return "nav-link disabled " + (path === location.pathname ? "active" : undefined);
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "stepper navbar navbar-expand-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-collapse"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement("li", {
    className: "step nav-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: getLinkClass("/")
  }, "Contact")), /*#__PURE__*/React.createElement("li", {
    className: "step nav-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: getLinkClass("/education")
  }, "Education")), /*#__PURE__*/React.createElement("li", {
    className: "step nav-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: getLinkClass("/about")
  }, "About")), /*#__PURE__*/React.createElement("li", {
    className: "step nav-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: getLinkClass("/confirm")
  }, "Confirm")))));
};