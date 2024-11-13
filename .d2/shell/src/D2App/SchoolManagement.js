function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Forms/Button";
import { Field } from "./Forms/Field";
import { Form } from "./Forms/Form";
import classroom from "./icons/Classroom.svg";
import cleanHand from "./icons/Clean Hands.svg";
import Dining from "./icons/Dining Room.svg";
import Laptop from "./icons/Laptop with cursor.svg";
import Library from "./icons/Library Building.svg";
import Soccer from "./icons/Soccer.svg";
import TestTube from "./icons/Test Tube.svg";
import toilet from "./icons/Toilet.svg";
import { useAppState } from "./state";
export const SchoolManagement = () => {
  const [state, setState] = useAppState();

  // const { handleSubmit, register,     getValues } = useForm({ defaultValues: state });
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
  const navigate = useNavigate();
  const saveData = data => {
    setState({
      ...state,
      ...data
    });
    navigate("/HumanResource");
  };
  const handleBlur = e => {
    const formData = getValues();
    console.log('OnBlur: Form data filled inn:', formData);
  };
  return /*#__PURE__*/React.createElement(Form, {
    onSubmit: handleSubmit(saveData)
  }, /*#__PURE__*/React.createElement("h2", null, "School Management"), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: Laptop,
    alt: "clock",
    className: "icons"
  }), "The school has computer lab for learners?"), /*#__PURE__*/React.createElement("input", _extends({}, register("computerLab"), {
    id: "computerLab",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: TestTube,
    alt: "clock",
    className: "icons"
  }), "The school has a laboratory?"), /*#__PURE__*/React.createElement("input", _extends({}, register("laboratory"), {
    id: "laboratory",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: cleanHand,
    alt: "clock",
    className: "icons"
  }), "The school has hand-washing facilities?"), /*#__PURE__*/React.createElement("input", _extends({}, register("handWashingFacilities"), {
    id: "handWashingFacilities",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: Library,
    alt: "clock",
    className: "icons"
  }), "The school has a library?"), /*#__PURE__*/React.createElement("input", _extends({}, register("library"), {
    id: "library",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: classroom,
    alt: "clock",
    className: "icons"
  }), "Total number of classrooms?"), /*#__PURE__*/React.createElement("input", _extends({}, register("numberOfClassrooms"), {
    id: "numberOfClassrooms",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: Soccer,
    alt: "clock",
    className: "icons"
  }), "The school has a yard/playground?"), /*#__PURE__*/React.createElement("input", _extends({}, register("playground"), {
    id: "playground",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: toilet,
    alt: "clock",
    className: "icons"
  }), "How many toilets at the school?"), /*#__PURE__*/React.createElement("input", _extends({}, register("totalToilets"), {
    id: "totalToilets",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement(Field, {
    error: errors === null || errors === void 0 ? void 0 : errors.lastName
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("img", {
    src: Dining,
    alt: "clock",
    className: "icons"
  }), "The school has a dining area?"), /*#__PURE__*/React.createElement("input", _extends({}, register("diningArea"), {
    id: "diningArea",
    onBlur: handleBlur
  })))), /*#__PURE__*/React.createElement("div", {
    className: "button-row"
  }, /*#__PURE__*/React.createElement(Link, {
    className: `btn btn-secondary`,
    to: "/"
  }, "<", " Previous"), /*#__PURE__*/React.createElement(Button, null, "Previous ", ">"), /*#__PURE__*/React.createElement(Button, null, "Next ", ">")));
};