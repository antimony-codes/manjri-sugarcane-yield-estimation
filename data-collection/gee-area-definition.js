// Define the Region of Interest (ROI), taking a rectangular area.
var roi = ee.Geometry.Polygon([
  [73.92293461614474, 18.572358142391067],
  [73.92293461614474, 18.421937226864767],
  [74.13922795110568, 18.421937226864767],
  [74.13922795110568, 18.572358142391067]
]);

// Vasantdada Sugarcane Institute
var institute = ee.Geometry.Point([73.97451898059542, 18.526416507329113]);  // replace with your coords

// land cover layer
var worldcover = ee.ImageCollection("ESA/WorldCover/v100")
                  .first()
                  .clip(roi);

var worldcoverPalette = [
  '006400', // 10 Tree cover - dark green
  'ffbb22', // 20 Shrubland - golden yellow
  'ffff4c', // 30 Grassland - bright yellow
  'f096ff', // 40 Cropland - light pink
  'fa0000', // 50 Built-up - red
  'b4b4b4', // 60 Bare / sparse vegetation gray
  'f0f0f0', // 70 Snow and ice
  '0064c8', // 80 Permanent water bodies
  '0096a0', // 90 Herbaceous wetland
  '00cf75', // 95 Mangroves
  'fae6a0'  // 100 Moss & lichen
];


Map.centerObject(roi, 12);
Map.addLayer(roi, {color: 'red'}, 'Study Area');
Map.addLayer(institute, {color: 'blue'}, 'Vasantdada Institute')
Map.addLayer(worldcover, {min: 10, max: 100, palette: worldcoverPalette}, "ESA WorldCover 2020");

var areaSqKm = roi.area().divide(1000 * 1000);
print(areaSqKm);
