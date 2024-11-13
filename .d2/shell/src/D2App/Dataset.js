import React from "react";
import { useState } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import classes from "./App.module.css";
import { DataTable, DataTableRow, DataTableCell, DataTableColumnHeader, DataTableCellHead } from "@dhis2/ui";
import { CircularLoader } from "@dhis2/ui";
import { Menu, MenuItem, MenuSectionHeader } from "@dhis2/ui";
import { Table, TableBody, TableCell, TableCellHead, TableFoot, TableHead, TableRow, TableRowHead } from "@dhis2/ui";
const request = {
  request0: {
    resource: "/dataSets",
    params: {
      fields: "id, displayName, created",
      paging: "false"
    }
  }
};
export function Dataset() {
  const [expandedState, setExpandedState] = useState(false);
  const [rowInfoId, setRowinfoId] = useState();
  const [rowInfoDisplayName, setRowInfoDisplayName] = useState();
  const [rowInfoCreated, setRowInfoCreated] = useState();
  const {
    loading,
    error,
    data
  } = useDataQuery(request);
  const onRowClick = data => {
    setExpandedState(true);
  };
  const CustomLabel = () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: classes.menutitle
    }, " Display ", /*#__PURE__*/React.createElement("br", null), " name     "), /*#__PURE__*/React.createElement("span", {
      className: classes.menutitle
    }, "  ID  \u2003\u2003 "), /*#__PURE__*/React.createElement("span", {
      className: classes.menutitle
    }, "  Created "));
  };
  const rowMenuRowContent = (rowInfoDisplayName, rowInfoId, rowInfoCreated) => {
    return /*#__PURE__*/React.createElement("span", {
      className: classes.menutitle
    }, " ", rowInfoDisplayName.replaceAll(" ", "\n"), " \u2003 \u2003", rowInfoId, " \u2003\u2003", rowInfoCreated, "                          ");
  };
  if (error) {
    return /*#__PURE__*/React.createElement("span", null, "ERROR: ", error.message);
  }
  if (loading) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CircularLoader, {
      large: true
    }), /*#__PURE__*/React.createElement("span", null, "Loading..."));
  }
  if (data) {
    console.log("response " + JSON.stringify(data));
    var response = data.request0.dataSets;
    return /*#__PURE__*/React.createElement("div", {
      className: classes.stordiv
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.datatable
    }, response.map(row => {
      return /*#__PURE__*/React.createElement(DataTable, null, /*#__PURE__*/React.createElement(DataTableRow, null, /*#__PURE__*/React.createElement(DataTableCell, {
        onClick: () => {
          onRowClick(row);
          setRowinfoId(row.id);
          setRowInfoCreated(row.created);
          setRowInfoDisplayName(row.displayName);
        }
      }, row.displayName)));
    })), expandedState && /*#__PURE__*/React.createElement("div", {
      className: classes.menu
    }, /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(MenuSectionHeader, {
      className: classes.divider,
      label: /*#__PURE__*/React.createElement(CustomLabel, null)
    }, " "), /*#__PURE__*/React.createElement(MenuItem, {
      className: classes.menutitle,
      label: rowMenuRowContent(rowInfoDisplayName, rowInfoId, rowInfoCreated)
    }))));
  }
}