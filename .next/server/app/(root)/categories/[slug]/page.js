(()=>{var e={};e.id=863,e.ids=[863],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},3395:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>g,tree:()=>c});var s=r(482),a=r(9108),n=r(2563),i=r.n(n),l=r(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["(root)",{children:["categories",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7481)),"C:\\Users\\Mustafo Alisherovich\\OneDrive\\Рабочий стол\\blog\\app\\(root)\\categories\\[slug]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1331)),"C:\\Users\\Mustafo Alisherovich\\OneDrive\\Рабочий стол\\blog\\app\\(root)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,8366)),"C:\\Users\\Mustafo Alisherovich\\OneDrive\\Рабочий стол\\blog\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\Mustafo Alisherovich\\OneDrive\\Рабочий стол\\blog\\app\\(root)\\categories\\[slug]\\page.tsx"],u="/(root)/categories/[slug]/page",x={require:r,loadChunk:()=>Promise.resolve()},g=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(root)/categories/[slug]/page",pathname:"/categories/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1687:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.t.bind(r,1476,23))},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,generateMetadata:()=>c});var s=r(5036),a=r(395),n=r(1555),i=r(4649),l=r(6794),o=r(6274);async function c({params:e}){return{title:(await (0,n.M)(e.slug)).name}}let d=async function({params:e}){let t=await (0,n.M)(e.slug);return(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsxs)("div",{className:"relative min-h-[30vh] flex items-center justify-end flex-col",children:[s.jsx("h2",{className:"text-center text-4xl section-title font-creteRound mt-2",children:s.jsx("span",{children:t.name})}),(0,s.jsxs)("div",{className:"flex gap-1 items-center mt-4",children:[s.jsx(i.Z,{className:"w-4 h-4"}),s.jsx(o.default,{href:"/",className:"opacity-90 hover:underline hover:opacity-100",children:"Home"}),s.jsx(l.Z,{}),s.jsx("p",{className:"text-muted-foreground",children:"Category"})]})]}),s.jsx("div",{className:"grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24",children:t.blogs.map(e=>s.jsx(a.Z,{...e,isVertical:!0},e.title))})]})}},395:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var s=r(5036),a=r(5752),n=r(3674),i=r(2702),l=r(7368),o=r(1389),c=r(6794);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,r(9508).Z)("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);var u=r(4595),x=r(2813),g=r(6274),m=r(8134);r(2);let p=(0,m.j)("inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function h({className:e,variant:t,...r}){return s.jsx("div",{className:(0,a.cn)(p({variant:t}),e),...r})}let f=function(e){return(0,s.jsxs)("div",{className:(0,a.cn)("grid gap-4 group",e.isVertical?"grid-cols-1":"grid-cols-1 md:grid-cols-2"),children:[s.jsx(g.default,{href:`/blogs/${e.slug}`,children:s.jsx("div",{className:"relative bg-secondary rounded-md",children:s.jsx(x.default,{width:650,height:335,src:e.image.url,alt:e.title,className:"px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"})})}),(0,s.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,s.jsxs)(g.default,{href:`/blogs/${e.slug}`,className:"flex flex-col space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(i.Z,{className:"w-5 h-5"}),s.jsx("p",{children:(0,n.WU)(new Date(e.createdAt),"MMM dd, yyyy")})]}),s.jsx(l.Z,{}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(o.Z,{className:"w-5 h-5"}),(0,s.jsxs)("p",{children:[(0,a.$)(e.content.html)," min read"]})]})]}),s.jsx("h2",{className:"text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors",children:e.title}),s.jsx("p",{className:"text-muted-foreground line-clamp-3",children:e.description})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(x.default,{src:e.author.image.url,alt:"author",width:30,height:30,className:"object-cover rounded-sm"}),(0,s.jsxs)("p",{children:["by ",e.author.name]})]}),s.jsx(c.Z,{}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(g.default,{href:`/tags/${e.tag.slug}`,children:(0,s.jsxs)(h,{variant:"secondary",role:"button",children:[s.jsx(d,{className:"w-3 h-3 me-2"}),e.tag.name]})}),s.jsx(g.default,{href:`/categories/${e.category.slug}`,children:(0,s.jsxs)(h,{variant:"outline",role:"button",children:[s.jsx(u.Z,{className:"w-3 h-3 me-2"}),e.category.name]})})]})]})]})]})}},5752:(e,t,r)=>{"use strict";r.d(t,{$:()=>i,cn:()=>n});var s=r(990),a=r(1774);function n(...e){return(0,a.m6)((0,s.W)(e))}function i(e){let t=0,r=/\w/,s=e.split(" ").filter(e=>(e.includes("<img")&&(t+=1),r.test(e))).length,a=4*t,n=0,i=12;for(;t;)n+=i,i>3&&(i-=1),t-=1;let l=Math.ceil(((s-a)/(250/60)+n)/60);return l<9?"0"+l:l}},6794:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(9508).Z)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]])},4649:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(9508).Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]])},4595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(9508).Z)("Layers2",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]])},1555:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,M:()=>l});var s=r(4151),a=r(2);let n="https://ap-south-1.cdn.hygraph.com/content/cm51x0l6n00ib07we4fufgof2/master",i=async()=>{let e=s.Ps`
		query MyQuery {
			categories {
				name
				slug
			}
		}
	`,{categories:t}=await (0,s.ZP)(n,e);return t},l=(0,a.cache)(async e=>{let t=s.Ps`
		query MyQuery($slug: String!) {
			category(where: { slug: $slug }) {
				blogs {
					description
					author {
						name
						image {
							url
						}
						bio
					}
					content {
						html
					}
					createdAt
					image {
						url
					}
					slug
					tag {
						name
						slug
					}
					category {
						name
						slug
					}
					title
				}
				name
			}
		}
	`,{category:r}=await (0,s.ZP)(n,t,{slug:e});return r})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[722,792,151,674,813,220,839],()=>r(3395));module.exports=s})();