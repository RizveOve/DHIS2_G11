import { useDataQuery } from "@dhis2/app-runtime";
import { CircularLoader, SingleSelectField, SingleSelectOption } from "@dhis2/ui";
import React, { useEffect, useState } from "react";
// import "../css/SchoolList.css";

// Object to query clusters and schools.
const query = {
  clusters: {
    resource: "organisationUnits",
    params: {
      fields: ["id", "displayName"],
      level: 3
    }
  },
  schools: {
    resource: "organisationUnits",
    params: {
      fields: ["id", "displayName", "parent[id,displayName]"],
      level: 4
    }
  }
};
export function SchoolList() {
  var _data$schools, _data$schools$organis;
  const {
    loading,
    error,
    data
  } = useDataQuery(query);

  // states for schools and cluster
  const [selectedCluster, setSelectedCluster] = useState("");
  const [filteredSchools, setFilteredSchools] = useState([]);
  useEffect(() => {
    if (data && data.schools) {
      const schools = data.schools.organisationUnits;
      if (selectedCluster) {
        // filter school if cluster is selected
        setFilteredSchools(schools.filter(school => {
          var _school$parent;
          return ((_school$parent = school.parent) === null || _school$parent === void 0 ? void 0 : _school$parent.id) === selectedCluster;
        }));
      } else {
        // set all the schools in the state by default
        setFilteredSchools(schools);
      }
    }
  }, [selectedCluster, data]);
  if (loading) return /*#__PURE__*/React.createElement(CircularLoader, null);
  if (error) return /*#__PURE__*/React.createElement("p", null, "Error: ", error.message);
  return /*#__PURE__*/React.createElement("div", {
    className: "schoolList"
  }, /*#__PURE__*/React.createElement(SingleSelectField, {
    className: "dropdown",
    selected: filteredSchools,
    onChange: _ref => {
      let {
        selected
      } = _ref;
      return setFilteredSchools(selected);
    },
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: " "
  }), data === null || data === void 0 ? void 0 : (_data$schools = data.schools) === null || _data$schools === void 0 ? void 0 : (_data$schools$organis = _data$schools.organisationUnits) === null || _data$schools$organis === void 0 ? void 0 : _data$schools$organis.map(school => /*#__PURE__*/React.createElement(SingleSelectOption, {
    key: school.id,
    label: school.displayName,
    value: school.id
  }))));
}