import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { getData } from "../../assets/Local";

export function Statistics() {
  const [donated, setDonated] = useState(0);
  useEffect(() => {
    const donation = getData();
    setDonated(donation.length);
  }, []);
  const data = [
    ["Donate", "Donation"],
    ["Your Donation", donated],
    ["Total Donation", 12 - donated],
  ];

  const options = {
    colors: ["#00C49F", "#FF444A"],
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
}
