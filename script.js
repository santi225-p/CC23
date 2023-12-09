// Function to fetch plant data from an API
async function fetchPlantData() {
  try {
    const response = await fetch('https://api.example.com/plants');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data; // Return plant data
  } catch (error) {
    console.error('Error fetching plant data:', error);
    return null;
  }
}

// Function to display plant data
function displayPlantList(plantData) {
  const plantListSection = document.querySelector('.plant-list');
  if (!plantListSection) {
    console.error('Plant list section not found.');
    return;
  }

  if (!plantData || plantData.length === 0) {
    plantListSection.innerHTML = '<p>No plants found.</p>';
    return;
  }

  const plantCards = plantData.map(plant => {
    return `
      <div class="plant-card">
        <h2>${plant.name}</h2>
        <p>Type: ${plant.type}</p>
        <!-- Other plant details can go here -->
      </div>
    `;
  }).join('');

  plantListSection.innerHTML = plantCards;
}
const plants = [
  { name: 'Rose', type: 'Flower' },
  { name: 'Lavender', type: 'Herb' },
  { name: 'Snake Plant', type: 'Indoor' },
  // Add more plant objects as needed
];
  const plantCards = plants.map(plant => {
    return `
      <div class="plant-card">
        <h2>${plant.name}</h2>
        <p>Type: ${plant.type}</p>
        <!-- Other plant details can go here -->
      </div>
    `;
  }).join('');

  plantListSection.innerHTML = plantCards;
}

// Call the function with the plants array to display the plant list
displayPlantList(plants);
