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



#### eslint rules说明

	
	"off"或者0    //关闭规则关闭
	"warn"或者1    //在打开的规则作为警告（不影响退出代码）
	"error"或者2    //把规则作为一个错误（退出代码触发时为1）

	
	"no-console": 2,//禁止使用console
	"no-debugger": 2,//禁止使用debugger
	"no-alert": 0,//禁止使用alert confirm prompt
	"no-array-constructor": 2,//禁止使用数组构造器
	"no-caller": 1,//禁止使用arguments.caller或arguments.callee
	"no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
	"no-class-assign": 2,//禁止给类赋值
	"no-const-assign": 2,//禁止修改const声明的变量
	"no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
	"no-dupe-args": 2,//函数参数不能重复
	"no-duplicate-case": 2,//switch中的case标签不能重复
	"no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
	"no-empty": 2,//块语句中的内容不能为空
	"no-eval": 1,//禁止使用eval
	"no-extra-semi": 2,//禁止多余的冒号
	"no-func-assign": 2,//禁止重复的函数声明
	"no-irregular-whitespace": 2,//不能有不规则的空格
	"no-lonely-if": 2,//禁止else语句内只有if语句
	"no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
	"no-multi-spaces": 1,//不能用多余的空格
	"no-multi-str": 2,//字符串不能用\换行
	"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
	"no-nested-ternary": 2,//禁止使用嵌套的三目运算
	"no-new-func": 1,//禁止使用new Function
	"no-new-object": 2,//禁止使用new Object()
	"no-new-require": 2,//禁止使用new require
	"no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
	"no-param-reassign": 2,//禁止给参数重新赋值
	"no-plusplus": 0,//禁止使用++，--
	"no-redeclare": 2,//禁止重复声明变量
	"no-return-assign": 1,//return 语句中不能有赋值表达式
	"no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
	"no-undef": 1,//不能有未定义的变量
	"no-unreachable": 2,//不能有无法执行的代码
	"no-unused-expressions": 2,//禁止无用的表达式
	"no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
	"no-use-before-define": 2,//未定义前不能使用
	"no-var": 0,//禁用var，用let和const代替
	"no-with": 2,//禁用with
	"camelcase": 2,//强制驼峰法命名
	"consistent-this": [2, "that"],//this别名
	"curly": [2, "all"],//必须使用 if(){} 中的{}
	"default-case": 2,//switch语句最后必须有default
	"eqeqeq": 2,//必须使用全等
	"indent": [2, 4],//缩进风格
	"key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
	//"one-var": 2,//连续声明=
	//"quotes": [1, "single"],//引号类型 `` "" ''
	"quote-props":[2, "as-needed"],//对象字面量中的属性名是否强制双引号
	"radix": 2,//parseInt必须指定第二个参数=
	"semi": [2, "always"],//语句强制分号结尾
	"space-after-keywords": [0, "always"],//关键字后面是否要空一格
	"space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
	"space-in-parens": [0, "never"],//小括号里面要不要有空格
	"valid-jsdoc": 0,//jsdoc规则