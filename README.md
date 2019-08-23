# national-grid

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录结构
	node-modules			//第三方库存放文件
	public					//静态文件
		favicon.ico  		//项目网站ico图标
		index.html			//项目唯一html文件
	src						//开发代码文件
		assets				//静态资源
			css						
				reset.css		//样式重置
			img					//项目图片资源
		components				//组件存放文件
		config					//配置文件
			globalConfig.js		//全局配置文件
		fetch					//请求相关
			api					//后端api分类文件
				index.js		//后端api统一对外提供接口
			http.js				//封装请求方式
		pages					//页面资源
		router					//路由
			index.js
		store					//状态管理
			modules				//状态管理分模块			
			index.js
		utils					//工具方法方法存放文件
			common.js			//全局公用方法
		App.vue				
		main.js				//项目入口文件
	.gitignore				//git忽略文件配置	
	babel.config.js			//babel配置文件
	package.json			//第三方依赖管理文件
	README.md				//项目说明书
	vue.config.js			//vue配置文件