import { useState, useEffect } from "react";
import ChartCard from "../components/ChartCard";
import CountriesList from "../components/CountriesList";

function Dashboard(props) {
  const [globalData, setGlobalData] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((res) => {
        if (res.Global) setGlobalData(res.Global);
        if (res.Countries) setTableData(res.Countries);
        setLoading(false);
        console.log({ res });
      });
  }, []);
  return (
    <div>
      {!loading && (
     <>
       <ChartCard data={globalData} />
 <CountriesList data={tableData} />
        
         
        </>
      )}
    </div>
  );
}

export default Dashboard;
