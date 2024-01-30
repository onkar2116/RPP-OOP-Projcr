let patients = [];

function savePatient() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const notes = document.getElementById('notes').value;

    const patient = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        gender: gender,
        email: email,
        phone: phone,
        notes: notes
    };

    patients.push(patient);

    updatePatientList();

    clearForm();
}

function updatePatientList() {
    const patientListUl = document.getElementById('patientListUl');
    patientListUl.innerHTML = '';

    patients.forEach(patient => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Name:</strong> ${patient.firstName} ${patient.lastName}<br>
                        <strong>DOB:</strong> ${patient.dob}<br>
                        <strong>Gender:</strong> ${patient.gender}<br>
                        <strong>Email:</strong> ${patient.email}<br>
                        <strong>Phone:</strong> ${patient.phone}<br>
                        <strong>Notes:</strong> ${patient.notes}`;
        patientListUl.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('patientForm').reset();
}

window.onload = updatePatientList;
