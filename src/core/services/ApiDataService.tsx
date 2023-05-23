export default async function getApiData() {
    return await fetch("./assets/ApiData.json").then(response => response.json())
    
  
}
