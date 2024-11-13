import React from "react";
import { useState } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import classes from "./App.module.css";

import {
  DataTable,
  DataTableRow,
  DataTableCell,
  DataTableColumnHeader,
  DataTableCellHead,
} from "@dhis2/ui";
import { CircularLoader } from "@dhis2/ui";
import { Menu, MenuItem, MenuSectionHeader } from "@dhis2/ui";

import {
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableFoot,
  TableHead,
  TableRow,
  TableRowHead,
} from "@dhis2/ui";



const request = {
  request0: {
    resource: "/dataSets",
    params: {
      fields: "id, displayName, created",
      paging: "false",
    },
  },
};

export function Dataset() {
  const [expandedState, setExpandedState] = useState(false);
  const [rowInfoId, setRowinfoId] = useState();
  const [rowInfoDisplayName, setRowInfoDisplayName] = useState();
  const [rowInfoCreated, setRowInfoCreated] = useState();
  const { loading, error, data } = useDataQuery(request);

  const onRowClick = (data) => {
    setExpandedState(true);
  };
  
  const CustomLabel = () => { return( <>    
  <span  className={classes.menutitle} > Display <br/> name     </span>
  <span  className={classes.menutitle} >  ID  &emsp;&emsp; </span>     
  <span className={classes.menutitle} >  Created </span>     
  </>)
};
  
  const rowMenuRowContent = (rowInfoDisplayName,rowInfoId,rowInfoCreated) => {   
  return(
  <span className={classes.menutitle}> {rowInfoDisplayName.replaceAll(" ", "\n")} &emsp; &emsp;{rowInfoId} &emsp;&emsp;{rowInfoCreated}                          </span>)
  }
  

  if (error) {
    return <span>ERROR: {error.message}</span>;
  }

  if (loading) {
    return (
      <>
        <CircularLoader large />
        <span>Loading...</span>
      </>
    );
  }

  if (data) {
    console.log("response " + JSON.stringify(data));
    var response = data.request0.dataSets;
   

    return (
      <div className={classes.stordiv}>

        <div className={classes.datatable}>
          {response.map((row) => {
            return (
              <DataTable >
                <DataTableRow>
                  <DataTableCell
                    onClick={() => {
                      onRowClick(row);
                      setRowinfoId(row.id);
                      setRowInfoCreated(row.created);
                      setRowInfoDisplayName(row.displayName);
                    }}
                  >
                    {row.displayName}
                  </DataTableCell>
                </DataTableRow>
              </DataTable>
            );
          })}
        </div>

     {expandedState && (
        <div className={classes.menu}>
              <Menu>
                <MenuSectionHeader className= {classes.divider} label={<CustomLabel />}> </MenuSectionHeader>
                <MenuItem  className= {classes.menutitle}  label={ rowMenuRowContent(rowInfoDisplayName, rowInfoId, rowInfoCreated)  }/>
               
              </Menu>
        </div>
          )}
      </div>
    );
  }
}

