



if ('caches' in window) {
    const newCache = await caches.open('new-cache');
    newCache.add('/cats.json')
}

// or using a Request object

if ('caches' in window) {
    const newCache = await caches.open('new-cache');
    const options = {
        method: "GET",
        headers: new Headers({
		    'Content-Type': 'text/html'
	    }),
      }
    newCache.add(new Request('/cats.json', options))
}
