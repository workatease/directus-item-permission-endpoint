
/**
 * @type {import('directus/').defineEndpoint}
 *
 */
 import { defineEndpoint } from '@directus/extensions-sdk';
export default defineEndpoint((router,{services,logger}) => {
	const { AuthorizationService } = services;
	router.get('/:collection/:action/:id', async (_req:any, res:any) => {
		const { collection, action, id } = _req.params;
		const options = { schema: _req.schema, accountability: _req.accountability };
		try {
			const authorizationService = new AuthorizationService(options);
			await authorizationService.checkAccess(action,collection,id);
			res.send(true);
		} catch (error) {
			logger.error(error);
			res.send(false);
		}
	});
});
