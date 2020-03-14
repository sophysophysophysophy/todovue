const addOneItem = (state, todoItem) => {
    //overriding이 되지 않아서 안전한 프로그래밍이 될 수 있다고 생각하여 const를 let보다 선호
    const obj = {completed: false, item: todoItem};

      //console.log(this.newTodoItem);
      //저장 logic
      //setitem API : localstorage MDN 에서 확인 가능. key value형태
      localStorage.setItem(todoItem, JSON.stringify(obj));

      //mutation에서 state로 접근하는 방법은 첫 인자로 접근해야 함 
      state.todoItems.push(obj);

      //console.log('received');
      
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed=!state.todoItems[payload.index].completed;
    
    //로컬 스토리지 데이터 갱신
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}



//한번에 store로 뺄 수 있는 export를 해줌 !! 매우 간단 
export { addOneItem, removeItem, toggleOneItem, clearAllItems }