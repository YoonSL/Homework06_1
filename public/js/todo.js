$(function () {

    const render = function () {
        $('.content').html('');
        $.ajax({url:'/api/todoList' ,method:'GET'})
        .then(function(data){
             for(let i = 0; i < data.length;i++){

                $('.content').append(
                    $('<button>')
                    .addClass(`far fa-square clear checkTodo`)
                    .attr('data-index', "heelp"),
                $('<p>')
                    .text(data[i])
                    .addClass('textTodo'),
                $('<button>')
                    .addClass('fas fa-times clear deleteTodo'),
                )

                console.log(i);
                console.log(data);
             }
            })
    }

    addingTodo = function(event){
        event.preventDefault();
        todoList = $('#add').val().trim();
        const newdata= [todoList];
        $.ajax({url:'api/todoList',method:'POST', newdata})
            .then(function (data) {
                if (data) {
                    $('#add').val('');
                    $('#add').focus();
                    render();
                } else {
                    alert('Something is wrong');
                }
            })
        render();
    }

    $('#buttonGo').on('click', addingTodo);
    // $(document).on('click', '.checkTodo', renderUpdateTodo);
    // $(document).on('click', '.deleteTodo', eraseTodo);
    render();
});


 // const renderTodos = function (outputElement, dataList) {
    //     for (let i = 0; i < dataList.length; i++) {
    //         const output = $(outputElement);
    //         const outputType = outputElement.slice(1);
    //         const todoText = $(dataList[i]);
    //         const todo = $('<div>').addClass('todoLists');
    //         todo.append(
                // $('<button>')
                //     .addClass(`far fa-square clear checkTodo`)
                //     .attr('data-index', `${outputType} - ${i}`),
                // $('<p>')
                //     .text(todoText)
                //     .addClass('textTodo')
                //     .attr('data-index', `${outputType} - ${i}`),
                // $('<button>')
                //     .addClass('fas fa-times clear deleteTodo')
                //     .attr('data-index', `${outputType} - ${i}`),
    //         );
    //         console.log(dataList[i]);
    //         output.append(todo);
    //     }
    // };

    // const addingTodo = function () {
    //     $.ajax({url: '/api/todoList',method:'POST'})
    //     .then(function(todoList){
    //         $('.content').empty();
    //         renderTodos('.content',todoList);
    //         console.log(todoList);
    //     })
    // }
    // const eraseTodo = function () {
    //     const entry = $(this).attr('data-index');

    //     const index = entry.split('_')[1];

    //     $.ajax({ url: `/api/todoList/${index}`, method: 'DELETE' })
    //         .then(function (data) {
    //             if (data.success) {
    //                 render();
    //             } else {
    //                 alert('There was a problem with your submission. Please check your entry and try again.');
    //             }
    //         }
    //         )
    // }
    // const renderUpdateTodo = function(){
    //     const entry = $(this).attr('data-index');
    //     const i = parseInt(entry.split('_')[1]);

    //     console.log(entry);
    //     console.log(i);
    // }
    // const updateTodo = function(newTodo){
    //     const changeTodo = [$('#add').val().trim()];
    //     const index = newTodo.split('-')[1];

    //     $.ajax(
    //         {
    //             url: `/api/todoList/${index}`,
    //             method: 'PUT',
    //             data:changeTodo
    //         })
    //         .then(function(data){
    //             if(data.success){
    //                 render();
    //             }
    //         });
    // }
    // const runTodoQuery = function () {
    //     $.ajax({ url: '/api/todoList', method: 'GET' })
    //         .then(function (todoList) {
    //             $('.content').empty();
    //             renderTodos('.content', todoList);
    //         })
    // }