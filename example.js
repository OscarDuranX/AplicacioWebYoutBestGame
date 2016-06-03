

// define some components
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})



var Bar = Vue.extend({

    template: '#prova1' ,

    data: function() {
        return {
            jocs: ''
        }
    },

    ready: function(){
        this.getJocs();
    },
    methods:{

        getJocs: function() {
            this.$http.get('http://yourbestgameapi.app/joc', function(data, status, request){
                if(status == 200)
                {
                    this.jocs = data['data'];
                }
                else{
                    console.log("no funciona!");
                }
            });
        },
    }
})

// the router needs a root component to render.
// for demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend({})

// create a router instance
// you can pass in additional options here, but
// let's keep it simple for now.
var router = new VueRouter()

// define some routes.
// each route should map to a component.
// we'll talk about nested routes later.
router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
})

// now we can start the app!
// router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')



new Vue({
    el: 'menu_token',
    data: {
        jocs: [],
        token: ""
    }
});