  import React, { useState, useEffect } from "react";
  import "./IncidentTable.css";
  import { useNavigate } from "react-router-dom";

  const IncidentTable = () => {
    const [response, setResponse] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10); // Dynamic row count

    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        const url = "http://localhost:3000/proxy/incidents";
        const username = "fibin.pious@ust.com"; 
        const password = "Andrews2000@";
        const headers = new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(`${username}:${password}`),
        });

        try {
          const res = await fetch(url, { method: "GET", headers });
          const data = await res.json();
          setResponse(data);
          console.log("Data fetched successfully:", data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setResponse("Failed to fetch data");
        }
      };

      fetchData();
    }, []);

    const incidents = response?.result || [];

    // Dynamically adjust rows based on screen height
    useEffect(() => {
      const updateRecordsPerPage = () => {
        const rowHeight = 50; // Approximate row height in pixels
        const availableHeight = window.innerHeight - 200; // Subtracting header, pagination, etc.
        const maxRows = Math.floor(availableHeight / rowHeight);
        setRecordsPerPage(maxRows);
      };

      updateRecordsPerPage();
      window.addEventListener("resize", updateRecordsPerPage);
      return () => window.removeEventListener("resize", updateRecordsPerPage);
    }, []);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = incidents.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(incidents.length / recordsPerPage);

    return (
      <div className="incident-table-container">
        <div className="header-container">
          <button className="back-button" onClick={() => navigate("/student")}>Back to Dashboard</button>
        </div>
        <div className="table-wrapper">
          <table className="incident-table">
            <thead>
              <tr>
                <th>Number</th>
                <th>Short Description</th>
                <th>Priority</th>
                <th>State</th>
                <th>Impact</th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>Assignment Group</th>
                <th>Assigned To</th>
                <th>Opened By</th>
                <th>Opened At</th>
                <th>Sys Created On</th>
                <th>Sys Created By</th>
                <th>Updated On</th>
                <th>Updated By</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.length > 0 ? (
                currentRecords.map((incident, index) => (
                  <tr key={index}>
                    <td>{incident.number}</td>
                    <td>{incident.short_description}</td>
                    <td>{incident.priority}</td>
                    <td>{incident.incident_state}</td>
                    <td>{incident.impact}</td>
                    <td>{incident.category || "N/A"}</td>
                    <td>{incident.subcategory || "N/A"}</td>
                    <td>{incident.assignment_group?.value || "N/A"}</td>
                    <td>{incident.assigned_to?.value || "N/A"}</td>
                    <td>{incident.opened_by?.value || "N/A"}</td>
                    <td>{incident.opened_at}</td>
                    <td>{incident.sys_created_on}</td>
                    <td>{incident.sys_created_by}</td>
                    <td>{incident.sys_updated_on}</td>
                    <td>{incident.sys_updated_by}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="15">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
  
        <div className="pagination">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default IncidentTable;
  