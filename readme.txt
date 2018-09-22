npm init -y --> it will create brand new package.json file with default settings.

npm install react react-dom --> it will install react and react-dom libraries.
you can see these packages in dependencies section in package.json and libraries and dependent libraries in node-modules folder.

Create .gitignore file add node_mode and dist folder entries.

mkdir app
cd app
touch index.js index.css

Create a component in index.js file

execute the command to install webpack,html-webpack-plugin,babel,css loader, style loader.
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin

create webpack.config.js in root foler.

update package.json

run the below command
npm run create

instead of above command use "npm run start" command to build the code and open the index.html in browser window.

if you want to use the same command for production update the sart command in package.json file with below command and use the command to start the app "npm run start"
  "start": "webpack"
