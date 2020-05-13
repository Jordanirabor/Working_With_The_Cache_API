


if ('caches' in window) {
    const newCache = await caches.open('new-cache');
    const urls = ['pets/cats.json', 'pets/dogs.json'];
    newCache.addAll(urls);
}



