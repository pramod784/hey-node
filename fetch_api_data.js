const https = require("https");
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
  console.log("Status Code: ", res.statysCode);
  let data = "";
  // Collect data chunks
  res.on("data", (chunk) => {
    data += chunk;
  });
  
  // When all data is received
  res.on("end", () => {
    try {
      const parsedData = JSON.parse(data);
      console.log("Data:", parsedData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });
}).on("error", (err) => {
  console.error("Error:", err.message);
});