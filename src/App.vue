<template>
	<root>
		<app-navigation/>
	</root>
</template>
<style></style>
<script type="text/javascript">
  import {Root} from 'native-base';
  import {StackNavigator, createMaterialBottomTabNavigator} from 'vue-native-router';

  // Tab Navigation Screens
  import Home from './screens/home'

  const AppNavigation = StackNavigator({
	Home: { screen: Home }
  }, {
    initialRouteName: "Home",
    headerMode: "none"
  });
  export default {
    components: {Root, AppNavigation}
  }
</script>