export default async function getModels() {
    return await fetch("./assets/modelData.json").then(response => response.json())
    
  
}
