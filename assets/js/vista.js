


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

        getToken: function(){

            this.token = localStorage.getItem('testObject');

            console.log('retrievedObject: ',JSON.parse(this.token));
        }
    }


});





