import { useDataQuery } from "@dhis2/app-runtime";
import {
    CircularLoader,
    SingleSelectField,
    SingleSelectOption
} from "@dhis2/ui";
import React, { useEffect, useState } from "react";
// import "../css/SchoolList.css";

// Object to query clusters and schools.
const query = {
  clusters: {
    resource: "organisationUnits",
    params: {
      fields: ["id", "displayName"],
      level: 3,
    },
  },
  schools: {
    resource: "organisationUnits",
    params: {
      fields: ["id", "displayName", "parent[id,displayName]"],
      level: 4,
    },
  },
};

export function SchoolList() {
  const { loading, error, data } = useDataQuery(query);

  // states for schools and cluster
  const [selectedCluster, setSelectedCluster] = useState("");
  const [filteredSchools, setFilteredSchools] = useState([]);

  useEffect(() => {
    if (data && data.schools) {
      const schools = data.schools.organisationUnits;
      if (selectedCluster) {
        // filter school if cluster is selected
        setFilteredSchools(
          schools.filter((school) => school.parent?.id === selectedCluster)
        );
      } else {
        // set all the schools in the state by default
        setFilteredSchools(schools);
      }
    }
  }, [selectedCluster, data]);

  if (loading) return <CircularLoader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="schoolList">
        
      {/* cluster dropdown */}
      


      <SingleSelectField
      className="dropdown"
        selected={filteredSchools}
        onChange={({ selected }) => setFilteredSchools(selected)}
        tabIndex="0"
      >
        <SingleSelectOption value=" " />
        {data?.schools?.organisationUnits?.map((school) => (
          <SingleSelectOption
            key={school.id}
            label={school.displayName}
            value={school.id}
          />
        ))}
      </SingleSelectField>

      {/* School list */}
     
    </div>
  );
}