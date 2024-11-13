function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "./Forms/Button";
import { Field } from "./Forms/Field";
import { Form } from "./Forms/Form";
import teacher from "./icons/Graduation Cap.svg";
import male from "./icons/Standing Man.svg";
import students from "./icons/Teaching.svg";
import toilet from "./icons/Toilet.svg";
import female from "./icons/Woman.svg";
import { useAppState } from "./state";
export const HumanResource = () => {
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
    navigate("/ResourceCount");
  };
  const handleBlur = e => {
    const formData = getValues();
    console.log("OnBlur: Form data filled inn:", formData);
  };
  return /*#__PURE__*/React.createElement(Form, {
    onBlur: handleBlur,
    onSubmit: handleSubmit(saveData)
  }, /*#__PURE__*/React.createElement("h3", null, " Human Resource"), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.firstName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: teacher,
    alt: "clock",
    className: "icons"
  }), "How many teachers at the school?"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("totalTeacher", {
    required: "You must fill this field"
  }), {
    id: "totalTeacher"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: female,
    alt: "clock",
    className: "icons"
  }), "How many teachers are females?"), /*#__PURE__*/React.createElement("input", _extends({}, register("femaleTeacher"), {
    id: "femaleTeacher",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.email
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: male,
    alt: "clock",
    className: "icons"
  }), "How many teachers are males?"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("maleTeacher"), {
    id: "maleTeacher",
    min: "0"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.password
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: students,
    alt: "clock",
    className: "icons"
  }), "How many students are at the school?"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("totalStudent", {
    required: "You must fill this field"
  }), {
    id: "totalStudent"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.confirmPassword
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: female,
    alt: "clock",
    className: "icons"
  }), "How many students are females?"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("femaleStudent"), {
    id: "femaleStudent"
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.confirmPassword
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: male,
    alt: "clock",
    className: "icons"
  }), "How many students are males?"), /*#__PURE__*/React.createElement("input", _extends({
    onBlur: handleBlur
  }, register("maleStudent"), {
    id: "maleStudent"
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
  }, register("amountToiletsTeachers"), {
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
  }, register("amountToiletsStudent"), {
    type: "amountToiletsStudent",
    id: "amountToiletsStudent"
  })))), /*#__PURE__*/React.createElement(Button, null, "Next ", ">"));
};