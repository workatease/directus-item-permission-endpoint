import { defineEndpoint } from '@directus/extensions-sdk';

export default defineEndpoint((router) => {
	router.get('/permission/', 
	(_req, res) => res.send('Hello, World!')
	);
});
