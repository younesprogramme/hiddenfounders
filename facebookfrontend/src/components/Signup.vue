<template>
  <div>
    <h1>Create Account</h1>
    <form v-on:submit.prevent="addItem">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="item.email" name="email">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="item.password" name="password" >
                </div>
            </div>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Signup</button>
        </div>
    </form>
  </div>
</template>
<script>
 
   export default {
    data(){
        return{
          item:{}, 
          pictures:{url:""},
          fbSignInParams: {
          scope: 'email,user_likes',
          return_scopes: true
      }
  }
    },
     beforeCreate: function () {
     if (this.$session.exists('username')) {
        this.$router.push('/');
      }
  },
    methods: {
      addItem(){
        let uri = 'http://localhost:8080/createaccount';
        console.log(this.item);
        this.axios.post(uri, this.item).then((response) => {
            alert( response.data);
            this.$router.push({name: 'Home'});
        })
    },
  }
}
</script>
<style type="text/css">
    .col-md-12 column {  
   text-align:center;
}
.col-md-12 column form {
   display:inline-block;
}
</style>