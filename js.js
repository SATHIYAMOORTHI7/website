// Hardcoded credentials for validation
const VALID_EMAIL = "redchilli@gmail.com";
const VALID_PASSWORD = "redchilli07";

// Vehicle Data
const vehicles = [
  { id: "Vehicle 001", tirePressure: [30, 25, 30, 21], temperature: 25, tireLifetime: 24, kmRun: 15000 },
  { id: "Vehicle 002", tirePressure: [28, 29, 30, 31], temperature: 27, tireLifetime: 22, kmRun: 12000 },
  { id: "Vehicle 003", tirePressure: [32, 30, 31, 30], temperature: 26, tireLifetime: 23, kmRun: 14000 },
  { id: "Vehicle 004", tirePressure: [31, 30, 30, 20], temperature: 28, tireLifetime: 20, kmRun: 18000 },
  { id: "Vehicle 005", tirePressure: [26, 28, 27, 29], temperature: 30, tireLifetime: 19, kmRun: 20000 },
  { id: "Vehicle 006", tirePressure: [30, 31, 29, 28], temperature: 24, tireLifetime: 21, kmRun: 17000 },
  { id: "Vehicle 007", tirePressure: [29, 27, 26, 28], temperature: 25, tireLifetime: 22, kmRun: 16000 },
  { id: "Vehicle 008", tirePressure: [30, 30, 30, 30], temperature: 29, tireLifetime: 23, kmRun: 19000 },
  { id: "Vehicle 009", tirePressure: [25, 24, 26, 22], temperature: 26, tireLifetime: 20, kmRun: 21000 },
  { id: "Vehicle 010", tirePressure: [28, 29, 27, 30], temperature: 27, tireLifetime: 24, kmRun: 15000 },
];

// Function to navigate between sections
function navigateToSection(sectionId) {
  document.querySelectorAll('.section').forEach((section) => {
    section.classList.add('hidden');
    section.classList.remove('active');
  });
  const targetSection = document.getElementById(sectionId);
  targetSection.classList.remove('hidden');
  targetSection.classList.add('active');
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    navigateToSection('main-section');
  } else {
    alert('Invalid email or password. Please try again.');
  }
});

// Populate vehicle list
document.getElementById('go-to-vehicle-details').addEventListener('click', () => {
  navigateToSection('vehicle-details-section');
  const vehicleList = document.getElementById('vehicle-list');
  vehicleList.innerHTML = '';
  vehicles.forEach((vehicle) => {
    const li = document.createElement('li');
    li.textContent = vehicle.id;
    li.addEventListener('click', () => showVehicleInfo(vehicle));
    vehicleList.appendChild(li);
  });
});

// Show vehicle info
function showVehicleInfo(vehicle) {
  document.getElementById('vehicle-info-id').textContent = vehicle.id;
  document.getElementById('vehicle-info-temperature').textContent = vehicle.temperature;
  document.getElementById('vehicle-info-tire-lifetime').textContent = vehicle.tireLifetime;
  document.getElementById('vehicle-info-km-run').textContent = vehicle.kmRun;

  // Display tire pressure with low-pressure indication
  const tirePressureContainer = document.getElementById('tire-pressure-container');
  tirePressureContainer.innerHTML = '<h3>Tire Pressures:</h3>';
  vehicle.tirePressure.forEach((pressure, index) => {
    const tireDiv = document.createElement('div');
    tireDiv.textContent = `Tire ${index + 1}: ${pressure} PSI`;
    if (pressure < 28) {
      tireDiv.classList.add('blink'); // Highlight low pressure
    }
    tirePressureContainer.appendChild(tireDiv);
  });

  navigateToSection('vehicle-info-section');
}

// Back to vehicle list
document.getElementById('back-to-vehicle-list').addEventListener('click', () => {
  navigateToSection('vehicle-details-section');
});

// Initially display the login section
navigateToSection('login-section');
