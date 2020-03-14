<template>
  <div>
      <transition-group name="list" tag="ul">
          <!-- this.$store.getters.storeTodoItems  : getters로 접근 -->
          <!-- this.$store.state.todoItems  : state 직접 접근 -->
          <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
              <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
                v-on:click="toggleComplete({todoItem, index})"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
            <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                <i class="fas fa-trash-alt"></i>
            </span>
            
          </li>
      </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {

        //템플릿에서 직접 접근하는건 연산 등을 최대한 줄이는 방향으로 진행
        // 따라서 화면에 필요한 todoItems를 store에 직접 접근해서 가져오기보다는
        // computed를 통해 받아내서 뿌려주는 것을 vue에서 권고 
        // 컴포넌트 내부 로직 안에서 다 처리 -> 최종적으로 깔끔하게 탬플릿 유지 
        // todoItems() {
        //     return this.$store.getters.storeTodoItems;
        // }

        // helper
        // 배열 리터럴 : key-value 값 같을 때 축약 ES6문법  
        ...mapGetters(['storedTodoItems'])

        // 객채 리터럴 : getters이름과 컴포넌트에서 사용할 이름이 다를 때 객체 리터럴 사용
        // ...mapGetters({
        //     컴포넌트단 이름 : 'store.js에서의 명'
        // })

    }, 
    methods: {
        ...mapMutations({
            // 헬퍼 함수들은 인자를 선언 안해도 암묵적으로 메소드에 인자가 들어있으면 
            // 선언하지 않아도 인자를 넘겨줌 
            // 하지만 인자들 객체로 엮어서 하나로 보내야하기 때문에 
            // 컴포넌트단의 메소드에도 인자 1개로 묶어져있어야 한다.
            // removeTodo(todoItem, index) -> removeTodo({todoItem, index})
            removeTodo: 'removeOneItem',
            toggleComplete : 'toggleOneItem'

        })


    //     removeTodo(todoItem, index){
    //         //vuex 이전 버전
    //         // this.$emit('removeItem', todoItem, index);
            
    //         // vuex
    //         // const obj = { todoItem : todoItem, index: index};
            
    //         //ES6는 오브젝트 이름과 객체명이 같으면 (키 , 밸류가 같으면 단축이 가능) 
    //         // + 객체를 할당하지 않고 바로 선언할 수 있다.
    //         this.$store.commit('removeOneItem', {todoItem, index});
    //    },       
        // toggleComplete(todoItem, index){
        //     //vuex 이전 버전
        //     // this.$emit('toggleItem', todoItem,index);

        //     // vuex
        //     // const obj = { 
        //     //     todoItem : todoItem, index : index
        //     // };

        //     //ES6는 오브젝트 이름과 객체명이 같으면 (키 , 밸류가 같으면 단축이 가능) 
        //     // + 객체를 할당하지 않고 바로 선언할 수 있다.
        //     this.$store.commit('toggleOneItem', {todoItem, index});
        // }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;

}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}


</style>