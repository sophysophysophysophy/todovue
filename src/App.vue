<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> -->
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// 헬퍼!!  -> component 로직단에서 쉽게 사용할 수 있게 미리 매핑
// ... -> ES6의 Object Spread Operator (뿌리는 연산자)  
// import { mapState} from 'vuex'


import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

      
// 탬플릿 . 스크립트, 스타일 했을 때 스크립트에 default 들어감 : default는 하나의 파일엣
// 하나만 export됨.  쓸데없이 import되지 않게 캡슐화하여 모듈화
export default {
  // data(){ 
  //   return {
  //     // todoItems:[]
  //   }
  // },
  // methods:{
    //method라는 객체 안의 속성 메소드 : removeOneItem: function(){ } (원ㄹㅐ)

    // vuex 이전 버전 
    // removeOneItem(todoItem, index){
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index,1);          
    // },
    // addOneItem(todoItem){
    //   //overriding이 되지 않아서 안전한 프로그래밍이 될 수 있다고 생각하여 const를 let보다 선호
    //   const obj = {completed: false, item: todoItem};

    //     //console.log(this.newTodoItem);
    //     //저장 logic
    //     //setitem API : localstorage MDN 에서 확인 가능. key value형태
    //     localStorage.setItem(todoItem, JSON.stringify(obj));
    //     this.todoItems.push(obj);
    // },
    // toggleOneItem(todoItem,index){
    //     this.todoItems[index].completed= !this.todoItems[index].completed;
    //     //로컬 스토리지 데이터 갱신
    //     localStorage.removeItem(todoItem.item);
    //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    //     console.log(index);
    // },
    // clearAllItems(){
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  // },
  components:{
    //컴포넌트 태그명 : 컴포넌트 내용
    //ES6 : 객체의 속성명과 값 명이 동일할 때 축약 가능 -> 컴포넌트 태그명 
    // 향상된 객체 리터럴 
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
 text-align: center;
 background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow{
  box-shadow: 5px 1px 10px rgba(0, 0, 0, 0. 03);
}


</style>