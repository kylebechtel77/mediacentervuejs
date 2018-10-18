<template>
  <div>
    <b-button ref="signinBtn" class="btn-sign-in">Sign In</b-button>
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