



if ('caches' in window) {
    const newCache = await caches.open('new-cache');
    
    // retrieve a new response
    const request = '/cats.json';
    const response = await newCache.match(request);


    // create an options object
    const options = {
        ignoreVary: true, // ignore differences in Headers
        ignoreMethod: true, // ignore differences in HTTP methods
        ignoreSearch: true // ignore differences in query strings
        }
        
        // then we pass it in here
        const response = await newCache.match(request, options);
}



