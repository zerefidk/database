// JavaScript

// Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Function to show the SQL for a selected section
function showSQL(section) {
    const sqlCodeElement = document.getElementById('sqlCode');
    let sqlCode = '';

    switch (section) {
        case 'employees':
            sqlCode = `
                CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    gender VARCHAR(10),
    date_of_birth DATE,
    email VARCHAR(100) UNIQUE,
    phone_number VARCHAR(20),
    hire_date DATE,
    department VARCHAR(100),
    position VARCHAR(100),
    salary DECIMAL(10, 2),
    status ENUM('active', 'inactive') DEFAULT 'active');
            `;
            break;
        case 'payroll':
            sqlCode = `
                CREATE TABLE payroll (
    payroll_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    pay_date DATE,
    basic_salary DECIMAL(10, 2),
    bonus DECIMAL(10, 2),
    deductions DECIMAL(10, 2),
    gross_salary DECIMAL(10, 2),
    net_salary DECIMAL(10, 2),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id));
            `;
            break;
        case 'leaves':
            sqlCode = `
                CREATE TABLE leaves (
    leave_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    leave_type VARCHAR(50),
    start_date DATE,
    end_date DATE,
    status ENUM('approved', 'pending', 'rejected'),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id));
            `;
            break;
        case 'deductions':
            sqlCode = `
                CREATE TABLE deductions (
    deduction_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    deduction_type VARCHAR(100),
    amount DECIMAL(10, 2),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id));
            `;
            break;
        case 'attendance':
            sqlCode = `
                CREATE TABLE attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    date DATE,
    status ENUM('present', 'absent', 'sick', 'vacation'),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id));

            `;
            break;
        default:
            sqlCode = 'No SQL found for this section.';
    }

    // Display the SQL code in the SQL code div
    sqlCodeElement.innerHTML = `
        <pre>${sqlCode}</pre>
    `;
}

// Add Employee function
function addEmployee(event) {
    event.preventDefault();

    const firstName = document.getElementById('empFirstName').value;
    const lastName = document.getElementById('empLastName').value;
    const department = document.getElementById('empDepartment').value;
    const position = document.getElementById('empPosition').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>1</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${department}</td>
        <td>${position}</td>
        <td>Active</td>
    `;
    document.getElementById('employeeTableBody').appendChild(newRow);
    closeModal('addEmployeeModal');
}

// Add Payroll function
function addPayroll(event) {
    event.preventDefault();

    const employeeId = document.getElementById('payrollEmployeeId').value;
    const payDate = document.getElementById('payrollPayDate').value;
    const grossSalary = document.getElementById('payrollGrossSalary').value;
    const netSalary = document.getElementById('payrollNetSalary').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>1</td>
        <td>${employeeId}</td>
        <td>${payDate}</td>
        <td>${grossSalary}</td>
        <td>${netSalary}</td>
    `;
    document.getElementById('payrollTableBody').appendChild(newRow);
    closeModal('addPayrollModal');
}

// Add Leave function
function addLeave(event) {
    event.preventDefault();

    const employeeId = document.getElementById('leaveEmployeeId').value;
    const leaveType = document.getElementById('leaveType').value;
    const startDate = document.getElementById('leaveStartDate').value;
    const endDate = document.getElementById('leaveEndDate').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>1</td>
        <td>${employeeId}</td>
        <td>${leaveType}</td>
        <td>${startDate}</td>
        <td>${endDate}</td>
        <td>Approved</td>
    `;
    document.getElementById('leaveTableBody').appendChild(newRow);
    closeModal('addLeaveModal');
}

// Add Deduction function
function addDeduction(event) {
    event.preventDefault();

    const employeeId = document.getElementById('deductionEmployeeId').value;
    const deductionType = document.getElementById('deductionType').value;
    const amount = document.getElementById('deductionAmount').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>1</td>
        <td>${employeeId}</td>
        <td>${deductionType}</td>
        <td>${amount}</td>
    `;
    document.getElementById('deductionTableBody').appendChild(newRow);
    closeModal('addDeductionModal');
}

// Add Attendance function
function addAttendance(event) {
    event.preventDefault();

    const employeeId = document.getElementById('attendanceEmployeeId').value;
    const date = document.getElementById('attendanceDate').value;
    const status = document.getElementById('attendanceStatus').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>1</td>
        <td>${employeeId}</td>
        <td>${date}</td>
        <td>${status}</td>
    `;
    document.getElementById('attendanceTableBody').appendChild(newRow);
    closeModal('addAttendanceModal');
}
