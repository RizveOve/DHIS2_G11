function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./css/common.css";
import { Button } from "./Forms/Button";
import { Field } from "./Forms/Field";
import { Form } from "./Forms/Form";
import clock from "./icons/Clock.svg";
import school from "./icons/Inspection.svg";
import { SchoolList } from "./SchoolList";
import { useAppState } from "./state";
export const SchoolRegistration = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    getValues,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: state,
    mode: "onSubmit"
  });
  const watchPassword = watch("password");
  const navigate = useNavigate();
  const saveData = data => {
    setState({
      ...state,
      ...data
    });
    navigate("/SchoolManagement");
  };
  const handleBlur = e => {
    const formData = getValues();
    console.log("OnBlur: Form data filled inn:", formData);
  };
  return /*#__PURE__*/React.createElement(Form, {
    onBlur: handleBlur,
    onSubmit: handleSubmit(saveData)
  }, /*#__PURE__*/React.createElement("h3", null, " School Registration"), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.schoolName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: school,
    alt: "clock",
    className: "icons"
  }), "Name of the School"), /*#__PURE__*/React.createElement(SchoolList, {
    className: "dropdown"
  }))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.date
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: clock,
    alt: "clock",
    className: "icons"
  }), "Inspection Date"), /*#__PURE__*/React.createElement("input", _extends({}, register("date"), {
    id: "date",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.cluster
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: school,
    alt: "clock",
    className: "icons"
  }), "Cluster"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("cluster", {
    required: "cluster is required"
  }), {
    type: "cluster",
    id: "cluster"
  })))), /*#__PURE__*/React.createElement(Button, null, "Next ", ">"));
};