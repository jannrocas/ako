module.exports = function (shipit) {
	require('shipit-deploy')(shipit);

	shipit.initConfig({
		default: {
			workspace: '/tmp/ako',
			deployTo: '~/serv/ako',
			repositoryUrl: 'https://github.com/jannrocas/ako.git',
			ignores: ['.git', 'node_modules'],
			keepReleases: 5,
			key: '~/.ssh/id_rsa',
			branch: 'master',
		},
		staging: {
			servers: 'lazyci@jannrocas.com'
		}
	});
};
