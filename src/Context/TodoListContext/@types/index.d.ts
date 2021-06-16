interface ITodoListContext {
    // 컨택스트의 타입을 정의
    todoList: Array<string>;
    addTodoList: (todo: string) => void;
    removeTodoList: (index: number) => void;
}
