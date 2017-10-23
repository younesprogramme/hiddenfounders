<template>
  <div>
    <router-link to="/signup">
            Home page
    </router-link><br/>
   <p><h3><b>My profile : {{item.email}} </b></h3></p><br/>
   <p>{{message}}</p>
    <table class="table table-hover">
            <thead>
            <tr>
                <td></td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="picture in pictures.url">
                    <td> <img :src="picture" height="50px" width="50px"></td>
                </tr>
            </tbody>
    </table> 
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
             item: {
                 email: this.$session.get('username')
             },
             pictures: {
                 url: ""
             },
             message: ''
         }
     },
     beforeCreate: function() {

     },
     created() {
         var elements = [];
         if (this.$session.get('username')) { 
             if (this.$session.get('accessToken')) {
                this.message = "list of images :"
                 FB.getLoginStatus(function(response) {
                     var accessToken = response.authResponse.accessToken;
                     FB.api('/me?fields=albums{photos{images}}&access_token=' + accessToken, function(response) {
                         var element = [];
                         console.log(response.albums.data[0].photos.data.length);
                         for (var j = 0; j < response.albums.data.length; j++) {
                             for (var i = 0; i < response.albums.data[j].photos.data.length; i++) {
                                 elements.push(response.albums.data[j].photos.data[i].images[0].source);
                             }
                         }
                     });
                 });
                 this.pictures.url = elements;
             } else {
                 this.message = "click on the facebook button to see the list of your facbook image";
             }
         } else {
             this.$router.push('/');
         }
     },
     methods: {
         logout: function() {
             this.$session.remove('username');
             if (!this.$session.exists('username')) {
                 this.$router.push('/');
             }
           },
     }
 }
</script>