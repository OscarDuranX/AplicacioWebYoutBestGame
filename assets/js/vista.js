



var Defecte = Vue.extend({

    template: '#home' ,

    data: function() {
        return {
            jocs: '',
            token: this.token
        }
    },

    ready: function(){

        this.getToken();
        this.getJocs();
        console.log(this.token);
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

        getToken: function() {
            this.token = localStorage.getItem('testObject').replace(/"/g, '');
        }
    }
})

var Logout = Vue.extend({

    template: '#home' ,

    ready: function(){
        localStorage.setItem('testObject', "");
        //this.$route.router.go('/');
        location.href = '/AplicationYourBestGame/Vista.html';

    }

})

var MyGames = Vue.extend({

    template: '#jocsuser' ,

    data: function() {
        return {
            jocs: '',
            token: ''
        }
    },

    ready: function(){
        this.token = localStorage.getItem('testObject').replace(/"/g, '');

        this.getJocsUser();
    },
    methods:{
        getJocsUser: function() {
            this.$http.get('http://yourbestgameapi.app/user/joc?api_token='+this.token, function(data, status, request){
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

var AddNewGame = Vue.extend({

    template: '#AddNewGameUser' ,

    data: function() {
        return {
            nom:'',
            imagen:'',
            URLGame:'',
            categoria:''
        }
    },

    ready: function(){

    },
    methods:{
        CreateGame: function() {

           //console.log('Provando');
        },

    }
})

var App = Vue.extend({
    data:function(){
        return {
            token: ""
        }
    },
    ready: function(){
        this.token = localStorage.getItem('testObject').replace(/"/g, '');
        console.log("funciona token ! "+ this.token);
    }
})

var router = new VueRouter()

router.map({
    '/': {
        component: Defecte
    },

    '/MyGames':{
        component: MyGames
    },
    '/Logout':{
        component: Logout
    },
    '/AddNewGame':{
        component: AddNewGame
    },

})

router.start(App, '#Vista')



