"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8762],{3905:function(e,n,i){i.d(n,{Zo:function(){return s},kt:function(){return g}});var t=i(67294);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,l=function(e,n){if(null==e)return{};var i,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var c=t.createContext({}),p=function(e){var n=t.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},_=t.forwardRef((function(e,n){var i=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),_=p(i),g=l,d=_["".concat(c,".").concat(g)]||_[g]||u[g]||a;return i?t.createElement(d,r(r({ref:n},s),{},{components:i})):t.createElement(d,r({ref:n},s))}));function g(e,n){var i=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=i.length,r=new Array(a);r[0]=_;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<a;p++)r[p]=i[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}_.displayName="MDXCreateElement"},81291:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return _}});var t=i(87462),l=i(63366),a=(i(67294),i(3905)),r=["components"],o={title:"\u5f15\u64ce\u7684\u5b89\u88c5",sidebar_position:3},c=void 0,p={unversionedId:"deployment/engine_conn_plugin_installation",id:"deployment/engine_conn_plugin_installation",isDocsHomePage:!1,title:"\u5f15\u64ce\u7684\u5b89\u88c5",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdLinkis\u5f15\u64ce\u63d2\u4ef6\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u4ece\u7f16\u8bd1\u3001\u5b89\u88c5\u7b49\u65b9\u9762\u8fdb\u884c\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/engine_conn_plugin_installation.md",sourceDirName:"deployment",slug:"/deployment/engine_conn_plugin_installation",permalink:"/zh-CN/docs/1.1.2/deployment/engine_conn_plugin_installation",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/engine_conn_plugin_installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5f15\u64ce\u7684\u5b89\u88c5",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5206\u5e03\u5f0f\u90e8\u7f72",permalink:"/zh-CN/docs/1.1.2/deployment/cluster_deployment"},next:{title:"\u5b89\u88c5\u540e\u7684\u7a0b\u5e8f\u76ee\u5f55\u7ed3\u6784",permalink:"/zh-CN/docs/1.1.2/deployment/installation_hierarchical_structure"}},s=[{value:"1. \u5f15\u64ce\u63d2\u4ef6\u7684\u7f16\u8bd1\u6253\u5305",id:"1-\u5f15\u64ce\u63d2\u4ef6\u7684\u7f16\u8bd1\u6253\u5305",children:[]},{value:"2. \u5f15\u64ce\u5b89\u88c5",id:"2-\u5f15\u64ce\u5b89\u88c5",children:[{value:"2.1 \u63d2\u4ef6\u5305\u5b89\u88c5",id:"21-\u63d2\u4ef6\u5305\u5b89\u88c5",children:[]},{value:"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 \u5f15\u64ce\u7684\u8d44\u6e90\u76ee\u5f55",id:"23-\u5f15\u64ce\u7684\u8d44\u6e90\u76ee\u5f55",children:[]},{value:"2.4 \u5e76\u914d\u7f6e\u9ed8\u8ba4\u7684\u5f15\u64ce\u7248\u672c\uff0c\u65b9\u4fbf\u6ca1\u6709\u5e26\u7248\u672c\u7684\u4efb\u52a1\u8fdb\u884c\u63d0\u4ea4(\u53ef\u9009)",id:"24-\u5e76\u914d\u7f6e\u9ed8\u8ba4\u7684\u5f15\u64ce\u7248\u672c\u65b9\u4fbf\u6ca1\u6709\u5e26\u7248\u672c\u7684\u4efb\u52a1\u8fdb\u884c\u63d0\u4ea4\u53ef\u9009",children:[]},{value:"2.5 \u7ba1\u7406\u53f0Configuration\u914d\u7f6e\u4fee\u6539\uff08\u53ef\u9009\uff09",id:"25-\u7ba1\u7406\u53f0configuration\u914d\u7f6e\u4fee\u6539\u53ef\u9009",children:[]},{value:"2.6 \u5f15\u64ce\u5237\u65b0",id:"26-\u5f15\u64ce\u5237\u65b0",children:[]}]}],u={toc:s};function _(e){var n=e.components,i=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdLinkis\u5f15\u64ce\u63d2\u4ef6\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u4ece\u7f16\u8bd1\u3001\u5b89\u88c5\u7b49\u65b9\u9762\u8fdb\u884c\u4ecb\u7ecd")),(0,a.kt)("h2",{id:"1-\u5f15\u64ce\u63d2\u4ef6\u7684\u7f16\u8bd1\u6253\u5305"},"1. \u5f15\u64ce\u63d2\u4ef6\u7684\u7f16\u8bd1\u6253\u5305"),(0,a.kt)("p",null,"linkis\u7684\u5f15\u64ce\u662f\u7531EngineConnManager\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u5f15\u64ce\u63d2\u4ef6\uff08EngineConnPlugin\uff09\u652f\u6301\u5b9e\u65f6\u751f\u6548\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf EngineConnManager \u80fd\u591f\u901a\u8fc7\u6807\u7b7e\u52a0\u8f7d\u5230\u5bf9\u5e94\u7684\u5f15\u64ce\u63d2\u4ef6\uff0c\u9700\u8981\u6309\u7167\u5982\u4e0b\u76ee\u5f55\u7ed3\u6784\u8fdb\u884c\u6253\u5305(\u4ee5hive\u4e3a\u4f8b)\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f\uff1a \u56e0\u4e3a\u73b0\u5728\u6807\u7b7e\u662f\u901a\u8fc7-\u6765\u8fdb\u884c\u62c6\u5206\u503c\u7684\u6240\u4ee5\u7248\u672c\u91cc\u9762\u4e0d\u80fd\u51fa\u73b0-\u5982\u679c\u51fa\u73b0\u53ef\u4ee5\u901a\u8fc7\u7528\u5176\u4ed6\u7b26\u53f7\u4ee3\u66ff\uff0c\u6bd4\u5982engineType\uff1ahive-cdh-2.3.3\uff0c\u4f1a\u62c6\u5206\u9519\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\uff1ahive-2.3.3\uff0c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hive:\u5f15\u64ce\u4e3b\u76ee\u5f55\uff0c\u5fc5\u987b\u4e3a\u5f15\u64ce\u7684\u540d\u5b57\n    \u2514\u2500\u2500 dist  # \u5f15\u64ce\u542f\u52a8\u9700\u8981\u7684\u4f9d\u8d56\u548c\u914d\u7f6e\uff0c\u5f15\u64ce\u4e0d\u540c\u7684\u7248\u672c\u9700\u8981\u5728\u8be5\u76ee\u5f55\u9632\u6b62\u5bf9\u5e94\u7684\u7248\u672c\u76ee\u5f55\n      \u2514\u2500\u2500 v2.3.3 #\u5fc5\u987b\u4ee5v\u5f00\u5934\u52a0\u4e0a\u5f15\u64ce\u7248\u672c\u53f72.3.3\n           \u2514\u2500\u2500 conf # \u5f15\u64ce\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\n           \u2514\u2500\u2500 lib  # \u5f15\u64ce\u63d2\u4ef6\u9700\u8981\u7684\u4f9d\u8d56\u5305\n    \u2514\u2500\u2500 plugin #\u5f15\u64ce\u63d2\u4ef6\u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u7528\u4e8e\u5f15\u64ce\u7ba1\u7406\u670d\u52a1\u5c01\u88c5\u5f15\u64ce\u7684\u542f\u52a8\u547d\u4ee4\u548c\u8d44\u6e90\u7533\u8bf7\n      \u2514\u2500\u2500 2.3.3 # \u5f15\u64ce\u7248\u672c,\u6ca1\u6709V\u5f00\u5934\n        \u2514\u2500\u2500 linkis-engineplugin-hive-1.0.0.jar  #\u5f15\u64ce\u6a21\u5757\u5305\uff08\u53ea\u9700\u8981\u653e\u7f6e\u5355\u72ec\u7684\u5f15\u64ce\u5305\uff09\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u662f\u65b0\u589e\u5f15\u64ce\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003hive\u7684assembly\u914d\u7f6e\u65b9\u5f0f\uff0c\u6e90\u7801\u76ee\u5f55\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-engineconn-plugins/engineconn-plugins/hive/src/main/assembly/distribution.xml")),(0,a.kt)("h2",{id:"2-\u5f15\u64ce\u5b89\u88c5"},"2. \u5f15\u64ce\u5b89\u88c5"),(0,a.kt)("h3",{id:"21-\u63d2\u4ef6\u5305\u5b89\u88c5"},"2.1 \u63d2\u4ef6\u5305\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${linkis_code_dir}/linkis-enginepconn-lugins/engineconn-plugins/{\u63d2\u4ef6\u6a21\u5757\u540d}/\nmvn clean install\n")),(0,a.kt)("h3",{id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,a.kt)("p",null,"\u5c06 2.1 \u6b65\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305,\u4f4d\u4e8e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/engineconn-plugins/{\u63d2\u4ef6\u6a21\u5757\u540d}/target/out/{\u63d2\u4ef6\u6a21\u5757\u540d}\n")),(0,a.kt)("p",null,"\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("h3",{id:"23-\u5f15\u64ce\u7684\u8d44\u6e90\u76ee\u5f55"},"2.3 \u5f15\u64ce\u7684\u8d44\u6e90\u76ee\u5f55"),(0,a.kt)("p",null,"\uff08\u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/lib/linkis-engineconn-plugins"),"\uff09\uff0clinkis-cg-engineconnplugin\u670d\u52a1\u542f\u52a8\u65f6\uff0c\u4f1a\u81ea\u52a8\u68c0\u6d4b\u7269\u6599(\u5f15\u64ce\u7684\u914d\u7f6e\u6587\u4ef6\u548c\u7b2c\u4e09\u65b9Jar\u5305)\u662f\u5426\u9700\u8981\u66f4\u65b0BML\uff08\u7269\u6599\u5e93\uff09\u4e2d,\u5f15\u64ce\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u6240\u793a\u3002    "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${LINKIS_HOME}/lib/linkis-engineconn-plugins:\n\u2514\u2500\u2500 hive\n   \u2514\u2500\u2500 dist\n   \u2514\u2500\u2500 plugin\n\u2514\u2500\u2500 spark\n   \u2514\u2500\u2500 dist\n   \u2514\u2500\u2500 plugin\n")),(0,a.kt)("h3",{id:"24-\u5e76\u914d\u7f6e\u9ed8\u8ba4\u7684\u5f15\u64ce\u7248\u672c\u65b9\u4fbf\u6ca1\u6709\u5e26\u7248\u672c\u7684\u4efb\u52a1\u8fdb\u884c\u63d0\u4ea4\u53ef\u9009"},"2.4 \u5e76\u914d\u7f6e\u9ed8\u8ba4\u7684\u5f15\u64ce\u7248\u672c\uff0c\u65b9\u4fbf\u6ca1\u6709\u5e26\u7248\u672c\u7684\u4efb\u52a1\u8fdb\u884c\u63d0\u4ea4(\u53ef\u9009)"),(0,a.kt)("p",null,"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"$LINKIS_HOME/conf/linkis.properties")," \u914d\u7f6e\u6587\u4ef6  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"wds.linkis.hive.engine.version=2.3.3\n")),(0,a.kt)("h3",{id:"25-\u7ba1\u7406\u53f0configuration\u914d\u7f6e\u4fee\u6539\u53ef\u9009"},"2.5 \u7ba1\u7406\u53f0Configuration\u914d\u7f6e\u4fee\u6539\uff08\u53ef\u9009\uff09"),(0,a.kt)("p",null,"\u7ba1\u7406\u53f0\u7684\u914d\u7f6e\u662f\u6309\u7167\u5f15\u64ce\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u5982\u679c\u65b0\u589e\u7684\u5f15\u64ce\uff0c\u6709\u914d\u7f6e\u53c2\u6570\u9700\u8981\u914d\u7f6e\u7684\u8bdd\uff0c\u9700\u8981\u4fee\u6539\u5bf9\u5e94\u7684\u8868\u7684\u5143\u6570\u636e  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_cg_manager_label\uff1a\u63d2\u5165\u5f15\u64celabel\u5982\uff1ahive-2.3.3\nlinkis_ps_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_ps_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\nlinkis_ps_configuration_key_engine_relation:\u914d\u7f6e\u9879\u548c\u5f15\u64ce\u7684\u5173\u8054\u5173\u7cfb\n")),(0,a.kt)("p",null,"\u4ee5openLooKeng\u5f15\u64ce 1.5.0\u7248\u672c \u4e3a\u4f8b "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\nSET @OPENLOOKENG_LABEL=\"openlookeng-1.5.0\";\nSET @OPENLOOKENG_ALL=CONCAT('*-*,',@OPENLOOKENG_LABEL);\nSET @OPENLOOKENG_IDE=CONCAT('*-IDE,',@OPENLOOKENG_LABEL);\n\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@OPENLOOKENG_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@OPENLOOKENG_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @OPENLOOKENG_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.openlookeng.url', '\u4f8b\u5982:http://127.0.0.1:8080', '\u8fde\u63a5\u5730\u5740', 'http://127.0.0.1:8080', 'Regex', '^\\\\s*http://([^:]+)(:\\\\d+)(/[^\\\\?]+)?(\\\\?\\\\S*)?$', 'openlookeng', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.openlookeng.catalog', 'catalog', 'catalog', 'system', 'None', '', 'openlookeng', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.openlookeng.source', 'source', 'source', 'global', 'None', '', 'openlookeng', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\n\n\n-- openlookeng-*\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'openlookeng' and label_value = @OPENLOOKENG_ALL);\n\n-- openlookeng default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @OPENLOOKENG_ALL);\n\n")),(0,a.kt)("h3",{id:"26-\u5f15\u64ce\u5237\u65b0"},"2.6 \u5f15\u64ce\u5237\u65b0"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f15\u64ce\u652f\u6301\u5b9e\u65f6\u5237\u65b0\uff0c\u5f15\u64ce\u653e\u7f6e\u5230\u5bf9\u5e94\u76ee\u5f55\u540e\uff0c\u901a\u8fc7http\u63a5\u53e3\u5411linkis-cg-engineconnplugin \u670d\u52a1\u53d1\u9001\u5237\u65b0\u8bf7\u6c42\u5373\u53ef\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://${engineconn-plugin-server-IP}:${port}/api/rest_j/v1/rpc/receiveAndReply"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/enginePlugin/engineConn/refreshAll"\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u91cd\u542f\u5237\u65b0\uff1a\u901a\u8fc7\u91cd\u542f\u4e5f\u53ef\u4ee5\u5f3a\u5236\u5237\u65b0\u5f15\u64ce\u76ee\u5f55")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### cd\u5230sbin\u76ee\u5f55\u4e0b\uff0c\u91cd\u542flinkis-cg-engineconnplugin\u670d\u52a1\n\ncd ${LINKIS_HOME}/sbin\n\n## \u6267\u884clinkis-daemon\u811a\u672c\n\nsh linkis-daemon.sh restart cg-engineplugin\n\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f\uff1a\u5982\u679c\u5728\u5237\u65b0\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\uff0c\u9700\u8981\u786e\u8ba4\u662f\u5426\u5237\u65b0\u6210\u529f\uff0c\u5219\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684linkis_engine_conn_plugin_bml_resources\u8fd9\u5f20\u8868\u7684last_update_time\u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230linkis\u7684\u6570\u636e\u5e93 \nselect *  from linkis_cg_engine_conn_plugin_bml_resources\n")),(0,a.kt)("p",null,"\u6b63\u5e38\u5982\u4e0b\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/156343249-9f6dca8f-4e0d-438b-995f-4f469270a22d.png",alt:"bml"})),(0,a.kt)("p",null,"\u67e5\u770b\u5f15\u64ce\u7684\u7269\u6599\u8bb0\u5f55\u662f\u5426\u5b58\u5728(\u5982\u679c\u6709\u66f4\u65b0,\u67e5\u770b\u66f4\u65b0\u65f6\u95f4\u662f\u5426\u6b63\u786e)\u3002"))}_.isMDXComponent=!0}}]);