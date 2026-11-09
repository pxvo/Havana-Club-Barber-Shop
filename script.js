let selectedService = '';
let selectedPrice = '';
let currentCategory = 'all';

function filterServices() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {
    const name = card.getAttribute('data-name');
    const category = card.getAttribute('data-category');
    
    const matchesSearch = name.includes(searchInput);
    const matchesCategory = (currentCategory === 'all' || category === currentCategory);

    if (matchesSearch && matchesCategory) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterCategory(category, element) {
  currentCategory = category;
  
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
  
  filterServices();
}

function openModal(serviceName, servicePrice) {
  selectedService = serviceName;
  selectedPrice = servicePrice;
  
  document.getElementById('modalServiceName').innerText = serviceName;
  document.getElementById('modalServicePrice').innerText = servicePrice;
  document.getElementById('bookingModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

function sendWhatsApp(event) {
  event.preventDefault();
  
  const name = document.getElementById('clientName').value;
  const date = document.getElementById('bookingDate').value;
  const time = document.getElementById('bookingTime').value;
  
  const phone = '5595991112233';
  const message = `Olá! Gostaria de agendar um horário na Habana Club Barber Shop.

📌 *Serviço:* ${selectedService} (${selectedPrice})
👤 *Nome:* ${name}
📅 *Data:* ${date}
⏰ *Horário:* ${time}`;

  const encodedUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
  closeModal();
}

window.onclick = function(event) {
  const modal = document.getElementById('bookingModal');
  if (event.target === modal) {
    closeModal();
  }
};