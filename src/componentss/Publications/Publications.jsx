import React, { useRef, useState } from "react";
import publicationsData from "../../assets/publicationsdata";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import parse from "html-react-parser";
import "./Styles/publications.css";

// Common options for all AG Grid columns
const commonColumnOptions = {
  filter: true,
  floatingFilter: true,
  autoHeight: true,
  resizable: false,
};

// Fallback file name and error messages
const DEFAULT_FILE_NAME = "data.json";
const ERROR_MESSAGES = {
  gridNotLoaded: "AG Grid is not loaded or tableRef is undefined.",
  saveError: "Error saving file: ",
  unsupportedBrowser: "Your browser does not support the file-saving API.",
};

const Publications = () => {
  const tableRef = useRef(null);
  const [rowData] = useState(publicationsData);
  const [columns] = useState([
    {
      field: "Publication",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="publication-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Publisher",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="publisher-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Publication Type",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="type-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Author(s)",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="authors-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Keywords",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="keywords-cell">{parse(value)}</div>
      ),
    },
    {
      field: "Year",
      ...commonColumnOptions,
      cellRenderer: ({ value }) => (
        <div className="year-cell">{parse(value)}</div>
      ),
    },
  ]);

  const handleExportToJson = async () => {
    const data = [];

    if (tableRef.current && tableRef.current.api) {
      tableRef.current.api.forEachNodeAfterFilterAndSort((node) => {
        data.push(node.data);
      });

      const jsonData = JSON.stringify(data, null, 2);

      if ("showSaveFilePicker" in window) {
        try {
          const fileHandle = await window.showSaveFilePicker({
            suggestedName: DEFAULT_FILE_NAME,
            types: [
              {
                description: "JSON File",
                accept: { "application/json": [".json"] },
              },
            ],
          });
          const writableStream = await fileHandle.createWritable();
          await writableStream.write(jsonData);
          await writableStream.close();
          alert("Data saved successfully!");
        } catch (error) {
          console.error(`${ERROR_MESSAGES.saveError}`, error);
          alert("File not saved. Please try again.");
        }
      } else {
        try {
          const blob = new Blob([jsonData], { type: "application/json" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = DEFAULT_FILE_NAME;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error(`${ERROR_MESSAGES.saveError}`, error);
          alert(ERROR_MESSAGES.unsupportedBrowser);
        }
      }
    } else {
      alert(ERROR_MESSAGES.gridNotLoaded);
    }
  };

  return (
    <div className="publications">
      <div className="table ag-theme-quartz">
        <AgGridReact
          ref={tableRef}
          rowData={rowData}
          columnDefs={columns}
          pagination={true}
          suppressMovableColumns={true}
        />
      </div>
      <button onClick={handleExportToJson} className="publication-button">
        Export Results to JSON
      </button>
    </div>
  );
};

export default Publications;
