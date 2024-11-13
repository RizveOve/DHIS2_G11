function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "./Forms/Button";
import { Field } from "./Forms/Field";
import { Form } from "./Forms/Form";
import chair from "./icons/chair.svg";
import classroom from "./icons/Classroom.svg";
import clock from "./icons/Clock.svg";
import desk from "./icons/desk.svg";
import school from "./icons/Inspection.svg";
import male from "./icons/Standing Man.svg";
import students from "./icons/Teaching.svg";
import toilet from "./icons/Toilet.svg";
import female from "./icons/Woman.svg";
import { useAppState } from "./state";
export const Summary = () => {
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
    navigate("/SchoolManagement"); // vis summary, så fjern navigate
  };
  const handleBlur = e => {
    const formData = getValues();
    console.log("OnBlur: Form data filled inn:", formData);
  };
  return /*#__PURE__*/React.createElement(Form, {
    onBlur: handleBlur,
    onSubmit: handleSubmit(saveData)
  }, /*#__PURE__*/React.createElement("h3", null, " Summary "), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.firstName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: school,
    alt: "clock",
    className: "icons"
  }), "Name of the School"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("schoolName"), {
    id: "schoolName"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
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
    error: errors === null || errors === void 0 ? void 0 : errors.email
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: classroom,
    alt: "clock",
    className: "icons"
  }), "Total Number of Classrooms"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("numberOfClassrooms", {
    required: "number Of Classrooms is required"
  }), {
    type: "numberOfClassrooms",
    id: "numberOfClassrooms"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.password
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: desk,
    alt: "clock",
    className: "icons"
  }), "Total Number of Desks"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("numberDesk", {
    required: "number of desks is required"
  }), {
    type: "numberDesk",
    id: "numberDesk"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.password
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: chair,
    alt: "clock",
    className: "icons"
  }), "Total Number of Chairs"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("numberChairs", {
    required: "numberChairs is required"
  }), {
    type: "numberChairs",
    id: "numberChairs"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.password
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: male,
    alt: "clock",
    className: "icons"
  }), "Total Number of Male Students"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("maleStudent", {
    required: "amountMaleStudents is required"
  }), {
    type: "maleStudent",
    id: "maleStudent"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.password
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: female,
    alt: "clock",
    className: "icons"
  }), "Total Number of Female Students"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("femaleStudent", {
    required: "amountFemaleStudents is required"
  }), {
    type: "femaleStudent",
    id: "femaleStudent"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.password
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: students,
    alt: "clock",
    className: "icons"
  }), "Total Number of Students"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("totalStudent", {
    required: "totalStudents is required"
  }), {
    type: "totalStudent",
    id: "totalStudent"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.password
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: toilet,
    alt: "clock",
    className: "icons"
  }), "Total Number of Toilets for Teachers"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("amountToiletsTeachers", {
    required: "amountToiletsTeachers is required"
  }), {
    type: "amountToiletsTeachers",
    id: "amountToiletsTeachers"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.password
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: toilet,
    alt: "clock",
    className: "icons"
  }), "Total Number of Toilets for Students"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("amountToiletsStudent", {
    required: "amountToiletsStudent is required"
  }), {
    type: "amountToiletsStudent",
    id: "amountToiletsStudent"
  })))), /*#__PURE__*/React.createElement(Button, null, "Next ", ">"));
};