let cahcheData = 'expense-tracker';

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cahcheData).then((data) => {
            data.addAll([
                'index.html',
                '/',
                '/static/js/bundle.js',
                '/static/js/0.chunk.js',
                '/static/js/main.chunk.js',
                '/manifest.json',
                '/static/media/dashboard.1c3c8c05.png',
                '/static/media/add.973efc87.png',
                '/static/media/all.f90444fc.png',
                '/static/media/profile.825e7c4b.png',
            ])
        }).catch((err) => {
            console.log('err', err)
        })
    )
})



this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }


                return fetch(event.request);
            }
            )
    );
});

