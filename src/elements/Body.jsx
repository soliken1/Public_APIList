import RectangularCard from "./RectangularCard";
import API from "../services/api";
import { useState, useEffect } from "react";
import Loading from "./Loading";
function Body() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, nextPage] = useState(0);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      const response = await fetch(API());
      const data = await response.json();
      setData(data);
      nextPage(currentPage + 1);
      console.log(nextPage);
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  if (isLoading || data === null) {
    return <Loading />;
  }

  return (
    <div className="body_layer">
      <button>Hello</button>
      <RectangularCard data={data} />
    </div>
  );
}

export default Body;
