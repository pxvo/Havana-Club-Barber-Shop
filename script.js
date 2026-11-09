const rawServices = [
  { name: "Barba", price: "R$ 60,00", time: "30 min", cat: "cabelo-barba" },
  { name: "Barboterapia", price: "R$ 120,00", time: "60 min", cat: "cabelo-barba" },
  { name: "Botox (realinhamento)", price: "R$ 150,00", time: "60 min", cat: "cabelo-barba" },
  { name: "Cabelo + barba + depilação de nariz e orelha + Skin care", price: "R$ 220,00", time: "75 min", cat: "combos" },
  { name: "Cabelo e Barba com pigmentação", price: "R$ 170,00", time: "60 min", cat: "combos" },
  { name: "Combo prince's day", price: "R$ 250,00", time: "90 min", cat: "combos" },
  { name: "Consulta Visagista", price: "R$ 650,00", time: "90 min", cat: "combos" },
  { name: "Corte com pigmentação", price: "R$ 85,00", time: "45 min", cat: "cabelo-barba" },
  { name: "Corte de barba com pigmentação", price: "R$ 85,00", time: "45 min", cat: "cabelo-barba" },
  { name: "Corte degradê", price: "R$ 60,00", time: "30 min", cat: "cabelo-barba" },
  { name: "Corte degrade c/ realinhamento", price: "A partir de R$ 210,00", time: "90 min", cat: "cabelo-barba" },
  { name: "Corte degradê e design de barba", price: "R$ 120,00", time: "60 min", cat: "combos" },
  { name: "Corte degradê, design de barba e sobrancelha", price: "R$ 145,00", time: "60 min", cat: "combos" },
  { name: "Corte e design de sobrancelha", price: "R$ 85,00", time: "45 min", cat: "combos" },
  { name: "Corte estilo Americano", price: "R$ 60,00", time: "30 min", cat: "cabelo-barba" },
  { name: "Corte Infantil", price: "R$ 60,00", time: "30 min", cat: "cabelo-barba" },
  { name: "Corte Mullet", price: "R$ 60,00", time: "30 min", cat: "cabelo-barba" },
  { name: "Corte old money", price: "R$ 80,00", time: "30 min", cat: "cabelo-barba" },
  { name: "Corte social", price: "R$ 60,00", time: "30 min", cat: "cabelo-barba" },
  { name: "Corte social e design de barba", price: "R$ 120,00", time: "45 min", cat: "combos" },
  { name: "Corte Social ou Degradê para usuário de prótese capilar", price: "R$ 80,00", time: "45 min", cat: "protese" },
  { name: "Corte social, design de barba e sobrancelha", price: "R$ 145,00", time: "45 min", cat: "combos" },
  { name: "CUPOM", price: "R$ 0,00", time: "30 min", cat: "outros" },
  { name: "Debaste Plantar ( Calosidade )", price: "R$ 100,00", time: "60 min", cat: "estetica" },
  { name: "Depilação de nariz", price: "Consultar", time: "15 min", cat: "estetica" },
  { name: "Depilação de orelha", price: "Consultar", time: "15 min", cat: "estetica" },
  { name: "Design de sobrancelha", price: "Consultar", time: "15 min", cat: "estetica" },
  { name: "Diversos", price: "R$ 50,00", time: "15 min", cat: "outros" },
  { name: "Drenagem L corporal", price: "R$ 180,00", time: "45 min", cat: "estetica" },
  { name: "Drenagem L facial", price: "R$ 140,00", time: "45 min", cat: "estetica" },
  { name: "Esmaltação em gel", price: "R$ 100,00", time: "60 min", cat: "estetica" },
  { name: "Espiculectomia ( tratamento de unha encravada )", price: "A partir de R$ 100,00", time: "45 min", cat: "estetica" },
  { name: "Hidratação", price: "R$ 100,00", time: "30 min", cat: "cabelo-barba" },
  { name: "Limpeza de pele", price: "R$ 150,00", time: "60 min", cat: "estetica" },
  { name: "Luzes", price: "Consultar", time: "150 min", cat: "cabelo-barba" },
  { name: "Manicure", price: "R$ 50,00", time: "30 min", cat: "estetica" },
  { name: "Manicure e Pedicure", price: "R$ 100,00", time: "60 min", cat: "estetica" },
  { name: "Manutenção de Prótese Capilar", price: "R$ 140,00", time: "60 min", cat: "protese" },
  { name: "Manutenção de Prótese Capilar e corte de cabelo", price: "Consultar", time: "75 min", cat: "protese" },
  { name: "Manutenção de Prótese Capilar e pigmentação", price: "R$ 170,00", time: "75 min", cat: "protese" },
  { name: "Manutenção de Prótese Capilar, corte de cabelo e design de barba", price: "R$ 240,00", time: "90 min", cat: "protese" },
  { name: "Manutenção de Prótese Capilar, corte de cabelo e pigmentação", price: "Consultar", time: "90 min", cat: "protese" },
  { name: "Manutenção de Prótese Capilar, corte de cabelo, design de barba e pigmentação", price: "Consultar", time: "75 min", cat: "protese" },
  { name: "Manutenção de Prótese com Maydel Escalona", price: "Consultar", time: "90 min", cat: "protese" },
  { name: "Mini Protése Capilar", price: "Consultar", time: "60 min", cat: "protese" },
  { name: "Pedicure", price: "R$ 50,00", time: "30 min", cat: "estetica" },
  { name: "Platinado", price: "Consultar", time: "150 min", cat: "cabelo-barba" },
  { name: "Podologia", price: "A partir de R$ 100,00", time: "90 min", cat: "estetica" },
  { name: "Prótese Capilar", price: "R$ 650,00", time: "75 min", cat: "protese" },
  { name: "Realimento + corte degrade e barba", price: "R$ 270,00", time: "90 min", cat: "combos" },
  { name: "Realinhamento", price: "R$ 150,00", time: "45 min", cat: "cabelo-barba" },
  { name: "Realinhamento Liso americano", price: "Consultar", time: "45 min", cat: "cabelo-barba" },
  { name: "Reflexologia", price: "R$ 180,00", time: "45 min", cat: "estetica" },
  { name: "Skin care", price: "Consultar", time: "15 min", cat: "estetica" },
  { name: "Spa dos pés", price: "R$ 150,00", time: "30 min", cat: "estetica" },
  { name: "Undercut", price: "R$ 120,00", time: "45 min", cat: "cabelo-barba" },
  { name: "Ventosaterapia", price: "R$ 180,00", time: "45 min", cat: "estetica" },
  { name: "Visagismo", price: "R$ 650,00", time: "90 min", cat: "combos" }
];

