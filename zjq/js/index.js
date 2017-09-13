var aaa = Vue.extend({
	template:"#aaa"
})


var bbb = Vue.extend({
	template:"#bbb"
})

var route=Vue.extend({
    template:"#route"
});
var one=Vue.extend({
    template:"#one"
});
var two=Vue.extend({
    template:"#two"
});


var service = Vue.extend({
	template:"#zjq-service"
})


var wd=Vue.extend({
	template:'#wd',
	created(){
		setTimeout(function(){
			var is=new IScroll(".gj",{scrollY:true})
		},10)
	}
})
var order = Vue.extend({
	template:"#zjq-order"
})
var refer = Vue.extend({
	template:"#zjq-refer"
})
var router = new VueRouter({
	routes:[
		{path:"/aaa",component:aaa},
		{path:"/bbb",component:bbb},
		{path:"/route",component:route,
            children:[
                {path:"/route/one",component:one},
                {path:"/route/two",component:two},
                {path:"/route/",component:one}

            ]
        },
		{path:"/service",component:service,
			children:[
				{path:"/service/order",component:order},
				{path:"/service/refer",component:refer},
				{path:"/service/",component:order},
			]
		},
		{path:"/wd",component:wd},
		{path:"/",redirect:"/service"}
	]
})

var vue=new Vue({
	el:'#app',
	router:router
});