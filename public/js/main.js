const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
// const snippetTextArea = document.querySelector('#snippetTextArea')
const favoriteButtons = document.querySelectorAll('.favorite_btn')

console.log(favoriteButtons)

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

favoriteButtons.forEach(el => {
    el.addEventListener('click', selectFavorite)
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

// snippetTextArea.addEventListener('keydown', (e) => {
//     if (e.keyCode === 9) {
//       e.preventDefault()
  
//       snippetTextArea.setRangeText(
//         '  ',
//         snippetTextArea.selectionStart,
//         snippetTextArea.selectionStart,
//         'end'
//       )
//     }
//   })

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
        console.log(data)
        location.reload()
    }
    catch(err) {
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
//         const data = await response.json()
//         console.log(data)
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