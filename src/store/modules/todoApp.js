//속성이 함수를 포함한 구조 (객체의 속성으로 함수가 들어감 )

const storage = {
    fetch(){
        const arr = []; //arr 선언 
        if(localStorage.length > 0){
            //반복문은 변수의 수가 계속 올라가야하기 때문에 무조건 let을 사용해야함
              for(let i =0 ; i < localStorage.length; i++){
                  if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                      arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                      // this.todoItems.push(localStorage.key(i));
                  }
                  
             }
  
          }   
          return arr;
    },
};


const state = {
        headerText : 'TODO it!',
        todoItems : storage.fetch()
    };

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, todoItem){
            //overriding이 되지 않아서 안전한 프로그래밍이 될 수 있다고 생각하여 const를 let보다 선호
            const obj = {completed: false, item: todoItem};
      
              //console.log(this.newTodoItem);
              //저장 logic
              //setitem API : localstorage MDN 에서 확인 가능. key value형태
              localStorage.setItem(todoItem, JSON.stringify(obj));

              //mutation에서 state로 접근하는 방법은 첫 인자로 접근해야 함 
              state.todoItems.push(obj);

              //console.log('received');
              
        },
        removeOneItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload){
            state.todoItems[payload.index].completed=!state.todoItems[payload.index].completed;
            
            //로컬 스토리지 데이터 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
}; 


// 한개의 파일에서 한개만 추출될 수 있는것  : default
export default {
    state,
    getters,
    mutations
}