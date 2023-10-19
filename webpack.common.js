const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
      common: './src/js/common.js',
      index: './src/js/index.js',
      proprietes: './src/js/proprietes.js',
      validationForm: './src/js/validationForm.js',
      fontawesome: [
        './node_modules/@fortawesome/fontawesome-free',
        './node_modules/@fortawesome/fontawesome-free/js/brands.min.js'
      ],
    },

    output: {
        filename: "js/[name].[contenthash].js",
        path: path.resolve(__dirname, './dist')
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    module: {
      rules: [    
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          type: 'asset', 
          generator: {
            filename: 'public/images/slides/[contenthash][ext][query]' // les images insérées à partir du css(background-image)
          }
        },
        
        {
          test: /\.(woff|woff2|ttf|eot|svg)$/,
          type: 'asset',
          generator: {
            filename: 'font/[contenthash][ext][query]'
          }
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], // permet de convertir le code ES6+ en code ES5 compatible avec les navigateurs actuels.
            }
          }
        }
      ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!**/.htaccess'],
    }), 
    new HtmlWebpackPlugin({
      filename: 'index.html', // génère un fichier qui s'appelle "index.html"
      template: './src/index.html', 
      chunks: ['common','index','fontawesome'],
      inject: 'body', // Cette option spécifie que les balises <script> soit injecté dans le body
    }), 
    new HtmlWebpackPlugin({
      filename: 'proprietes.html',
      template: './src/proprietes.html',
      chunks: ['common','proprietes','fontawesome'],
      inject: 'body', // Cette option spécifie que les balises <script> soit injecté dans le body
    }), 
    new HtmlWebpackPlugin({
      filename: 'nous-connaitre.html',
      template: './src/nous-connaitre.html',
      chunks: ['common','validationForm','fontawesome'],
      inject: 'body', // Cette option spécifie que les balises <script> soit injecté dans le body
    }), 
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/contacts.html',
      chunks: ['common','validationForm','fontawesome'],
      inject: 'body', // Cette option spécifie que les balises <script> soit injecté dans le body
    }), 
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: './src/blog.html',
      chunks: ['common','fontawesome'],
      inject: 'body', // Cette option spécifie que les balises <script> soit injecté dans le body
    }), 
    new HtmlWebpackPlugin({
      filename: 'blog-single-article1.html',
      template: './src/blog-single-article1.html',
      chunks: ['common','validationForm','fontawesome'],
      inject: 'body', // Cette option spécifie que les balises <script> soit injecté dans le body
    }), 
    new HtmlWebpackPlugin({
      filename: 'blog-single-article2.html',
      template: './src/blog-single-article2.html',
      chunks: ['common','validationForm','fontawesome'],
      inject: 'body', // Cette option spécifie que les balises <script> soit injecté dans le body
    }), 
    new HtmlWebpackPlugin({
      filename: 'blog-single-article3.html',
      template: './src/blog-single-article3.html',
      chunks: ['common','validationForm','fontawesome'],
      inject: 'body', // Cette option spécifie que les balises <script> soit injecté dans le body
      }), 
      new HtmlWebpackPlugin({
        filename: 'error404.html',
        template: './src/error404.html',
        chunks: ['common','fontawesome'],
        inject: 'body', // Cette option spécifie que les balises <script> soit injecté dans le body
      }), 
         
  ],
}

/* NB: Les modules d'actifs sont principalement utilisés pour gérer les fichiers d'actifs tels que les images,
 les polices, etc. au lieu des loaders,  lien: https://webpack.js.org/guides/asset-modules/*/

/* NB: type: 'asset'  : Cette option permet à Webpack de choisir automatiquement entre asset/resource et asset/inline
 en fonction de la taille de l'actif. Si la taille de l'actif est inférieure à un certain seuil (la limite par défaut
   est généralement de 8 Ko), il sera émis sous forme d'URL de données (asset/inline), sinon, il sera émis en tant que
   fichier séparé (asset/resource). Cela vous permet de tirer parti de l'efficacité des URL de données pour les fichiers
    plus petits tout en évitant de surcharger le bundle avec de gros fichiers. */



    
    