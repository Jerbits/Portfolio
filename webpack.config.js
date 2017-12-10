const webpack = require('webpack');
const path = require('path');
const Extractplugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');


let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	resolve: { // These options change how modules are resolved
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'], // Automatically resolve certain extensions
    alias: { // Create aliases
      images: path.resolve(__dirname, 'src/assets/images')  // src/assets/images alias
    }
  },
	module: {
    rules: [
	    {
	      test: /\.js$/,
	      exclude: /node_modules/, 
	      loader: "babel-loader" 
	    },
	    {
			  test: /\.scss$/, 
			  use: ['css-hot-loader'].concat(Extractplugin.extract({
			    fallback: 'style-loader',
			    use: ['css-loader', 'sass-loader', 'postcss-loader'],
			        
			  })),
			},
	    {
	      test: /\.html$/,
	      loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
    	},
    	{
	      test: /\.jsx$/,
	      exclude: /node_modules/,
	      loader: "babel-loader" 
    	},
    	{
	       test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {  // images loader
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
    	}
    ]
  },
  plugins: [
		new Extractplugin('styles.css'),
    new webpack.ProvidePlugin({
	    $: 'jquery',
	    jQuery: 'jquery',
	    'window.jQuery': 'jquery',
	    tether: 'tether',
	    Tether: 'tether',
	    'window.Tether': 'tether',
		})
  ],
  devServer: {
  	contentBase: path.resolve(__dirname, './build'),
  	historyApiFallback: true,
  	inline: true,
  	open: true
  },
  devtool: 'eval-source-map'
}

module.exports = config;

if(process.env.NODE_ENV === 'production'){
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new OptimizeCSSAssets()
	)
}