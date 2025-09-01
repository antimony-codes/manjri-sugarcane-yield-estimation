import geopandas as gpd
import osmnx as ox
from shapely.geometry import Polygon

coords = [
    [73.92293461614474, 18.572358142391067],
    [73.92293461614474, 18.421937226864767],
    [74.13922795110568, 18.421937226864767],
    [74.13922795110568, 18.572358142391067]
]
polygon = Polygon(coords)

# Querying OSM places (villages, towns, cities) within polygon
tags = {"place": ["village", "town", "city"]}
gdf = ox.features_from_polygon(polygon, tags=tags)

settlements = gdf[["name", "place", "geometry"]].reset_index(drop=True)

print(settlements)
print(f"Total settlements found: {len(settlements)}")
