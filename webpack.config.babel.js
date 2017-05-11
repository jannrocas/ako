import path from 'path';

const config = {
	entry: {
		js: './src/index.js',
	},
	output: {
		path: path.join(__dirname, 'src', 'static', 'js'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: path.join(__dirname, 'src'),
				use: {
					loader: 'babel-loader',
					options: 'cacheDirectory=.babel_cache',
				},
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			},
		],
		loaders: [{
			test: /\.css$/,
			loader: 'style!css!'
		}],
	},
	plugins: [],
};

export default config;
