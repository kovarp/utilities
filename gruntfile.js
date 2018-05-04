module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig(
		{
			watch:  {
				js: {
					files: ['src'],
					tasks: ['uglify']
				}
			},
			uglify: {
				options:   {
					preserveComments: 'some'
				},
				my_target: {
					files: {
						'dist/scrolling.min.js': 'src/scrolling.js',
						'dist/intersection.min.js': 'src/intersection.js'
					}
				}
			}
		}
	);

	grunt.registerTask('default', ['build', 'watch']);
	grunt.registerTask('build', ['uglify']);
};
