import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

function GlobalConsumptionMap() {
    
    const mapRef = useRef();
    const mapContainerRef = useRef(); 


    useEffect(() => {

        mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubWFyYmUiLCJhIjoiY204ZGdqbmk2MjIxcjJrczd5cjhnOWc5ZiJ9.aNWSLi175awDsnHX7mZIlQ';  // Use your Mapbox access token

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [11.424338, 36.439782],
            style: 'mapbox://styles/benmarbe/cm8cyh0u0003301r0506uei0g', 
            zoom: 1,
            projection: 'mercator',
            maxZoom: 6,
            minZoom: 1
        });

        // Add zoom and rotation controls
        const navControl = new mapboxgl.NavigationControl();
        mapRef.current.addControl(navControl, 'top-right');

        // cursor
        mapRef.current.getCanvas().style.cursor = 'default';

        // Handle map resizing
        const handleResize = () => {
            mapRef.current.resize();
        };

        window.addEventListener('resize', handleResize);

        // Create a new popup instance
        const popup = new mapboxgl.Popup({
            closeButton: false,  
            closeOnClick: false  
        });
        mapRef.current.on('mousemove', (e) => {
            const features = mapRef.current.queryRenderedFeatures(e.point, {
                layers: ['consumption-capita-global-9o7zj4']  
            });

            if (features.length > 0) {
                const feature = features[0];  
                const countryName = feature.properties.ADMIN || 'No data available'; 
                const meatConsumption = feature.properties["Kilograms of Meat consumed per capita/year"].toFixed(0) || 'No data available';  

                // Set the popup content and position
                popup.setLngLat(e.lngLat)
                    .setHTML(`<div id="popup-text"><p id="popup-country">${countryName}:</p><p id="popup-consumption">${meatConsumption} kg of meat consumed per capita (2021).</p></div>`)
                    .addTo(mapRef.current);
            } else {
                popup.remove();  
            }
        });

        // Mouse leave event to remove the popup
        mapRef.current.on('mouseleave', () => {
            popup.remove();  
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mapRef.current) {
                mapRef.current.remove();
            }
        };
    }, []);

    return (
        <>
            <div id='map-container' ref={mapContainerRef} />
        </>
    );
}

export default GlobalConsumptionMap;
