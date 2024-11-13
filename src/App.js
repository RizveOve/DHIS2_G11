import { useDataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import * as React from 'react';
import { useState } from "react";
import classes from './App.module.css';
import { Dataset } from "./Dataset";
import { InputFields } from './InputFields';
import { Navigation } from "./Navigation";
import { SubmittedInspections } from "./SubmittedInspections";




const query = {
    me: {
        resource: 'me',
    },
}



const MyApp = () => {


    const { error, loading, data } = useDataQuery(query)
    const [activePage, setActivePage] = useState("Create an event");

    function activePageHandler(page) { // endrer: string til activePage
      // LEngernede 
      setActivePage(page);
    }
  
    if (error) {
        return <span>{i18n.t('ERROR')}</span>
    }

    if (loading) {
        return <span>{i18n.t('Loading...')}</span>
    }

    return (
      <div className={classes.container}> {/* Div for sidebar+mainpage */}
             <div className={classes.left}>
                
        <Navigation
          activePage={activePage}
          activePageHandler={activePageHandler}
          />
      </div>

      <div className={classes.right}> {/* Div for innhold */}
          <h2>Create an event /Inspection form </h2>
          

{/* Conditional: Hvis activePage==a,b,c så vis <SelfmadeFucntion> */}
        {activePage === "Create an event" && <InputFields /> }
        {activePage === "Show submitted inspections log" && <SubmittedInspections />}
        {activePage === "Dashboard" && <Dataset />}
      
      </div>
      
        </div>
    )
}

export default MyApp
