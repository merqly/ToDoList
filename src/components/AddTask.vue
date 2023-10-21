<template>
    <div id="divSetter">
        <div id = 'divSetter1'>
            <input class="setContent" id="input1" type="text" placeholder="Enter Name">
            <input class="setContent" id="input2" type="text" placeholder="Enter Text">
            <button id="btn">Add Task</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      let input1 = document.getElementById('input1')
      let input2 = document.getElementById('input2')
      let button = document.getElementById('btn')
      var card = document.createElement('div')
      let deleteBtn;
      card.className = 'card'
      document.body.appendChild(card);
      let count = 0
  
      function addTask() {
        if (input1.value == '' || input2.value == ''){
            alert('Please, enter task name and text')
            return
        }
        var div = document.createElement('div');
        div.className = 'div' + count;
        div.id = 'div';
        var name = document.createElement('p');
        name.className = 'contentName';
        name.id = 'name' + count;
        name.textContent = input1.value;
        var text = document.createElement('p');
        text.className = 'content';
        text.id = 'text' + count;
        text.textContent = input2.value;
        deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.id = count;
        deleteBtn.textContent = 'Delete'
        div.appendChild(name);
        div.appendChild(text);
        div.appendChild(deleteBtn);
        card.appendChild(div);
        count++;
        input1.value = ''
        input2.value = ''
      }
      function deleteTask() {
      for (let i = 0; i < count; i++) {
        if (this.deleteBtn.id == i) {
          let remove = document.querySelectorAll('.div' + i);
        }
      }
      console.log(2);
    }

      button.addEventListener('click', addTask);
      deleteBtn.addEventListener('click', deleteTask)
    }
  }
  </script>
  
  <style>
#div {
display: block;
background-color: rgb(24,27,43);
width: 1000px;
min-width: 500px;
box-shadow: 0 10px 50px -20px rgb(0, 0, 0);
min-height: 120px;
border-radius: 15px;
margin: 20px;
word-wrap: break-word;
overflow: auto;
}

.card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.content {
    margin: 15px;
    border-radius: 8px;
    padding: 5px;
    color: rgba(158, 172, 255, 0.575);
    font-family: 'Calibri';
    font-size: 20px;
}
.contentName {
    margin: 15px;
    border-radius: 8px;
    padding: 5px;
    color: rgb(158, 172, 255, 0.575);
    font-family: 'Calibri';
    font-size: 25px;
    font-weight: bold;
}
.deleteBtn {
margin: 20px;
color: rgb(148, 0, 0);
background-color: rgb(24,27,43);
font-size: 18px;
font-family: 'Calibri';
font-weight: bold;
width: 60px;
height: 35px;
border: 2px solid rgb(148, 0, 0);
border-radius: 5px;
}
.deleteBtn:hover {
    background-color: rgba(114, 0, 0, 0.753);
}
#divSetter {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#divSetter1 {
display: block;
background-color: rgb(24,27,43);
width: 1000px;
min-width: 500px;
box-shadow: 0 10px 50px -20px rgb(0, 0, 0);
min-height: 120px;
border-radius: 15px;
margin: 20px;
word-wrap: break-word;
overflow: auto;
}
.setContent {
    display: block;
    margin: 15px;
    width: 965px;
    background-color: transparent;
    border: 0;
    font-family: 'Calibri';
    font-size: 20px;
    color: rgba(158, 172, 255, 0.575);
}
#input1 {
    font-size: 25px;
    font-weight: bold;
}
.setContent::placeholder {
    color: rgba(158, 173, 255, 0.200);
}
#btn {
    margin-top: 5px;
    margin-left: 15px;
    margin-bottom: 15px;
    width: 90px;
    height: 35px;
    border-radius: 5px;
    border: 0;
    color: rgb(24,27,43);
    font-family: 'Calibri';
    font-size: 18px;
    font-weight: bold;
    background-color: rgba(117, 127, 189, 0.575);
}
#btn:hover {
    background-color: rgb(158, 172, 255, 0.575);
}
  </style>
  