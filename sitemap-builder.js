require('@babel/register')({
	...require('./babel.config.js')
})

require.extensions['.css'] = function () {
  return null;
};

require.extensions['.png'] = function () {
  return null;
};

require.extensions['.svg'] = function () {
  return null;
};

require.extensions['.jpg'] = function () {
  return null;
};

const Sitemap = require('react-router-sitemap').default;
const router = require('./src/router').default;

const filterConfig = {
	isValid: false,
	rules: [
		/\/auth/,
		/\*/,
	],
};

const paramsConfig = {
	'/projects/:projectName': [
		{ projectName: 'hello-world' },
		{ projectName: 'second-project' },
		{ projectName: ['third-project', 'fourth-project'] },
		// projects
	],
	'/projects/:projectName/view': [
		{ projectName: 'hello-world' },
		{ projectName: 'second-project' },
		{ projectName: ['third-project', 'fourth-project'] },
		// projects
	],
	'/projects/:projectName/achievements/:achievement': [
		{ projectName: 'hello-world' },
		{ projectName: 'second-project' },
		{ projectName: ['third-project', 'fourth-project'] },
		// projects
	]
};

(
	new Sitemap(router)
		.filterPaths(filterConfig)
		.applyParams(paramsConfig)
		.build('http://my-site.ru', { limitCountPaths: 5000 })
		.save('./sitemap.xml', '/static/')
);
