<template>
<div class="row" align="center">
	                                <div class="col-md-12">
	                                    <div class="card-header">
	                                        <h4 class="card-title">Page home</h4>
	                                    </div>
	                                    <div class="card-content">
	                                    	
	                                        <router-link to="/Login" tag="button" class="btn btn-wd btn-success">
	                                            <span class="btn-label">
	                                                <i class="fa fa-check"></i>
	                                            </span>
	                                            Login
	                                       </router-link>

	                                        <router-link to="/signup" tag="button" class="btn btn-wd btn-danger">
	                                            <span class="btn-label">
	                                                <i class="fa fa-times"></i>
	                                            </span>
	                                            Signup
	                                        </router-link>

	                                         <button v-on:click="connect" type="button" class="btn btn-wd btn-info btn-fill btn-rotate">
	                                           
	                                            FaceBook
	                                        </button>

	                                        <button  v-on:click="logout" type="button" class="btn btn-wd btn-warning btn-fill btn-magnify">
	                                            <span class="btn-label">
	                                                <i class="ti-search"></i>
	                                            </span>
	                                            Logout
	                                        </button>
	                                </div>
	              </div>
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
       
       methods: {
            logout()
            {
              if (this.$session.exists('username')) {
               this.$session.remove('username');
               this.$session.remove('accessToken');
           }
            },
            connect()
            {  var accessToken
            	if(this.$session.get('username')) {
             
              FB.getLoginStatus(function(response) {
              accessToken = response.authResponse.accessToken;
              console.log(accessToken);
          }); 
              this.$session.set('accessToken',"accessToken");
              this.$router.push('/profile');
              }
              else
              {
              	alert('please login to your account to see your FaceBook pictures')
              }
           }
    }
}
</script>
