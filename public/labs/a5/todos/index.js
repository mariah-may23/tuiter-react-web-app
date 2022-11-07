import TodoList from "./TodoList.js";
import C from "../../../../src/labs/a6/conditional-output/practice.js";

$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
     
   </div>
`);
