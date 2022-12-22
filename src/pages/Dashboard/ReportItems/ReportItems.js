import React from "react";
import ReportedItem from "./ReportedItem";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Spinner/Loading";

const ReportItems = () => {
  // const [reportItems, setReportItems] = useState([]);

  const {
    data: reportItems,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://laptop-resale-server-site.vercel.app/report"
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    fetch(`https://laptop-resale-server-site.vercel.app/report/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          refetch();
          toast.success(`successfully deleted the reported Item`);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="overflow-x-auto w-full text-black">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Selling Price</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {reportItems.map((reportItem) => (
            <tr>
              <th>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={reportItem.img} alt="product" />
                    </div>
                  </div>
                </div>
              </th>
              <td>{reportItem.name}</td>
              <td>{reportItem.email}</td>
              <td>{reportItem.selling_price}</td>
              <th>
                <button
                  onClick={() => handleDelete(reportItem.reportId)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
      <h3>Customer Report Items {reportItems.length}</h3>
      {reportItems.map((reportItem) => (
        <ReportedItem
          key={reportItem._id}
          reportItem={reportItem}
          handleDelete={handleDelete}
        ></ReportedItem>
      ))}
    </div> */}
    </div>
  );
};

export default ReportItems;
