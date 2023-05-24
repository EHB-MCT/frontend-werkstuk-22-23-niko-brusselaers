export default async function getTopicItems() {
    return await fetch("./assets/ApiData.json").then(response => response.json())
    
  
}
