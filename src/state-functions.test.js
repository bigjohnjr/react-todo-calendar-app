import {toggleDone, addTodo, deleteTodo} from './state-functions';

describe('Tests toggle', () => {
  describe('when given an incomplete todo', () => {
    it('marks the todo as complete', () => {
      const startState = {
        todos: [{id: 1, done: false, name: 'Write some code'}]
      };
      const finishedState = toggleDone(startState, 1);

      expect(finishedState.todos).toEqual([{id: 1, done: true, name: 'Write some code'}]);

    });
  });
});

describe('Tests addTodo', () => {
  describe('when the user enters a new todo', () => {
    it('adds a todo to the todolist', () => {
      const startState = {
        todos: []
      };
      const finishedState = addTodo(startState, {name: 'Write unit test'});

      expect(finishedState.todos).toHaveLength(1);
      expect(finishedState.todos[0]).toHaveProperty('id');
      expect(finishedState.todos[0]).toHaveProperty('name');
      expect(finishedState.todos[0]).toHaveProperty('done');
      expect(finishedState.todos[0].done).toBeFalsy();
      expect(finishedState.todos[0].name).toEqual('Write unit test');
    });
  });
});

// describe('Tests deleteTodo', () => {
//   describe('when a user clicks the delete button', () => {
//     it('deletes the todo item', () => {
//       const startState = {
//         todos: [{id = 1}]
//       };
//
//       const finishedState = deleteTodo(startState, {id: 2});
//
//       expect(finishedState.todos[0].
//     });
//   });
// });
