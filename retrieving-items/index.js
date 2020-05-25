if ('caches' in window) {
    const newCache = await caches.open('new-cache');

    // Create a new entry for cats.json and store the generated response
    newCache.put('/cats.json', new Response('{"james": "kitten", "daniel": "kitten"}'))
    
    // retrieve a response
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



