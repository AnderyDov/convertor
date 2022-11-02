const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProgressPlugin } = require("webpack");
const { DefinePlugin } = require("webpack");
// const WebpackPluginInstance = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env) => {
  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";

  const config = {
    mode: mode,
    entry: resolve(__dirname, "src", "index.js"),
    output: {
      filename: "[name].[contenthash].js",
      path: resolve(__dirname, "./build"),
      clean: true,
      publicPath: "/",
      pathinfo: false
    },

    devtool: isDev ? "inline-source-map" : undefined,

    devServer: isDev
      ? {
          static: "./build",
          open: true,
          hot: true,
          port: PORT,
          proxy: [
            {
              context: "/*",
              target: "http://localhost:4000"
            }
          ]
        }
      : undefined,

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
        title: "TTT"
      }),
      new ProgressPlugin(),
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev)
      })
    ],

    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader"
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico|pdf)$/i,
          type: "asset/resource"
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: "asset/inline"
        },
        {
          test: /\.(csv|tsv)$/i,
          use: ["csv-loader"]
        },
        {
          test: /\.xml$/i,
          use: ["xml-loader"]
        }
      ]
    }
  };

  if (isDev) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
    );
  }

  return config;
};
