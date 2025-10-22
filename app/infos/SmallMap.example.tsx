/**
 * Example usage of SmallMap component with different layer types
 * 
 * This file demonstrates how to use the SmallMap component with:
 * - GeoJSON Point features (markers)
 * - GeoJSON LineString features (routes/paths)
 * - GeoJSON Polygon features (areas/zones)
 */

import React from 'react';
import SmallMap, { MapLayer } from './SmallMap';

// Example 1: Simple markers (Points)
const pointLayer: MapLayer = {
    id: 'markers',
    source: {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [2.963, 45.772], // Puy de Dôme summit
                    },
                    properties: {
                        name: 'Sommet du Puy de Dôme',
                        type: 'summit',
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [3.018, 45.773], // Example takeoff
                    },
                    properties: {
                        name: 'Décollage Nord',
                        type: 'takeoff',
                    },
                },
            ],
        },
    },
    layer: {
        id: 'markers-layer',
        type: 'circle',
        paint: {
            'circle-radius': 8,
            'circle-color': '#ff0000',
            'circle-stroke-color': '#ffffff',
            'circle-stroke-width': 2,
        },
    },
};

// Example 2: Flight path (LineString)
const lineLayer: MapLayer = {
    id: 'flight-path',
    source: {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        coordinates: [
                            [2.963, 45.772],
                            [2.980, 45.760],
                            [3.000, 45.750],
                            [3.020, 45.745],
                        ],
                    },
                    properties: {
                        name: 'Example Flight Path',
                        distance: '5.2 km',
                    },
                },
            ],
        },
    },
    layer: {
        id: 'flight-path-layer',
        type: 'line',
        paint: {
            'line-color': '#0066ff',
            'line-width': 3,
            'line-opacity': 0.8,
        },
    },
};

// Example 3: Restricted zone (Polygon)
const polygonLayer: MapLayer = {
    id: 'restricted-zone',
    source: {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            [
                                [2.950, 45.780],
                                [2.970, 45.780],
                                [2.970, 45.765],
                                [2.950, 45.765],
                                [2.950, 45.780],
                            ],
                        ],
                    },
                    properties: {
                        name: 'Zone Restreinte',
                        type: 'restricted',
                    },
                },
            ],
        },
    },
    layer: {
        id: 'restricted-zone-layer',
        type: 'fill',
        paint: {
            'fill-color': '#ff0000',
            'fill-opacity': 0.3,
        },
    },
};

// Example 4: Zone with border
const zoneWithBorderLayers: MapLayer[] = [
    {
        id: 'zone-fill',
        source: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Polygon',
                            coordinates: [
                                [
                                    [3.000, 45.780],
                                    [3.030, 45.780],
                                    [3.030, 45.760],
                                    [3.000, 45.760],
                                    [3.000, 45.780],
                                ],
                            ],
                        },
                        properties: {
                            name: 'Landing Zone',
                        },
                    },
                ],
            },
        },
        layer: {
            id: 'zone-fill-layer',
            type: 'fill',
            paint: {
                'fill-color': '#00ff00',
                'fill-opacity': 0.2,
            },
        },
    },
    {
        id: 'zone-border',
        source: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Polygon',
                            coordinates: [
                                [
                                    [3.000, 45.780],
                                    [3.030, 45.780],
                                    [3.030, 45.760],
                                    [3.000, 45.760],
                                    [3.000, 45.780],
                                ],
                            ],
                        },
                        properties: {
                            name: 'Landing Zone',
                        },
                    },
                ],
            },
        },
        layer: {
            id: 'zone-border-layer',
            type: 'line',
            paint: {
                'line-color': '#00ff00',
                'line-width': 2,
            },
        },
    },
];

// Example component using the map
export const SmallMapExample1: React.FC = () => {
    return (
        <div>
            <h3>Example 1: Simple Map with Markers</h3>
            <SmallMap
                center={[2.963, 45.772]}
                zoom={11}
                height="400px"
                layers={[pointLayer]}
            />
        </div>
    );
};

export const SmallMapExample2: React.FC = () => {
    return (
        <div>
            <h3>Example 2: Map with Flight Path</h3>
            <SmallMap
                center={[2.990, 45.755]}
                zoom={11}
                height="400px"
                layers={[pointLayer, lineLayer]}
            />
        </div>
    );
};

export const SmallMapExample3: React.FC = () => {
    return (
        <div>
            <h3>Example 3: Map with Restricted Zone</h3>
            <SmallMap
                center={[2.963, 45.772]}
                zoom={11}
                height="400px"
                layers={[polygonLayer]}
            />
        </div>
    );
};

export const SmallMapExample4: React.FC = () => {
    return (
        <div>
            <h3>Example 4: Complete Map with All Layers</h3>
            <SmallMap
                center={[2.990, 45.770]}
                zoom={11}
                height="500px"
                layers={[
                    polygonLayer,
                    ...zoneWithBorderLayers,
                    lineLayer,
                    pointLayer,
                ]}
            />
        </div>
    );
};

// Complete example with custom style
export const SmallMapExampleCustomStyle: React.FC = () => {
    return (
        <div>
            <h3>Example 5: Map with Dark Theme</h3>
            <SmallMap
                center={[2.963, 45.772]}
                zoom={11}
                height="400px"
                style="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
                layers={[pointLayer, lineLayer]}
            />
        </div>
    );
};
