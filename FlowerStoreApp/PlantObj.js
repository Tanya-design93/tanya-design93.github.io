function Plant (name, amountOfSunNeeded, wateringFrequency, origin,image, description, plantType){
  this.name = name;
  this.amountOfSunNeeded = amountOfSunNeeded;
  this.wateringFrequency = wateringFrequency;
  this.origin = origin;
  this.image = image;
  this.description = description;
  this.plantType = plantType;
}
// Exporting variables and functions
export { Plant };