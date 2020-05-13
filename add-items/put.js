
if ('caches' in window) {
// Retrieve cats.json and cache the response
newCache.put('./cats.json')

// Create a new entry for cats.json and store the generated response
newCache.put('/cats.json', new Response('{"james": "kitten", "daniel": "kitten"}'))

// Fetch a response from an external address and create a new entry for cats.json
newCache.put('https://pets/cats.json');
}
