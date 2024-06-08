import { useEffect, useState } from "react";

import axios from "axios";
import { url } from "../utils/common";
import DataTable from "react-data-table-component";
// import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";

export default function BlogList() {
  // const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const handleSelectOption = (option) => {
    switch (option) {
      case "create":
        // Handle create logic here
        console.log("Create selected");
        break;
      case "update":
        // Handle update logic here
        console.log("Update selected");
        break;
      case "delete":
        // Handle delete logic here
        console.log("Delete selected");
        break;
      default:
        break;
    }
  };
  // const data = [
  //   { title: "Gautam", body: "Gautam is a good body", author: "abcd" },
  //   { title: "Nitesh", body: "Nitesh is a good body", author: "abcd" },
  //   { title: "Kariya", body: "Kariya is a good body", author: "abcd" },
  // ];
    const propertiesValues = async () => {
    const res = await axios.get(`${url}/blogs`);
    console.log("this is res.data ", res.data.data);
    setProperties(res.data.data);
    };
    useEffect(() => {
      propertiesValues();
    }, []);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Body",
      selector: (row) => row.body,
      sortable: true,
    },
    {
      name: "AuthorId",
      selector: (row) => row.author,
      sortable: true,
    },
    {
      name: "CRUD Operation",
      cell: (row) => (
        // <button onClick={() => navigate(`/sellerprofilepage/${row.sellerId}`)}>
        //   CRUD
        // </button>
        <DropDown onSelectOption={handleSelectOption} authorId={row.author} bookId = {row._id}/>
      ),
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={properties} pagination />
    </div>
  );
}
