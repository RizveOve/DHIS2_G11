import React from 'react';
import { useEffect, useState } from 'react';
import { ReactFinalForm, InputFieldFF, Button, SingleSelectFieldFF, hasValue, number, composeValidators } from '@dhis2/ui';
export const SubmittedInspections = () => {
  /*
  // Oblig 3: 
  const dataQuery = {
      dataSets: {
          resource: 'dataSets',
          id: ({ id }) => id,
          params: {
              fields: ['dataSetElements[dataElement[id, displayName,created]'],
              paging: false,
          },
      },
  }
      const [searchQuery, setSearchQuery] = useState(); // Default = No search query
      const [apiData, setApiData] = useState([]);
  
  
  // Oblig 2
  useEffect(() => {
      // All parameters are appended to this URL.
     // let apiQuery = "https://research.im.dhis2.org/in5320g11";
      let apiQuery = "https://research.im.dhis2.org/in5320g11/api/organisationUnits?pageSize=3700";
  
  // Maybe this is solutin for why we are getting fetch failed: https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request
      
  
  
  
     // Hvordan legge til query parametere til strengen
      //if (searchQuery) {
       //   apiQuery = apiQuery + "&fields=" + searchQuery;
      //}
  
      // Query data from API.
      console.log("Querying: " + apiQuery);
      fetch(apiQuery)
        .then((results) => results.json())
        .then((data) => {  
          console.log(data);
            setApiData(data);     // Then add response to state.
                  
        });
    }, [] ); // Array containing which state changes that should re-reun useEffect()
  
  */
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Vi er p\xE5 submittedInspections"));
};