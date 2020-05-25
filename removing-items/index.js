if ('caches' in window) {
    const newCache = await caches.open('new-cache');
    
    // delete a cache entry
    const request = '/cats.json';
    newCache.delete(request);
}