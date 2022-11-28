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
    <div>
      <h3>Customer Report Items {reportItems.length}</h3>
      {reportItems.map((reportItem) => (
        <ReportedItem
          key={reportItem._id}
          reportItem={reportItem}
          handleDelete={handleDelete}
        ></ReportedItem>
      ))}
    </div>
  );
};

export default ReportItems;
