import { Menu, MenuDivider, MenuItem, MenuSectionHeader } from "@dhis2/ui";
import React from "react";

const plussIcon =() => ( 

<svg viewBox="0 0 20 20" className="outlined" xmlns="http://www.w3.org/2000/svg">
<path  fill="#6E7A8A" d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" className="outlined"/>
</svg>
)
///home/sb1a.sparebank1.no/a504av5/Documents/IN5320_Group11_Project/IN5320_Group11_Project/IN5320ProjectG11/src/css/Navigation.css

//  <svg viewBox="0 0 20 20" className="outlined" xmlns="http://www.w3.org/2000/svg" height="25px" width="22px"  >
  
  //<path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 5C10.5523 5 11 5.44772 11 6V9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H11V14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14V11H6C5.44772 11 5 10.5523 5 10C5 9.44772 5.44772 9 6 9H9V6C9 5.44772 9.44772 5 10 5Z" className="outlined"/>
  //</svg>
export function Navigation(props) {
  return (
    <Menu>
      <MenuSectionHeader label="Main Menu" className="menu-header "  style={{ textAlign: 'center' }} />
      <MenuDivider  style={{ padding: '10px' ,color: 'red' }} />
      <MenuItem
        icon=  {plussIcon()}
        label="Create an event"
        active={props.activePage == "Create an event"}
        onClick={() => props.activePageHandler("Create an event")}
      />
      <MenuItem
        icon=  {plussIcon()}
        label="Show submitted inspections log"  
        active={props.activePage == "Show submitted inspections log"} 
        onClick={() => props.activePageHandler("Show submitted inspections log")}
      />      
      <MenuItem
        icon=  {plussIcon()}
        label="Dashboard"
        active={props.activePage == "Dataset"}
        onClick={() => props.activePageHandler("Dataset")}
      />
    </Menu>
  );
}
