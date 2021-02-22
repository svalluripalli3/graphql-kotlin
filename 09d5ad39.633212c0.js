(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{178:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),c=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||p;return r?n.a.createElement(b,l(l({ref:t},s),{},{components:r})):n.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),p=(r(0),r(178)),o={id:"examples",title:"Examples"},l={unversionedId:"examples",id:"examples",isDocsHomePage:!1,title:"Examples",description:"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the examples module.",source:"@site/docs/examples.md",slug:"/examples",permalink:"/graphql-kotlin/docs/examples",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/examples.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1614029087,sidebar:"docs",previous:{title:"Getting Started",permalink:"/graphql-kotlin/docs/"},next:{title:"GraphQL Java Comparison",permalink:"/graphql-kotlin/docs/graphql-java-comparison"}},i=[{value:"Client Example",id:"client-example",children:[]},{value:"Federation Example",id:"federation-example",children:[]},{value:"Server Examples",id:"server-examples",children:[{value:"Ktor Server Example",id:"ktor-server-example",children:[]},{value:"Spring Server Example",id:"spring-server-example",children:[]}]}],s={toc:i};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples"},"examples module"),"."),Object(p.b)("h2",{id:"client-example"},"Client Example"),Object(p.b)("p",null,"A ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," can be generated by using the provided Maven or Gradle. Example integration using Maven and\nGradle plugins can be found under the ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/client"},"examples/client"),"\nfolder."),Object(p.b)("h2",{id:"federation-example"},"Federation Example"),Object(p.b)("p",null,"There is also an example of ",Object(p.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation"),"\nwith two Spring Boot apps using ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," and an Apollo Gateway app in Nodejs that exposes a single\nfederated schema in ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/federation"},"examples/federation"),"\nproject. Please refer to the README files for details on how to run each application."),Object(p.b)("h2",{id:"server-examples"},"Server Examples"),Object(p.b)("p",null,"Example integrations of ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," with number of popular application frameworks can be found under\n",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server"},"examples/server")," folder."),Object(p.b)("p",null,"These examples also demonstrates how to include ",Object(p.b)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader"},Object(p.b)("inlineCode",{parentName:"a"},"DataLoaders"))," in your query execution."),Object(p.b)("h3",{id:"ktor-server-example"},"Ktor Server Example"),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"http://ktor.io/"},"Ktor")," is an asynchronous framework for creating microservices, web applications, and more. Example\nintegration can be found at ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/ktor-server"},"examples/server/ktor-server")),Object(p.b)("h3",{id:"spring-server-example"},"Spring Server Example"),Object(p.b)("p",null,"One way to run a GraphQL server is with ",Object(p.b)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot"},"Spring Boot"),". A sample Spring\nBoot app that uses ",Object(p.b)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring\nWebflux")," together with\n",Object(p.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and ",Object(p.b)("a",{parentName:"p",href:"https://github.com/prisma/graphql-playground"},"graphql-playground")," is provided as\na ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/spring-server"},"examples/server/spring-server"),".\nAll the examples used in this documentation should be available in this sample app."),Object(p.b)("p",null,"In order to run it you can run\n",Object(p.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/Application.kt"},"Application.kt"),"\ndirectly from your IDE. Alternatively you can also use the Spring Boot plugin from the command line."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n./gradlew bootRun\n\n")),Object(p.b)("p",null,"Once the app has started you can explore the example schema by opening Playground endpoint at\nhttp:."))}c.isMDXComponent=!0}}]);