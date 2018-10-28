<template>
  <div class="login-view">
    <div class="login-widget centered">
      <h2>East Paulding Middle School</h2>
      <h3>Media Center</h3>
      <b-button ref="signinBtn" class="btn-sign-in">Sign In</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "signin",
    mounted () {
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: '359154513034-ll9m68ogij64tddqs5g5h8sj1l7uofgo.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      })
      auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
        this.onSignIn(googleUser)
      }, error => console.log(error))
    })
  },
  methods: {
    async onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    },
    signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }
  }
}

</script>

<style scoped lang="scss">
  .login-view {
    background: #317394;
    background-image: url("../assets/library.png");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 1000px;
  }
  .login-widget {
    width: 500px;
    height: 150px;
    background: black;
    color: white;
    padding-top: 5px;
    -webkit-box-shadow: 0px 0px 20px 0px #ccc;
-moz-box-shadow: 0px 0px 20px 0px #ccc;
box-shadow: 0px 0px 20px 0px #ccc;
  }
  .btn-sign-in {
    position: absolute;
    left: 42%;
    bottom: 10%;
  }
  .centered {
    position: fixed;
    top: 50%;
    left: 40%;
    margin-top: -50px;
    margin-left: -100px;
  }
</style>