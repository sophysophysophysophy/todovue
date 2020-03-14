<template>
  <div id="root">
      <p>{{ this.originalPrice }} </p>
      <p>{{ this.doublePrice }}</p>
      <p>{{ this.triplePrice }}</p>
  </div>
</template>

<script>
import {{ mapGetters }} from 'vuex';

export default {
    computed: {

        // mapGetter함수를 사용하여 밑에 하나하나 getter를 이용한 데이터를 
        // 짧고 손 쉽게 바인딩할 수 있는 장점이 있다. 
        ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice']),

        // originalPrice() {
        //     return this.$store.getters.originalPrice;
        // },
        // doublePrice() {
        //     return this.$store.getters.doublePrice;
        // },
        // triplePrice() {
        //     return this.$store.getters.triplePrice;
        // }
    }
}
</script>

<style>

</style>