import React, { useState } from "react";

export default function AddTodo({addTodo}) {
    const[title,settitle]=useState("");
    const[desc,setdesc]=useState("");


    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc)
        {
            alert("title no defined ")
        }
        else
       { addTodo(title,desc);
        settitle("");
        setdesc("");}

    }
    return (
        <>
            <h3 className="text-center my-4">ADD Todos</h3>
            <form class="container" onSubmit={submit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Todo name </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value={title} onChange={(e)=>{settitle(e.target.value)}}aria-describedby="emailHelp" placeholder="Enter Todo title" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" class="form-control" value={desc} id="exampleInputPassword1" onChange={(e) => { setdesc(e.target.value) }} placeholder=" Enter Description" />
                </div>
                <div class="form-check">

                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </>
    );
};