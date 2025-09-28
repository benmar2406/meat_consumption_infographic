import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTranslation } from 'react-i18next';
import './AccordionMap.css'

function GlobalConsumptionMapBubble() {
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    const { i18n } = useTranslation();
    const popupRef = useRef(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;
        mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubWFyYmUiLCJhIjoiY204ZGdqbmk2MjIxcjJrczd5cjhnOWc5ZiJ9.aNWSLi175awDsnHX7mZIlQ';
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [11.424338, 36.439782],
            style: 'mapbox://styles/benmarbe/cmfz0pp3y00gh01si1r789fjh',
            zoom: 1.3,
            projection: 'mercator',
            maxZoom: 6,
            minZoom: 1
        });

        popupRef.current = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        mapRef.current.on('load', () => {

            console.log(mapRef.current.getStyle().layers);

            const layerId = "meat-production-bubbles-57aoqq"

            if (!mapRef.current.getLayer(layerId)) {
                console.error("Layer not found!");
                return;
            };

            mapRef.current.setPaintProperty(
                layerId,
                'circle-radius',    
                [
                    'interpolate',
                    ['linear'],
                    ['get', "Meat, total | 00001765 || Production | 005510 || tonnes"],
                    0, 0,          // Minimum size (radius 5) for value 0
                    10000000, 30  // Maximum size (radius 30) for value 100,000,000
                ]
            );

            // Update the circle-color paint property
            mapRef.current.setPaintProperty(
                layerId,
                'circle-color',
                '#ff3e2c'
            );

            mapRef.current.setPaintProperty(layerId, 'circle-opacity', 0.7);


            const navControl = new mapboxgl.NavigationControl();
            mapRef.current.addControl(navControl, 'top-right');

            const mapLangControl = new MapboxLanguage({
                defaultLanguage: i18n.language || 'en'
            });
            mapRef.current.addControl(mapLangControl);
            
            mapRef.current.on('mousemove', layerId, (e) => {
                const feature = e.features[0];
                const countryName = feature.properties.COUNTRY || "Unknown";
                const meatProduction = feature.properties["Meat, total | 00001765 || Production | 005510 || tonnes"] || "No data";

                popupRef.current.setLngLat(e.lngLat)
                    .setHTML(`
                        <div id="popup-text">
                            <p id="popup-country">${countryName}</p>
                            <p id="popup-consumption">${meatProduction.toLocaleString(i18n.language).replace(/,/g, '')} ${meatProduction === "No data" ? "" : "tonnes"}</p>
                        </div>
                    `)
                    .addTo(mapRef.current);
            });

            mapRef.current.on('mouseleave', layerId, () => {
                popupRef.current.remove();
            });
        });

        const handleResize = () => {
            if (mapRef.current) mapRef.current.resize();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mapRef.current) mapRef.current.remove();
        };
    }, [i18n.language]);

    return (
        <div id="map-container" ref={mapContainerRef} />
    );
}

export default GlobalConsumptionMapBubble;
