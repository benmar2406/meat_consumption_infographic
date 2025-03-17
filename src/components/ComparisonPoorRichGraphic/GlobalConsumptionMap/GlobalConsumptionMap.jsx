import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

function GlobalConsumptionMap() {
    const mapRef = useRef();
    const mapContainerRef = useRef();
    const [hoveredCountry, setHoveredCountry] = useState(null);  // Ensure useState is imported
    const [meatConsumption, setMeatConsumption] = useState(null);  // Ensure useState is imported


    useEffect(() => {

        mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubWFyYmUiLCJhIjoiY203eGI1NnJ2MDNxdDJrc2NneWYzNmgxNSJ9.3Mmxh-ikK_Mfh6hLHGiaGg';  // Use your Mapbox access token

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [11.424338, 36.439782],
            style: 'mapbox://styles/benmarbe/cm8cyh0u0003301r0506uei0g', // Map style URL
            zoom: 1,
            projection: 'mercator',
            maxZoom: 6,
            minZoom: 1
        });

        // Add zoom and rotation controls
        const navControl = new mapboxgl.NavigationControl();
        mapRef.current.addControl(navControl, 'top-right');

        // Handle map resizing
        const handleResize = () => {
            mapRef.current.resize();
        };

        window.addEventListener('resize', handleResize);

        // Create a new popup instance
        const popup = new mapboxgl.Popup({
            closeButton: false,  // Prevent the popup from having a close button
            closeOnClick: false  // Prevent the popup from closing when clicking on the map
        });

        // Mouse move event to show the popup on hover
        mapRef.current.on('mousemove', (e) => {
            // Query the features under the mouse cursor
            const features = mapRef.current.queryRenderedFeatures(e.point, {
                layers: ['consumption-capita-global-9o7zj4']  // Ensure this is the correct layer
            });

            if (features.length > 0) {
                const feature = features[0];  // Get the first feature under the mouse
                const countryName = feature.properties.ADMIN || 'No data available';  // Use appropriate property name
                setHoveredCountry(countryName);  // Update the hovered country in the state
                const meatConsumption = feature.properties["Kilograms of Meat consumed per capita/year"].toFixed(0) || 'No data available';  // Use appropriate property name
                setMeatConsumption(meatConsumption);  // Update the hovered country in the state

                // Set the popup content and position
                popup.setLngLat(e.lngLat)
                    .setHTML(`<div id="popup-text"><p id="popup-country">${countryName}:</p><p id="popup-consumption">${meatConsumption} kg of meat consumed per capita in 2021.</p></div>`)
                    .addTo(mapRef.current);
            } else {
                popup.remove();  // Remove the popup if no features are under the mouse
                console.log('No features found');
            }
        });

        // Mouse leave event to remove the popup
        mapRef.current.on('mouseleave', () => {
            popup.remove();  // Remove the popup when the mouse leaves the map
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
