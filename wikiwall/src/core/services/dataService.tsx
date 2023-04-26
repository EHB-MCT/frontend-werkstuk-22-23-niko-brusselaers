export default async function getCarData() {
    return await fetch("./assets/data.json").then(response => response.json())
    
  
}
