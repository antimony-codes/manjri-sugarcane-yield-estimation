// Define the Region of Interest (ROI), taking a rectangular area.
var roi = ee.Geometry.Polygon([
  [73.92293461614474, 18.572358142391067],
  [73.92293461614474, 18.421937226864767],
  [74.13922795110568, 18.421937226864767],
  [74.13922795110568, 18.572358142391067]
]);

// Vasantdada Sugarcane Institute
var institute = ee.Geometry.Point([73.97451898059542, 18.526416507329113]);  // replace with your coords

Map.centerObject(roi, 12);
Map.addLayer(roi, {color: 'red'}, 'Study Area');
Map.addLayer(institute, {color: 'blue'}, 'Vasantdada Institute')

var areaSqKm = roi.area().divide(1000 * 1000);
print('Area of ROI (sq km):', areaSqKm);

// estimated area of ROI = 381.49 sq km

