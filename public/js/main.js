
const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
// const snippetTextArea = document.querySelector('#snippetTextArea')
const favoriteButtons = document.querySelectorAll('.favorite_btn')
const unfavoriteButtons = document.querySelectorAll('.unfavorite_btn')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

favoriteButtons.forEach(el => {
    el.addEventListener('click', selectFavorite)
})

unfavoriteButtons.forEach(el => {
    el.addEventListener('click', deselectFavorite)
})


async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('pins/deleteSnippet', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

snippetTextArea.addEventListener('keydown', (e) => {
    if (e.keyCode === 9) {
      e.preventDefault()
  
      snippetTextArea.setRangeText(
        '  ',
        snippetTextArea.selectionStart,
        snippetTextArea.selectionStart,
        'end'
      )
    }
  })

async function selectFavorite() {
    const pinId = this.parentNode.dataset.id;
    try {
        const response = await fetch('selectFavorite', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                pinId: pinId
            })
        })
        const data = await response.json()
        location.reload()
    }
    catch(err) {
        console.log(err)
    }
}

async function deselectFavorite() {
    console.log('deselect starts')
    const pinId = this.parentNode.dataset.id;
    try {
        const response = await fetch('deselectFavorite', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                pinId: pinId
            })
        })
        const data = await response.json()
        location.reload()
    }catch(err) {
        console.log(err)
    }
}
// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         // const data = await response.json()
//         // console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }