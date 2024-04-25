/* Js для открытие модалки при нажатии на иконку коризны */

let deleteIcon = document.querySelectorAll('.delete-icon');
let closeModalBtn = document.querySelectorAll('.close-modal-delete');
let modalDelete = document.querySelectorAll('.modal-delete');

deleteIcon.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let parent = e.target.closest('.work__item-btns')
        let modal = parent.nextElementSibling;
        modal.style.display = 'flex';
    });
});

closeModalBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        this.closest('.modal-delete').style.display = 'none';
        e.preventDefault();
    });
});

