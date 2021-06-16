import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const TodoListContext = createContext<ITodoListContext>({
    // TodoListContext 생성 -> 타입은 ITodoListContext
    todoList: [],
    addTodoList: (todo: string): void => {}, // 추가
    removeTodoList: (index: number): void => {}, // 삭제
});

const TodoListContextProvider = ({children}: Props) => {
    // 컨택스트 구현 -> 공통부모 컴포넌트 (TodoListContextProvider)
    const [todoList, setTodoList] = useState<Array<string>>([]);

    const addTodoList = (todo: string): void => {
        const list = [...todoList, todo];
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };

    const removeTodoList = (index: number): void => {
        let list = [...todoList];
        list.splice(index, 1);
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };

    const initData = async () => {
        try {
            const list = await AsyncStorage.getItem('todoList');
            if (list !== null) {
                setTodoList(JSON.parse(list));
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <TodoListContext.Provider
            value={{
                todoList,
                addTodoList,
                removeTodoList,
            }}>
            {children}
        </TodoListContext.Provider>
    );
};

export {TodoListContextProvider, TodoListContext};
