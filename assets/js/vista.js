


Vue.component('vista-joc', {

    template: '#Template_Vista-Joc',
    props:['nom','imatge']
});

new Vue({
    el: '#Vista',
    data: {
        jocs: [],
        token: ""
    },
    methods: {
        loadJocs: function() {
            this.$http.get('http://localhost:8000/joc', function(data, status, request){
                if(status == 200)
                {
                    this.jocs = data['data'];
                }
                else{
                    console.log("no funciona!");
                }
            });
        },
        loadMyGames: function(){
            this.$http.get('http://localhost:8000/user/joc?api_token='+this.token, function(data, status, request){
                if(status == 200)
                {
                    this.jocs = data['data'];
                }
                else{
                    console.log("no funciona!");
                }
            });

        },

        getToken: function(){

            this.token = localStorage.getItem('testObject');

            console.log('retrievedObject: ',JSON.parse(this.token));
            //console.log('http://localhost:8000/user/joc?api_token='+this.token);
        },

        logout: function(){
            this.token = null;
            localStorage.setItem('testObject', "");
        }

    },
    ready: function(){
        this.$http.get('http://localhost:8000/joc', function(data, status, request){
            if(status == 200)
            {
                this.jocs = data['data'];
            }
            else{
                console.log("no funciona!");
            }
        });

        this.token = localStorage.getItem('testObject').replace(/"/g, '');
    }


});





