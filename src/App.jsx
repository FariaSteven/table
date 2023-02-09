import "./App.css";
import React, { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  console.log("search", search);
  
  const tableData = [
    {
      email: "sapien@yahoo.org",
      name: "Priscilla",
      phone: "(277) 935-8112",
      hoursStudied: 8,
      lastName: "Madonna",
      primaryGroup: "Amet Inc.",
    },
    {
      email: "enim.sit.amet@outlook.edu",
      name: "Gisela",
      phone: "(686) 357-6605",
      hoursStudied: 2,
      lastName: "Arthur",
      primaryGroup: "Egestas Consulting",
    },
    {
      email: "id.nunc@hotmail.edu",
      name: "Christian",
      phone: "(912) 386-4435",
      hoursStudied: 0,
      lastName: "Tobias",
      primaryGroup: "Et Ultrices Posuere Industries",
    },
    {
      email: "nulla.facilisis@aol.com",
      name: "Roanna",
      phone: "(74)59605-1804",
      hoursStudied: 3,
      lastName: "Mia",
      primaryGroup: "Molestie Pharetra Associates",
    },
    {
      email: "lobortis@icloud.com",
      name: "Dominique",
      phone: "(223) 875-7713",
      hoursStudied: 3,
      lastName: "William",
      primaryGroup: "Odio Tristique Pharetra Incorporated",
    },
    {
      email: "sapien@yahoo.org",
      name: "Priscilla",
      phone: "(277) 935-8112",
      hoursStudied: 8,
      lastName: "Madonna",
      primaryGroup: "Amet Inc.",
    },
    {
      email: "enim.sit.amet@outlook.edu",
      name: "Gisela",
      phone: "(686) 357-6605",
      hoursStudied: 2,
      lastName: "Arthur",
      primaryGroup: "Egestas Consulting",
    },
    {
      email: "id.nunc@hotmail.edu",
      name: "Christian",
      phone: "(912) 386-4435",
      hoursStudied: 0,
      lastName: "Tobias",
      primaryGroup: "Et Ultrices Posuere Industries",
    },
    {
      email: "nulla.facilisis@aol.com",
      name: "Roanna",
      phone: "(74)59605-1804",
      hoursStudied: 3,
      lastName: "Mia",
      primaryGroup: "Molestie Pharetra Associates",
    },
    {
      email: "lobortis@icloud.com",
      name: "Dominique",
      phone: "(223) 875-7713",
      hoursStudied: 3,
      lastName: "William",
      primaryGroup: "Odio Tristique Pharetra Incorporated",
    },
  ];
  search.toLowerCase();

  const currentItems = search
    ? tableData.filter((item) => item.email.toLowerCase().includes(search) || item.primaryGroup.toLowerCase().includes(search))
    : tableData.sort((a, b) => b.hoursStudied - a.hoursStudied);

  return (
    <div className="App">
      <input
        placeholder="Search Email or Primary Group"
        onKeyUp={(e) => setSearch(e.target.value)}
      />
      <table id="myTable">
        <thead>
          <tr className="header">
            <th align="left">Email</th>
            <th align="left">Name</th>
            <th align="left">Lastname</th>
            <th align="left">Phone</th>
            <th align="left">Hours Studied</th>
            <th align="left">Primary Group</th>
          </tr>
        </thead>

        <tbody>
          {currentItems?.map((item) => (
            <tr>
              <td align="left">{item.email}</td>
              <td align="left">{item.name}</td>
              <td align="left">{item.lastName}</td>
              <td align="left">{item.phone}</td>
              <td align="center">{item.hoursStudied}</td>
              <td align="left">{item.primaryGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
