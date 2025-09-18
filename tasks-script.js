document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic To-Do List Logic ---
    const newTaskInput = document.getElementById('new-task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        newTaskInput.value = '';
    });

    // --- Dynamic Image Gallery Logic ---
    const imageUpload = document.getElementById('image-upload');
    const addImageBtn = document.getElementById('add-image-btn');
    const imageGalleryContainer = document.getElementById('image-gallery-container');

    addImageBtn.addEventListener('click', () => {
        if (imageUpload.files.length === 0) {
            alert('Please select an image to upload.');
            return;
        }

        const file = imageUpload.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';

            const img = document.createElement('img');
            img.src = e.target.result;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-image-btn';
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', () => {
                imageItem.remove();
            });

            imageItem.appendChild(img);
            imageItem.appendChild(deleteBtn);
            imageGalleryContainer.appendChild(imageItem);
        }

        reader.readAsDataURL(file);
    });
});