const categories = [
  { id: "all", label: "Todos os Serviços" },
  { id: "cabelo-barba", label: "Cabelo & Barba" },
  { id: "combos", label: "Combos & Visagismo" },
  { id: "protese", label: "Prótese Capilar" },
  { id: "estetica", label: "Podologia & Estética" }
];

let activeCategory = "all";
let selectedServiceName = "";

document.getElementById("year").innerText = new Date().getFullYear();

function initCategoryTabs() {
  const container = document.getElementById("categoryTabs");
  container.innerHTML = categories.map(c => `
    <button 
      onclick="setCategory('${c.id}')"
      class="px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${activeCategory === c.id ? 'bg-brand-gold text-black border-brand-gold shadow-md' : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'}"
    >
      ${c.label}
    </button>
  `).join('');
}

function setCategory(catId) {
  activeCategory = catId;
  initCategoryTabs();
  renderServices();
}

function renderServices() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const grid = document.getElementById("servicesGrid");
  const emptyState = document.getElementById("emptyState");

  const filtered = rawServices.filter(s => {
    const matchesCat = activeCategory === "all" || s.cat === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(search);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  grid.innerHTML = filtered.map(s => `
    <div class="bg-brand-cardBg border border-brand-cardBorder rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 gold-border-glow group">
      <div>
        <div class="flex justify-between items-start gap-2 mb-3">
          <h3 class="font-semibold text-white text-base group-hover:text-brand-gold transition-colors leading-snug">${s.name}</h3>
          <span class="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full whitespace-nowrap border border-zinc-700 flex items-center gap-1">
            <i class="far fa-clock text-brand-gold"></i> ${s.time}
          </span>
        </div>
      </div>
      
      <div class="pt-4 border-t border-zinc-800/80 flex items-center justify-between mt-4">
        <div>
          <span class="text-xs text-zinc-500 block uppercase font-medium">Valor</span>
          <span class="text-lg font-bold ${s.price.includes('Consultar') ? 'text-zinc-400' : 'text-brand-gold'}">${s.price}</span>
        </div>
        
        <button onclick="openBookingModal('${s.name.replace(/'/g, "\\'")}')" class="bg-zinc-800 hover:bg-brand-gold hover:text-black text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 border border-zinc-700 hover:border-brand-gold">
          <span>Agendar</span>
          <i class="fas fa-chevron-right text-xs"></i>
        </button>
      </div>
    </div>
  `).join('');
}

document.getElementById("searchInput").addEventListener("input", renderServices);

function openBookingModal(serviceName) {
  selectedServiceName = serviceName;
  document.getElementById("modalServiceName").innerText = serviceName;
  document.getElementById("bookingModal").classList.remove("hidden");
}

function closeBookingModal() {
  document.getElementById("bookingModal").classList.add("hidden");
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("custName").value;
  const date = document.getElementById("custDate").value;
  const time = document.getElementById("custTime").value;
  const notes = document.getElementById("custNotes").value;

  const formattedDate = date.split('-').reverse().join('/');

  let message = `Olá, gostaria de agendar um horário na *Habana Club Barber Shop*!%0A%0A`;
  message += `*Serviço:* ${selectedServiceName}%0A`;
  message += `*Cliente:* ${name}%0A`;
  message += `*Data:* ${formattedDate}%0A`;
  message += `*Horário:* ${time}%0A`;
  if (notes) {
    message += `*Observações:* ${notes}%0A`;
  }

  window.open(`https://wa.me/?text=${message}`, '_blank');
  closeBookingModal();
}

initCategoryTabs();
renderServices();