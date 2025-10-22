'use client';

import React, { useRef } from 'react';
import {
    Map,
    Layer,
    Source,
    NavigationControl,
    FullscreenControl,
} from '@vis.gl/react-maplibre';
import type { LayerProps, SourceProps } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export type MapLayer = {
    id: string;
    source: SourceProps;
    layer: LayerProps;
};

export type SmallMapProps = {
    center?: [number, number];
    zoom?: number;
    width?: string | number;
    height?: string | number;
    layers?: MapLayer[];
    style?: string;
};

const SmallMap: React.FC<SmallMapProps> = ({
    center = [2.963, 45.772],
    zoom = 10,
    width = '100%',
    height = '400px',
    layers = [],
    style = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
}) => {
    const mapRef = useRef(null);

    return (
        <div style={{ width, height }}>
            <Map
                ref={mapRef}
                initialViewState={{
                    longitude: center[0],
                    latitude: center[1],
                    zoom: zoom,
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle={style}
            >
                <NavigationControl position="top-right" />
                <FullscreenControl position="top-right" />

                {layers.map((mapLayer) => (
                    <Source key={mapLayer.id} {...mapLayer.source}>
                        <Layer {...mapLayer.layer} />
                    </Source>
                ))}
            </Map>
        </div>
    );
};

export default SmallMap;
