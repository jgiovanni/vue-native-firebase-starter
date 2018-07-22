<template>
	<view class="container">
		<app-loading v-if="!isAppReady" />
		<app v-else />
	</view>
</template>

<script type="text/javascript">
  import Vue from "vue-native-core";
  import {VueNativeBase} from "native-base";
  import AppLoading from './AppLoading.vue';
  import App from "../App.vue";
  import store from '../store';

  import firebase from 'react-native-firebase';

  Vue.prototype.store = store;
  Vue.use(VueNativeBase);

  export default {
    name: 'setup',
    components: {App, AppLoading},
    data() {
      return {
        isAppReady: false,
      }
    },
    methods: {},
    created() {
      firebase.auth()
        .signInAnonymouslyAndRetrieveData()
        .then(credential => {
          if (credential) {
            console.log('default app user ->', credential.user.toJSON());
          }
        });
    },
    mounted() {
      this.isAppReady = true;
    }
  }
</script>

<style>
	.container {
		flex: 1;
	}
</style>