const path = require('path')
const { merge }  = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge (common, { //fusionne le fichier "webpack.common.js" avec cet objet
  mode: 'development',
  // watch: true,  //Si on utilise dev-server initule de mettre watch(avec dev-server, watch=true)
  devtool: 'source-map', //permet de générer le source-map
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    port: 3000,
    liveReload: true,
    open: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
        'style-loader', // Injecte les styles dans le HTML  
        {
          loader: "css-loader",  // Le css sera injecté dans le fichier javassrcit de webpack
          options: {
            sourceMap: true,
          },
        },         
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
            sourceMap: true,
          },
        },
        ],
      },
    ]
  },
})