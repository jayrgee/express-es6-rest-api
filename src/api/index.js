import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import databases from './databases';
import products from './products';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));
	api.use('/databases', databases);
	api.use('/products', products);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
