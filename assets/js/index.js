new Vue({
  el: '#vueApp',
  data: {
    email: "",
    password: "",
    debug: true,
    jocs: [],
    token: ""
  },
  methods: {
    loadUsers: function() {
      this.$http.post('http://localhost:8000/api/login?email='+this.email+'&password='+ this.password +'', function(data, status, request){
        if(status == 200)
        {
          this.token = data;

          localStorage.setItem('testObject', JSON.stringify(this.token));

          window.location.href = '/AplicationYourBestGame/Vista.html';
        }
      });
    },

    loadJocs: function() {
      this.$http.get('http://localhost:8000/joc', function(data, status, request){
        if(status == 200)
        {
          this.users = data['data'];
        }
      });
    },

    jocs: function(){

      //var testObject = this.token;
      //
      //localStorage.setItem('testObject', testObject);

      var retrievedObject = localStorage.getItem('testObject');

      console.log('retrievedObject: ',JSON.parse(retrievedObject));
    }
  }
});