<template>
  <div>
    <h1>Login</h1>
    <form v-on:submit.prevent="login">
      <div class="row">
        <div class="col-md-6">
        <div class="form-group">
            <label>Email :</label>
            <input type="text" class="form-control" v-model="item.email" name="email">
        </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
        <div class="form-group">
            <label>Password :</label>
            <input type="password" class="form-control" v-model="item.password" name="password" >
        </div>
        </div>
      </div>
        <div class="form-group">
        <button type="submit" class="btn btn-primary">Login</button>
    </div>
    </form>
  </div>
</template>
<script>
  window.fbAsyncInit = function() {
     FB.init({
         appId: '531058297229057',
         xfbml: true,
         version: 'v2.4'
     });
     FB.AppEvents.logPageView();
 };
 (function(d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {
         return;
     }
     js = d.createElement(s);
     js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 export default {
     data() {
         return {
             item: {},
             fbSignInParams: {
                 scope: 'email,user_likes',
                 return_scopes: true
             }
         }
     },
     beforeCreate: function() {
         if (this.$session.exists('username')) {
             this.$router.push('/');
         }
     },
     methods: {
         login() {
             let uri = 'http://localhost:8080/login';
             console.log(this.item);
             this.axios.post(uri, this.item).then((response) => {
                 this.$session.set('username', response.data);
                 this.$router.push({
                     name: 'Profile'
                 });
             })
         },
     }
 }
</script>