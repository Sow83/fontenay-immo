const  { merge }  = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge (common, { //fusionne le fichier "webpack.common.js" avec cet objet de configuration
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [ 
        MiniCssExtractPlugin.loader, // Remplace 'style-loader' pour générer un fichier css
        "css-loader",  // Le css sera injecté dans le fichier javassrcit de webpack      
        {
          loader: 'postcss-loader', //Injecte les prefixes css
          options: {
            postcssOptions: {
              plugins: [
                require('autoprefixer'), // Configuration du plugin PostCSS 'autoprefixer'
                {
                    'postcss-preset-env': {  // facilite le processus d'écriture de CSS moderne en permettant d'utiliser des fonctionnalités avancées
                      autoprefixer: {
                        grid: true, // Activer les préfixes pour les propriétés de la grille CSS (ex. display: grid;)
                      },
                      stage: 3, // Active les fonctionnalités au stade 3 du processus TC39
                      // Le stade 3 signifie que nous activons des fonctionnalités CSS modernes en cours de développement,
                      // même si elles ne sont pas encore pleinement standardisées.
                    },
                },
              ],
              
            }
          }
        },
        {
          loader: "sass-loader",  // Compile le Sass en CSS
          options: {
            sassOptions: {
              outputStyle: "expanded",
            },
          },
        },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css", // va extraire le css qui est dans common.js(main.css) et dans index.js(vendorsSwiper) et met les balises link
    }),
    new CopyPlugin({
      patterns: [
        {
           from: "./src/public/images", 
           to: "public/images",
           globOptions: {
            ignore: ["**/slides/**"],
          },
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ['imagemin-mozjpeg', { quality: 80, progressive: true }],
              ['imagemin-pngquant', { quality: [0.6, 0.8] }],
              'imagemin-svgo',
            ],
          }
        }
      })
    ]
  },
  //   optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  // splitChunks: permet de ne pas dupliqué le code si on a une  dépendance qui est importé sur plusieurs pages:
  //Par exemple "header.js" importé sur plusieurs fichiers ou bootstrap ect...
})

/* NB: Lorsqu'on utilise optimization.minimizer(optimization: {minimizer: []}) nous écrasons les valeurs par defaut
 qui sont fournies par webpack, autrement dit nous avons écrasés le TerserPlugin (c'est une option présent par défaut)
 de webpack qui permet de minifier automatiquement les fichiers js. Donc on doit installer le TerserPlugin de webpack
 et l'instancié dans minimizer. L'option "parallel" de TerserPlugin accèlère la vistesse de construction des fichiers.
*/