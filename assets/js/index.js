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
      this.$http.post('http://yourbestgameapi.app/api/login?email='+this.email+'&password='+ this.password +'', function(data, status, request){
        if(status == 200)
        {
          // clean the token rare characters
          this.token = data.replace(/"/g, '');


          localStorage.setItem('testObject', JSON.stringify(this.token));

          window.location.href = '/AplicationYourBestGame/Vista.html';
        }

      });
    },

    EntraWebinvitat: function(){
      window.location.href = '/AplicationYourBestGame/Vista.html';
    }
  }
});