// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to shuffle girls in rooms
function shuffleGirlsInRooms() {
  const roomContainers = document.querySelectorAll('.room');
  const allGirls = [];

  roomContainers.forEach(roomContainer => {
    const studentElements = roomContainer.querySelectorAll('.student');
    const girlStudents = Array.from(studentElements).filter(student => {
      const name = student.textContent.trim();
      return name.toLowerCase().includes('khushi kacchawah') || name.toLowerCase().includes('Bhavna kothe') || name.toLowerCase().includes('Mohini Ramteke') || name.toLowerCase().includes('pranita Dhakate') || name.toLowerCase().includes('Mayuri Kadau') || name.toLowerCase().includes('suchita Bondre') || name.toLowerCase().includes('vaishnavi kale') || name.toLowerCase().includes('vaishvavi Hemane') || name.toLowerCase().includes('vaishavi chawahan') || name.toLowerCase().includes('Neha saraf') || name.toLowerCase().includes('Lakmi shende') || name.toLowerCase().includes('Kanchan shende') || name.toLowerCase().includes('Kanchan Mahore') || name.toLowerCase().includes('Prinynka Dhomne') || name.toLowerCase().includes('Lina Barve') || name.toLowerCase().includes('Aditi Dahake') || name.toLowerCase().includes('Aakansha Mothghare') || name.toLowerCase().includes('Aswarya Vibhute') || name.toLowerCase().includes('Bhavna kawal') || name.toLowerCase().includes('chamika kuthemate') || name.toLowerCase().includes('Nikita Masurkar') || name.toLowerCase().includes('Dhanshree Bilbile') || name.toLowerCase().includes('Amruta Aswar') || name.toLowerCase().includes('Dhanshree Kakde') || name.toLowerCase().includes('Dipa Rahurale') || name.toLowerCase().includes('Dipti Temburne') || name.toLowerCase().includes('prachi agdate') || name.toLowerCase().includes('sakshi agadte') || name.toLowerCase().includes('Ekta Adau') || name.toLowerCase().includes('Pragti DK') ;
    });

    girlStudents.forEach(student => {
      allGirls.push(student);
      student.remove();
    });
  });

  shuffleArray(allGirls);

  roomContainers.forEach(roomContainer => {
    while (roomContainer.children.length < 4 && allGirls.length > 0) {
      roomContainer.appendChild(allGirls.pop());
    }
  });
}

// Add a click event listener to the shuffle button
const shuffleButton = document.querySelector('.shuffle-button');
shuffleButton.addEventListener('click', shuffleGirlsInRooms);