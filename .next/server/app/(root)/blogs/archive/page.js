(()=>{var e={};e.id=189,e.ids=[189],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},1253:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>c});var s=r(482),a=r(9108),i=r(2563),o=r.n(i),l=r(8300),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);r.d(t,n);let c=["",{children:["(root)",{children:["blogs",{children:["archive",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2824)),"C:\\Users\\Mustafo Alisherovich\\OneDrive\\Рабочий стол\\blog\\app\\(root)\\blogs\\archive\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1331)),"C:\\Users\\Mustafo Alisherovich\\OneDrive\\Рабочий стол\\blog\\app\\(root)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,8366)),"C:\\Users\\Mustafo Alisherovich\\OneDrive\\Рабочий стол\\blog\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Users\\Mustafo Alisherovich\\OneDrive\\Рабочий стол\\blog\\app\\(root)\\blogs\\archive\\page.tsx"],d="/(root)/blogs/archive/page",h={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(root)/blogs/archive/page",pathname:"/blogs/archive",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5486:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23))},2824:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>u});var s=r(5036),a=r(6975),i=r(3674),o=r(4649),l=r(6794);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(9508).Z)("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);var c=r(6274);let u={title:"Archive blogs"},d=async function(){let e=await (0,a.r7)();return(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsxs)("div",{className:"relative min-h-[40vh] flex items-center justify-end flex-col",children:[s.jsx("p",{className:"text-lg text-muted-foreground",children:"Showing posts from"}),s.jsx("h2",{className:"text-center text-4xl section-title font-creteRound mt-2",children:s.jsx("span",{children:"Archive"})}),(0,s.jsxs)("div",{className:"flex gap-1 items-center mt-4",children:[s.jsx(o.Z,{className:"w-4 h-4"}),s.jsx(c.default,{href:"/",className:"opacity-90 hover:underline hover:opacity-100",children:"Home"}),s.jsx(l.Z,{}),s.jsx(c.default,{href:"/blogs",className:"opacity-90 hover:underline hover:opacity-100",children:"Blogs"}),s.jsx(l.Z,{}),s.jsx("p",{className:"text-muted-foreground",children:"Archive"})]})]}),e.map(e=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"flex flex-col space-y-3 mt-8",children:(0,s.jsxs)("div",{className:"relative",children:[s.jsx("span",{className:"text-5xl font-creteRound relative z-20",children:e.year}),s.jsx(n,{className:"absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10"})]})}),s.jsx("div",{className:"flex flex-col space-y-2 mt-8",children:e.blogs.map(e=>(0,s.jsxs)("div",{className:"flex gap-2 text-lg text-muted-foreground",children:[s.jsx("p",{children:(0,i.WU)(new Date(e.createdAt),"dd MMM")}),s.jsx(l.Z,{className:"text-white w-8 h-8"}),s.jsx(c.default,{href:`/blogs/${e.slug}`,className:"hover:text-white hover:underline cursor-pointer",children:e.title})]},e.slug))})]}))]})}},6794:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(9508).Z)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]])},4649:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(9508).Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]])},6975:(e,t,r)=>{"use strict";r.d(t,{_Z:()=>o,r7:()=>n,u0:()=>l});var s=r(4151),a=r(2);let i="https://ap-south-1.cdn.hygraph.com/content/cm51x0l6n00ib07we4fufgof2/master",o=async()=>{let e=s.Ps`
		query MyQuery {
			blogs(where: { archive: false }) {
				title
				createdAt
				author {
					name
					image {
						url
					}
				}
				category {
					name
					slug
				}
				description
				tag {
					name
					slug
				}
				image {
					url
				}
				content {
					html
				}
				slug
			}
		}
	`,{blogs:t}=await (0,s.ZP)(i,e);return t},l=(0,a.cache)(async e=>{let t=s.Ps`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					name
					image {
						url
					}
					bio
					id
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
		}
	`,{blog:r}=await (0,s.ZP)(i,t,{slug:e});return r}),n=async()=>{let e=s.Ps`
		query MyQuery {
			blogs(where: { archive: true }) {
				title
				createdAt
				slug
			}
		}
	`,{blogs:t}=await (0,s.ZP)(i,e);return Object.values(t.reduce((e,t)=>{let r=t.createdAt.substring(0,4);return e[r]||(e[r]={year:r,blogs:[]}),e[r].blogs.push(t),e},{}))}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[722,792,151,674,839],()=>r(1253));module.exports=s})();