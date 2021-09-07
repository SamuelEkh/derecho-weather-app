(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,c,r){},14:function(e,c,r){},20:function(e,c,r){"use strict";r.r(c);var a=r(1),t=r.n(a),s=r(6),i=r.n(s),n=(r(12),r(4)),d=r.n(n),o=r(7),l=r(2),j=(r(14),r(0));function h(){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{className:"header__title",children:"DERECHO"}),Object(j.jsx)("h2",{className:"header__desc",children:"Your weather assistance"})]})}function b(e){e.apiFetcher;var c=e.getSearchValue,r=Object(a.useState)(""),t=Object(l.a)(r,2),s=t[0],i=t[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.length>0&&(c(s),i(""))},className:"search-form",children:[Object(j.jsx)("input",{className:"search-form__input",type:"text",onChange:function(e){i(e.target.value)},value:s,placeholder:"Enter a city..."}),Object(j.jsx)("input",{type:"submit",className:"search-form__button",value:"Search"})]})}function g(e){var c=e.searchValue;return Object(j.jsx)("div",{className:"search-header",children:Object(j.jsx)("div",{className:"search-header--text",children:c})})}function A(){return Object(j.jsxs)("div",{className:"background",children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",children:[Object(j.jsxs)("linearGradient",{id:"skyGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[Object(j.jsxs)("stop",{stopColor:"rgb(0,0,12)",offset:"0%",id:"zenith",children:[Object(j.jsx)("animate",{attributeName:"stop-color",dur:"24s",values:"rgba(0,0,12,0);rgba(2,1,17,0);rgba(2,1,17,0);rgba(2,1,17,0);rgba(32,32,44,0.5);rgba(64,64,92,.8);rgb(74,73,105);rgb(117,122,191);rgb(130,173,219);rgb(148,197,248);rgb(183,234,255);rgb(144,223,254);rgb(87,193,235);rgb(45,145,194);rgb(36,115,171);rgb(30,82,142);rgb(30,82,142);rgb(21,66,119);rgba(22,60,82,0.8);rgba(7,27,38,.5);rgba(1,10,16,.3);rgba(9,4,1,0);rgba(0,0,12,0);rgba(0,0,12,0)",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"offset",dur:"24s",values:"0;.85;.6;.1;0;0;0;0;0;.01;0;0;0;0;0;0;0;0;0;0;.3,.5,.8,0",repeatCount:"indefinite"})]}),Object(j.jsx)("stop",{stopColor:"rgb(0,0,12)",offset:"100%",id:"horizon",children:Object(j.jsx)("animate",{attributeName:"stop-color",dur:"24s",values:"rgba(0,0,12,0);rgba(25,22,33,.3);rgba(32,32,44,.8);rgb(58,58,82);rgb(81,81,117);rgb(138,118,171);rgb(205,130,160);rgb(234,176,209);rgb(235,178,177);rgb(177,181,234);rgb(148,223,255);rgb(103,209,251);rgb(56,163,209);rgb(36,111,168);rgb(30,82,142);rgb(91,121,131);rgb(157,166,113);rgb(233,206,93);rgb(178,99,57);rgb(47,17,7);rgb(36,14,3);rgb(47,17,7);rgba(75,29,6,.4);rgba(21,8,0,0);rgba(0,0,12,0)",repeatCount:"indefinite"})})]}),Object(j.jsx)("rect",{id:"sky",x:"0",y:"0",width:"100%",height:"100%"})]}),Object(j.jsx)("div",{className:"sun"})]})}function u(e){var c=e.degree;return Object(j.jsxs)("article",{className:"card-upper",children:[Object(j.jsxs)("div",{className:"card__degree",children:[c,"\xb0"]}),Object(j.jsx)(A,{})]})}var x=function(e){var c=e.feels_like;return Object(j.jsx)("article",{className:"card",children:Object(j.jsxs)("div",{className:"card__feels-like",children:[Object(j.jsx)("div",{className:"card__header card__feels-like--header",children:"Feels like"}),Object(j.jsxs)("div",{className:"card__desc card__feels-like--degree",children:[c,"\xb0"]})]})})},m=function(e){var c=e.condition,r=e.conditionPhoto,a="";if(r){a=r.replace(/^\/\//,"https://");var t={marginTop:"7px",padding:"0",fontSize:"2rem"};return c.length>7&&c.length<=13?t.fontSize="1.5rem":c.length>13&&(t.fontSize="1.2rem",t.marginTop="10px"),Object(j.jsx)("article",{className:"card",children:Object(j.jsxs)("div",{className:"card__condition",children:[Object(j.jsx)("img",{className:"card__condition--photo",src:a,alt:c}),Object(j.jsx)("div",{className:"card__header card__condition--header",children:"Weather condition"}),Object(j.jsx)("div",{className:"card__condition-desc",style:t,children:c})]})})}return Object(j.jsx)("article",{className:"card",children:Object(j.jsx)("div",{className:"card__Condition",children:"N/A"})})},O=function(e){var c=e.UVIndex;return Object(j.jsx)("article",{className:"card",children:Object(j.jsxs)("div",{className:"card__uv-index",children:[Object(j.jsx)("div",{className:"card__header card__uv--header",children:"UV Index"}),Object(j.jsx)("div",{className:"card__desc card__uv--desc",children:c})]})})},p=function(e){var c=e.humidity;return Object(j.jsx)("article",{className:"card",children:Object(j.jsxs)("div",{className:"card__humidity",children:[Object(j.jsx)("div",{className:"card__header",children:"Humidity"}),Object(j.jsxs)("div",{className:"card__desc",children:[c,"%"]})]})})},N=function(e){var c=e.wind,r=c/3.6;0===c&&(r="N/A");var a=r.toString().match(/\../);return r=r.toString().replace(/\..+/,a),Object(j.jsx)("article",{className:"card",children:Object(j.jsxs)("div",{className:"card__wind",children:[Object(j.jsx)("div",{className:"card__header",children:"Wind"}),Object(j.jsxs)("span",{className:"card__desc",children:[r,Object(j.jsx)("div",{className:"card__wind--ms",children:"m/s"})]})]})})},C=function(e){var c=e.windDir;return Object(j.jsx)("article",{className:"card",children:Object(j.jsxs)("div",{className:"card__windDir",children:[Object(j.jsx)("div",{className:"card__header",children:"Wind direction"}),Object(j.jsx)("div",{className:"card__desc",children:c})]})})},v=function(e){var c=e.gusts;return Object(j.jsx)("article",{className:"card",children:Object(j.jsxs)("div",{className:"card__gusts",children:[Object(j.jsx)("div",{className:"card__header",children:"Gusts"}),Object(j.jsxs)("span",{className:"card__desc",children:[c,Object(j.jsx)("div",{className:"card__wind--ms",children:"m/s"})]})]})})},_=function(e){var c=e.aqi;if(c){var r="",a=0;return c.co<=150?a+=20:c.co>150&&c.co<=250?a+=15:c.co>250&&c.co<=400?a+=10:c.co>400&&c.co<=600&&(a+=5),c.no2<=25?a+=20:c.no2>25&&c.no2<=50?a+=15:c.no2>50&&c.no2<=100?a+=10:c.no2>100&&c.no2<=200&&(a+=5),c.o3<=30?a+=20:c.o3>30&&c.o3<=50?a+=15:c.o3>50&&c.o3<=100?a+=10:c.o3>100&&c.o3<=200&&(a+=5),c.so2<=10?a+=10:c.so2>10&&c.so2<=30?a+=7.5:c.so2>30&&c.so2<=60?a+=5:c.so2>60&&c.so2<=200&&(a+=2.5),c.pm2_5<=2.5?a+=20:c.pm2_5>2.5&&c.pm2_5<=5?a+=15:c.pm2_5>5&&c.pm2_5<=10?a+=10:c.pm2_5>10&&c.pm2_5<=20&&(a+=5),c.pm10<=5?a+=10:c.pm10>5&&c.pm10<=10?a+=7.5:c.pm10>10&&c.pm10<=20?a+=5:c.pm10>20&&c.pm10<=40&&(a+=2.5),a>=85?r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAB/klEQVRYw+2Xu04CQRSGEYmJcim0E0vjExihpKc2xs4GAz6BGm0FeyHY8ARYmWh8BSuRylZlLbQ1CoWfzey4OrOzs0tYY+Ip9z/7n5lzn0TiX/6AkKTIPmf0eQLAoUeXXdaYGp98iWMe8ZN7jliMTr5AmyFB8s4J81HoN3nBVp5ZD0ee4vTHKa+oUWKZDBmWKVHjivdvOk1StvRzXHh+dKiR0eplqOF4NM+ZtTv9F/0bh6SN2mkOefOYCL4Fbc/ZC1Y3Lnju0QoOrSs98tYxy9OT/22YE/NFnn4pZL04MqP8k5aW9H0hdFoXZCya/qdwy+ogUmEeyKTWO5e6dI/IHGao4+BQZ0bRVjDS0k1H+pb2IOCq/NaQoWso+hqMquxRSZ0P3Qvm5LeBJBko+hqMnKxuNYbsCejSTGLGuBTfdlUDXQHtmN1gxtgR37qqgb6ASqZABmGUBEtfNfAsoJWxBtSKW24q5IYnO5aBrJsqv2Bg4i7SBDmCAUOQNWkawYAhTXWFdm018q/tCk3XKrasDGzZtQpds5vmNpD+lmmrZqdr14kExYDVa0jRswCY2rXfwGGbD1/6D7ZDDBy/kUmFkZZ+RCXUyPQf+qxyo9DfsBp66JvWFsp0uOOVV+7oUI60tsSweMWwOk58+Y1hfY/hARLLEyqGR2Asz9h/iUE+Ad/bhIx4asIhAAAAAElFTkSuQmCC":a>=75&&a<85?r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAACrElEQVRYw+2XnZ9iYRTHgyAIBoILQRAEQRAE8x8MBMFCEAwsBEEwcCEYWAgWgiAYGFgIgiAYGAgGgmAhWAiCIAiCYOC70HNPz+157svcdmE+nznY73TOc875nZebSn3JpxDyfGfIhAVr1swZM6DJzb8wncPlDbu880KbTHLjGVz2RMmWe9JJzN+xJa6sqH3UfO/CxJwudWoUKHBLA5flRbpa8Y1n+aX9dUeHXEDpexw0zX7MVDHR3tUL5woOA91FHPOPWvlqMat1jiMqUTS0wuVjJ7UshHgPfRQ3QsstzodIUZYoViGVkPQcqSagtSf3wQU7KpVuosYcSPT27uanUth4CqT5xitL2hZtA8ORNHXsDtaXTKAvYd8Z2hZM2vPFZr6iwMM5QG0STQ19C0ZeuGS2Jq4CJ5aYYBUYrw+TAdI0HUxNiAcx0jP0rZg8c2A6WCio6ptKTxz4Tdvkth2TRh2bDjYKyl+1oG696WtCSq7cgAVlZv2/HHg82piQN66cqxzUlJU3E/IIVrnKQd0kuwfNFNS4ykFXWRkGT9JnLZ/v4UtEjYa91vvzwIkqBNufec1IDY9aQDpOD3C1K4oQskuZ69oC2igXTUsyTuaX2oM6gV2gvde3kyjJCF7QIpdKkaZEm5WMdkd7zk796todFNWbfFmnoo21S1lSsNxS+8BLhKGoFH2beiiuz3LkUd9c1ETnIezKOUqassaR9arStWdG1z/xyUsFN6HnMG3tWMzGZr8jNbHsvkvlJ+0yKsYyX9XOZDdaPS3NAnta4fcmGbqSVq1JowKe+07zut0JGVqyRQDGsZNKWkvUKZJnGlROnCdPlSYT32VtWapRTtpa6FGySzQicRhZ+G/rh+Sfg5QYhXxK/aF/3YI6T9ofzFiqWbNhwRSX8tcH/ueQv3/jD76apeKvAAAAAElFTkSuQmCC":a>=60&&a<75?r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAACZ0lEQVRYCe3Bn39qcRzH8TccCIJgcODAYHBhMBgE/QfBIBgMgsGFYDAYBMHgQnBhMBgMBhcGwWAwGASDQXDhwIUgODA4EATB6/749K3db6c6Fe3x2POpTx8DEV+5psMrffp0ueeKE0raHjs0eSHbmCcaFLQpCjRJWSXhlEDro0pCXjFlrYcW/+tyzhFldtmlQo0mPd4bU1deFPnBzBtn7CgDES2GzLQJlAcdnDEtSlqCkCtm2lqNS5yEsnKgyhCnruWo4cREyol9EsyYshajRIpJCLUG9hliYgItwiVmxKHWRBXnVNkIGWHOtQGuMAkFZeE7ZkBB/xBwzDM9GppDwDHP9GhogpAh5kxZ6GPqmqCNU5WHNk5VE7QwT5rHAWZIQROkOA/ykOI8aIIIM2ZHPpqYjqbo48Ty0MeJNUUPcyIfD5gTTXGB05KHC5yWpmhiruTjFXOoKYrcMuQnDQJ5KHLLkJ80CDRFDXMvHwNMpC1QwXTlY0JbYRfTl48JbYUIM5CPBBNqC5QxL/LRwxxoCxxhOvLxiKlpC5xjruXjEnOnOSygOXQxp/JRwaQE8rCAPOzgRJpHgjmShwXk4QzTVRZuMDGBNkCJN0xTWdhjjKlrA7QwKSVl4xqTsqc1UWaMudAihIwwMUWtgYgEM6CgxWjgdCkqJ0JinKqW4xYnZk85cEiC09QqBHRxUuoEWoIC54xw7pQHIV1mYo4IlIECdQbM3FNUPgTc8l7KHTUOCPUHEYec0GHIey2thwYj8nqjpvURcsOYVUZcUtKm+MINCYv8ok2o7VHhG4/0eOOvAa880GRfnz6E3xeYvZFkc8h8AAAAAElFTkSuQmCC":a<60&&(r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAADAUlEQVRYCe3BEXjjfADH8R8EAoHAIFAIFAoHhcHgYM8zGAwGgxdeKBQGLwQGg0Fg8MIg8EKhMDg4KAwOBoUXCoNB4aBQKBQCg0CgEPhe03/TZV3atXd0z3Ofj/74PVCjTZc+QyZMmPA/HdrU9etwuWbEJkMCXP0sXG5J+EhCiK0SLjjSxzhhyq7GHGsJl5gRlrbB4o6yGY9cc0oDH586Z1zTJ+NVxqUW6JC70WZY9Hg15YoDVcAj5IVCoDmaGDM8VcOiR2HGLba2wCUiF2NrjkcKHVXjPwpTDrUDToiJNMcxrzLqeo9TCiM87YgGTc3RpexG6zggxhjjaW9MKRtoHRFGRlNL2NoCSyWklI30Fh4zjCst4TEi0AYEDHC0Qp+yrt7iX4wxlhbwGJELVIGA3ABHSzTJKCTU9BYxRktLOAwwAq0hwOhhaYUmfVISHvD1Fk3ggUs+YWkFhwFGoBICjB6WdkNAS+9g0cOIVEKEEWlXuHoHix5GpDVEGJFKqOFLWByoChYhY55paQGfmFykCkTkRrha4QyjryrcUWhrgQYxkTYgYoSnEuoYY1UhpfCkJTxtgas38DEmqkJGIaPLgfZGDWOqKtxTlnCFpb1whPGkKjh8JSVhSGHEqfbAOcaDNsHSHOeMKTxSx6bFV74zYcKQDhdYqsAVRkfraNNQCTbXpBgZCeti2nqHAUZb6/hMSkhDJXjcs80jrko4oFDTOiwSjHOt4DHFiAk5wcfnM3ckGN9xtEKAMVAVuhhDLWHzRC4jxFIJNh2MvpZwecG4URXqZBgtLRCSyzhXBf7BuNQCIUaCq2rcY6T4Ei4JuVAbcE8uxpI4IsO41ib4pBjPONoDNWKMKbY2o01hgKMd4TGicKbt6FEY4msHHBJTuNFHcBhQeKGtrbC5Ykbhi3aBw4BXz1xgqQI2Laa86uFoNzg8UBbT4S8a2JqjxiF/80BKWaj9cEnKrl640P6o0yPjIzNCXP0s6nRJ2WTMHZ5+FRbH3NJnTEJuyjPfuOGT/vgt/AAn41f7WGprswAAAABJRU5ErkJggg=="),Object(j.jsx)("article",{className:"card",children:Object(j.jsxs)("div",{className:"card__aqi",children:[Object(j.jsx)("img",{className:"card__aqi--icon",src:r,alt:"smiley"}),Object(j.jsx)("div",{className:"card__header",children:"Air quality"}),Object(j.jsx)("div",{className:"card__desc",children:a})]})})}return Object(j.jsx)("article",{className:"card",children:Object(j.jsx)("div",{className:"card__aqi",children:c})})};r(16).config();var f=function(){var e=Object(a.useState)("Stockholm"),c=Object(l.a)(e,2),r=c[0],t=c[1],s=Object(a.useState)([]),i=Object(l.a)(s,2),n=i[0],A=i[1];Object(a.useEffect)((function(){f(r)}),[r]);var f=function(){var e=Object(o.a)(d.a.mark((function e(c){var r,a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://samsserver.herokuapp.com","/derecho/").concat(c));case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,console.log(a),t={degrees:a.current.temp_c,feels_like:a.current.feelslike_c,weather_condition:a.current.condition.text,condition_photo:a.current.condition.icon,wind:a.current.wind_kph,windDir:a.current.wind_dir,gusts:a.current.gust_kph,humidity:a.current.humidity,UV_Index:a.current.uv,AirQI:a.current.air_quality},A(t);case 9:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(j.jsxs)("main",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)(b,{apiFetcher:f,getSearchValue:function(e){t(e)}}),Object(j.jsx)(g,{searchValue:r}),Object(j.jsx)("div",{className:"width-container",children:Object(j.jsxs)("section",{className:"card-container",children:[Object(j.jsx)(u,{degree:n.degrees}),Object(j.jsx)(x,{feels_like:n.feels_like}),Object(j.jsx)(m,{condition:n.weather_condition,conditionPhoto:n.condition_photo}),Object(j.jsx)(O,{UVIndex:n.UV_Index}),Object(j.jsx)(p,{humidity:n.humidity}),Object(j.jsx)(N,{wind:n.wind}),Object(j.jsx)(C,{windDir:n.windDir}),Object(j.jsx)(v,{gusts:n.gusts}),Object(j.jsx)(_,{aqi:n.AirQI})]})})]})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,21)).then((function(c){var r=c.getCLS,a=c.getFID,t=c.getFCP,s=c.getLCP,i=c.getTTFB;r(e),a(e),t(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),w()}},[[20,1,2]]]);
//# sourceMappingURL=main.52cc6724.chunk.js.map