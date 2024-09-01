import { useEffect, useState } from "react";
import { QueryNews } from "../api/utils";
// import NewsResult from "./NewsResult";

export default function InputText() {
  const [searchQuery, setSearchQuery] = useState("");
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await QueryNews();
        setNewsData(response);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await QueryNews(searchQuery);
      setNewsData(response);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  console.log("Search query:", newsData);

  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
      <div style={{ marginTop: "20px" }}>
        {newsData.length > 0 ? (
          newsData.map((value, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <p>{value.news_description}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
