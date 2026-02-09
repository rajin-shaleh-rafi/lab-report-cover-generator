function cap(text) {
    return text.toUpperCase();
}

function updatePreview() {
    pDepartment.innerText = cap(department.value);
    pCourseName.innerText = courseName.value;
    pCourseCode.innerText = cap(courseCode.value);
    pStudentName.innerText = studentName.value;
    pRoll.innerText = roll.value;
    pRegistation.innerText = registration.value;
    pDepartmentInput.innerText = departmentInput.value;
    pTeacherName.innerText = teacherName.value;
    pDesignation.innerText = designation.value;
    pDate.innerText = date.value;
}

document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("input", updatePreview);
});

function toggleDark() {
    document.body.classList.toggle("dark");
}

updatePreview();
