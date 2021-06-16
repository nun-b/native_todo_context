# ReactNative

## 1.  React-native init [name]

+ react-native init [name]
+ npx react-native init [name] --template react-native-template-typescript

```
$ npm install --save-dev babel-plugin-root-import
$ npm install --save styled-components
$ npm install --save-dev @types/styled-components @types/styled-components-react-native
// babel
$ npm install --save-dev babel-plugin-styled-components
```
```
// babel.config.js
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'babel-plugin-styled-components',
            'babel-plugin-root-import',
            {
                rootPathPrefix: '~',
                rootPathSuffix: 'src',
            },
        ],
    ],
};
```

```
// tsconfig.js
"baseUrl": "./src",
"paths": {
	"~/*": ["*"]
},  
```



## 2. npm package

+ npm package
