if ('caches' in window) {
    const newCache = await caches.open('new-cache');

    // delete an existing cache
    caches.delete('new-cache');
}