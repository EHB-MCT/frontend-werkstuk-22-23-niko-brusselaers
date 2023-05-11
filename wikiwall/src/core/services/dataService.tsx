export default async function getCarData() {
    return await fetch("./assets/carData.json").then(response => response.json())
    
  
}
