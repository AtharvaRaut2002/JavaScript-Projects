//const list = document.querySelector('#book-list ul');

// delete books
//list.addEventListener('click', (e) => {
//  if(e.target.className == 'delete'){
//    const li = e.target.parentElement;
//    li.parentNode.removeChild(li);
//  }
//});
//
//var btns = document.querySelectorAll('#book-list .delete');
//
//Array.from(btns).forEach(function(btn){
//    btn.addEventListener('click', function(e){
//        const li = e.target.parentElement;
//        
//        li.parentNode.removeChild(li);
//    });
//});
//
//const link = document.querySelector('#page-banner a');
//
//link.addEventListener('click',function(e){
//    e.preventdefault();
//    console.log('navigation to', e.target.textContent,'was prevented');
//});
document.addEventListener('DOMContentLoaded', function(){
     
    const list = document.querySelector('#book-list ul');
    
    list.addEventListener('click', function(e){
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            list.removeChild(li); 
        }
    });
    
    const addForm = document.forms['add-book'];
    
    addForm.addEventListener('submit', function(e){  
        e.preventDefault();
        const value = addForm.querySelector('input[type = "text"]').value;
    
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');
    
        //add Content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;
        
        //add Classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');
    
        //append to document
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    
    
    });
    
    //hide books
    
    const hideBox = document.querySelector('#hide');
    
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            list.style.display = "none";
        }
        else{
            list.style.display = "initial"; 
        }
    });
    
    //Search box
    
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        
        Array.from(books).forEach(function(book) {
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) != -1){
                book.style.display = 'block';
            }
            else{
                book.style.display = 'none';
            }
        })
    });
    
    //tabbed content
    
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click',function (e) {
        if(e.targetName == 'li'){
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(function (panel){
                if(panel == targetPanel){
                    panel.classList.add('active');
                }
                else{
                    panel.classList.remove('active');
                }
            })
        }
    })
})
