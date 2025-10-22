'use client';

import React from 'react';
import SmallMap, { MapLayer } from './SmallMap';

/**
 * Simple demo page for SmallMap component
 * This can be used to test the map implementation
 */

// Example: Puy de Dôme area with takeoff points
const takeoffPoints: MapLayer = {
    id: 'takeoff-points',
    source: {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [2.9634, 45.7725], // Puy de Dôme summit
                    },
                    properties: {
                        name: 'Sommet',
                        type: 'summit',
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [2.9638, 45.7735], // North takeoff
                    },
                    properties: {
                        name: 'Déco Nord',
                        type: 'takeoff',
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [2.9615, 45.7725], // West takeoff
                    },
                    properties: {
                        name: 'Déco Ouest',
                        type: 'takeoff',
                    },
                },
            ],
        },
    },
    layer: {
        id: 'takeoff-points-layer',
        type: 'circle',
        paint: {
            'circle-radius': 6,
            'circle-color': '#ff6b35',
            'circle-stroke-color': '#ffffff',
            'circle-stroke-width': 2,
        },
    },
};

// Example: Landing zones
const landingZones: MapLayer = {
    id: 'landing-zones',
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
                                [2.970, 45.768],
                                [2.975, 45.768],
                                [2.975, 45.765],
                                [2.970, 45.765],
                                [2.970, 45.768],
                            ],
                        ],
                    },
                    properties: {
                        name: 'Zone Atterrissage',
                    },
                },
            ],
        },
    },
    layer: {
        id: 'landing-zones-layer',
        type: 'fill',
        paint: {
            'fill-color': '#4ecdc4',
            'fill-opacity': 0.3,
        },
    },
};

const SmallMapDemo: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>SmallMap Component Demo</h1>
            
            <div style={{ marginBottom: '40px' }}>
                <h2>1. Basic Map</h2>
                <SmallMap
                    center={[2.963, 45.772]}
                    zoom={12}
                    height="300px"
                />
            </div>

            <div style={{ marginBottom: '40px' }}>
                <h2>2. Map with Takeoff Points</h2>
                <SmallMap
                    center={[2.963, 45.772]}
                    zoom={13}
                    height="400px"
                    layers={[takeoffPoints]}
                />
            </div>

            <div style={{ marginBottom: '40px' }}>
                <h2>3. Map with Landing Zones and Takeoff Points</h2>
                <SmallMap
                    center={[2.963, 45.770]}
                    zoom={12}
                    height="500px"
                    layers={[landingZones, takeoffPoints]}
                />
            </div>

            <div style={{ marginBottom: '40px' }}>
                <h2>4. Dark Theme Map</h2>
                <SmallMap
                    center={[2.963, 45.772]}
                    zoom={12}
                    height="400px"
                    style="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
                    layers={[takeoffPoints]}
                />
            </div>
        </div>
    );
};

export default SmallMapDemo;
