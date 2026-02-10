// Function to update the preview and save to LocalStorage
function updatePreview() {
    const data = {
        department: document.getElementById('department').value,
        courseName: document.getElementById('courseName').value,
        courseCode: document.getElementById('courseCode').value.toUpperCase(),
        studentName: document.getElementById('studentName').value,
        roll: document.getElementById('roll').value,
        registration: document.getElementById('registration').value,
        deptInput: document.getElementById('departmentInput').value,
        teacher: document.getElementById('teacherName').value,
        designation: document.getElementById('designation').value,
        date: document.getElementById('date').value
    };

    // Update Preview Spans
    document.getElementById('pDepartment').innerText = data.department.toUpperCase();
    document.getElementById('pCourseName').innerText = data.courseName;
    document.getElementById('pCourseCode').innerText = data.courseCode;
    document.getElementById('pStudentName').innerText = data.studentName;
    document.getElementById('pRoll').innerText = data.roll;
    document.getElementById('pRegistation').innerText = data.registration;
    document.getElementById('pDepartmentInput').innerText = data.deptInput;
    document.getElementById('pTeacherName').innerText = data.teacher;
    document.getElementById('pDesignation').innerText = data.designation;
    document.getElementById('pDate').innerText = data.date;

    // Save to browser memory
    localStorage.setItem('labReportData', JSON.stringify(data));
}

// Function to load saved data when page opens
function loadSavedData() {
    const saved = localStorage.getItem('labReportData');
    if (saved) {
        const data = JSON.parse(saved);
        document.getElementById('department').value = data.department;
        document.getElementById('courseName').value = data.courseName;
        document.getElementById('courseCode').value = data.courseCode;
        document.getElementById('studentName').value = data.studentName;
        document.getElementById('roll').value = data.roll;
        document.getElementById('registration').value = data.registration;
        document.getElementById('departmentInput').value = data.deptInput;
        document.getElementById('teacherName').value = data.teacher;
        document.getElementById('designation').value = data.designation;
        document.getElementById('date').value = data.date;
    }
    updatePreview();
}

function toggleDark() {
    document.body.classList.toggle('dark');
}

// Event Listeners
document.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('input', updatePreview);
});

// Initialize
window.onload = loadSavedData;