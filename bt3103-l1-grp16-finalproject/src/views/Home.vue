<template>
  <WelcomePage />
  <!-- <AddCoin @added="change" />
  <DisplayProfit key="refreshComp" /> -->
</template>
<script>
import WelcomePage from '../components/WelcomePage.vue'
// import AddCoin from '../components/AddCoin.vue'
// import DisplayProfit from '../components/DisplayProfit.vue'

export default {
  name: 'App',
  components: {
    WelcomePage,
    // AddCoin,
    // DisplayProfit
  },
  data() {
    return {
      refreshComp: 0
    }
  },
  methods: {
    change() {
      this.refreshComp += 1
    }
  }
}
</script>