export default async function getTopicItems() {
    return await fetch("./assets/topics.json").then(response => response.json())
    
  
}
