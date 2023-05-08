const {windyInit,L} = window

const options = {
    // Required: API key
    key: '3sQ3ywAZ5zeoRKDIr56YyOvrpB6NytUy', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 35.084579,
    lon: 129.105645,
    zoom: 11,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([35.084579,  129.105645])
        .setContent('Busan')
        .openOn(map);
});

