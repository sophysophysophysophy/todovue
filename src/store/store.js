
// ...? 이해 잘 안됨 솔직힣ㅎ
import Vue from 'vue' 
import Vuex from 'vuex'

// store 구조 모듈화 
// import * as getters from './getters'
// import * as mutations from './mutations'

//app이 비대해져서 1개의 store로는 관리가 힘들 때 modules 속성 사용 
//객체의 속성이 함수를 포함한 구조 
import todoApp from './modules/todoApp'


//yarn...
// 뷰 플러그인. vuex의 글로벌 선언 ..? 모든 컴포넌트에서 사용하겠다.. vuex 등록
Vue.use(Vuex);

//storage 동작 빼기
// const storage = {
//     fetch(){
//         const arr = []; //arr 선언 
//         if(localStorage.length > 0){
//             //반복문은 변수의 수가 계속 올라가야하기 때문에 무조건 let을 사용해야함
//               for(let i =0 ; i < localStorage.length; i++){
//                   if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//                       arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                       // this.todoItems.push(localStorage.key(i));
//                   }
                  
//              }
  
//           }   
//           return arr;
//     },
// };




export const store = new Vuex.Store({
    //  ... 
    // state : {
    //     headerText : 'TODO it!',
    //     todoItems : storage.fetch()
    // },
    // getters: {
    //     storedTodoItems(state) {
    //         console.log(state.todoItemsv);
            
    //         return state.todoItems;
    //     }
    // },

    // getters : getters,
    // mutations : mutations,

    //츅약~
    // getters,
    // mutations,



    //modules 방법
    modules: {
        todoApp
    }
,
    // mutations: {
        // addOneItem(state, todoItem){
        //     //overriding이 되지 않아서 안전한 프로그래밍이 될 수 있다고 생각하여 const를 let보다 선호
        //     const obj = {completed: false, item: todoItem};
      
        //       //console.log(this.newTodoItem);
        //       //저장 logic
        //       //setitem API : localstorage MDN 에서 확인 가능. key value형태
        //       localStorage.setItem(todoItem, JSON.stringify(obj));

        //       //mutation에서 state로 접근하는 방법은 첫 인자로 접근해야 함 
        //       state.todoItems.push(obj);

        //       //console.log('received');
              
        // },
        // removeOneItem(state, payload){
        //     localStorage.removeItem(payload.todoItem.item);
        //     state.todoItems.splice(payload.index, 1);
        // },
        // toggleOneItem(state, payload){
        //     state.todoItems[payload.index].completed=!state.todoItems[payload.index].completed;
            
        //     //로컬 스토리지 데이터 갱신
        //     localStorage.removeItem(payload.todoItem.item);
        //     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        // },
        // clearAllItems(state){
        //     localStorage.clear();
        //     state.todoItems = [];
        //}
    //},

    // 첫 인자 : context (actions에서 mutation 접근하기 위한 경로)
    // this.$store.과 같은거 
    // this.$store.dispatch -> action호출 -> action에서 mutation 호출하여 commit 가능 
    // mutation에게 신호를 보내는 역할 
    // 비동기처리일 때 actions에 선언 (왜?) -> mutation이 어느 컴포넌트에서 호출하였는지 
    // 관리하기 위하여 (state 값의 변화 추적을 위하여)
    //따라서 actions에서 비동기, mutation에서 동기 처리 담당 
    actions: {

    }

});