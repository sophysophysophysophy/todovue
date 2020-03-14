<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer">
          <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
      </span>
       <Modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <!--slot : vue의 유요한 기능 = 특정 컴포넌트의 일부 UI 재사용 가능 -->
        <h3 slot="header">경고! <i class="closeModalBtn fas fa-times" @click="showModal=false"></i></h3>
        <div slot="body">무언가를 입력하세요.</div>
        <h5 slot="footer">copy right</h5>


      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data(){
        return {
            newTodoItem:"",
            showModal:false
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ''){
                // this.$emit('addTodoItem',this.newTodoItem);

                //좀 더 안전하게..
                const text = this.newTodoItem.trim();
                this.$store.commit('addOneItem', text);
                this.clearInput();
            }else {
                this.showModal=!this.showModal;
            }
            
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components: {
        Modal
    }

}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}

</style>