import React from "react";

function TodoList(props) {
    return <div  >
        <li><i onClick={() => {
            props.deleteitem(props.id)
        }} class="fas fa-check"></i>&nbsp;&nbsp;
            {props.text}</li>
    </div>
}

export default TodoList