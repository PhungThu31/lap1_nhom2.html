document.addEventListener('DOMContentLoaded', () => {
    const courseForm = document.getElementById('courseForm');
    const courseDetails = document.getElementById('courseDetails');
    const deleteModal = document.getElementById('deleteModal');
    
    // Mock data for instructors
    const instructors = ['Nguyen Van A', 'Nguyen Thi B', 'Nguyen Van C'];
    const createdBySelect = document.getElementById('createdBy');

    // Populate the instructor dropdown
    instructors.forEach(instructor => {
        const option = document.createElement('option');
        option.value = instructor;
        option.textContent = instructor;
        createdBySelect.appendChild(option);
    });

    // Function to show the course form
    function showCourseForm() {
        document.querySelector('.course-form').style.display = 'block';
        document.querySelector('.course-details').style.display = 'none';
    }

    // Function to show course details
    function showCourseDetails() {
        document.querySelector('.course-form').style.display = 'none';
        document.querySelector('.course-details').style.display = 'block';
    }

    // Handle form submission
    courseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Course created/updated successfully!');
    });

    // Handle edit button click
    document.getElementById('editButton').addEventListener('click', showCourseForm);

    // Handle delete button click
    document.getElementById('deleteButton').addEventListener('click', () => {
        deleteModal.style.display = 'flex';
    });

    // Handle cancel delete
    document.getElementById('cancelDelete').addEventListener('click', () => {
        deleteModal.style.display = 'none';
    });

    // Handle confirm delete
    document.getElementById('confirmDelete').addEventListener('click', () => {
        alert('Course deleted successfully!');
        deleteModal.style.display = 'none';
    });

    // Handle cancel button click
    document.getElementById('cancelButton').addEventListener('click', () => {
        courseForm.reset();
    });

    // Handle back button click
    document.getElementById('backButton').addEventListener('click', showCourseDetails);

    // Initially show the course form
    showCourseForm();
});
