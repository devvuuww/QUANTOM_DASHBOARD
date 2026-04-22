/* =============================================
   QUANTOM - Fast Food Management Dashboard
   JavaScript Application Logic
   ============================================= */

// ============================================
// MOCK DATABASE
// ============================================
const DB = {
  stores: [
    { storeNumber: 'S001', storeAddress: 'Jl. Sudirman No. 123, Jakarta' },
    { storeNumber: 'S002', storeAddress: 'Jl. Thamrin No. 45, Jakarta' },
    { storeNumber: 'S003', storeAddress: 'Jl. Gatot Subroto No. 78, Jakarta' }
  ],
  suppliers: [
    { supplierID: 'SUP001', supplierName: 'PT Sumber Jaya', contactPerson: 'Budi Santoso', supplierAddress: 'Jl. Industri No. 10, Jakarta', created_at: '2024-01-15', created_by: 'admin' },
    { supplierID: 'SUP002', supplierName: 'CV Fresh Food', contactPerson: 'Siti Aminah', supplierAddress: 'Jl. Raya Bogor Km. 20, Depok', created_at: '2024-02-20', created_by: 'admin' },
    { supplierID: 'SUP003', supplierName: 'PT Dairy Best', contactPerson: 'Ahmad Wijaya', supplierAddress: 'Jl. Pahlawan No. 55, Bekasi', created_at: '2024-03-05', created_by: 'admin' },
    { supplierID: 'SUP004', supplierName: 'Global Beverages', contactPerson: 'Rina Susanti', supplierAddress: 'Jl. Mawar No. 88, Tangerang', created_at: '2024-04-10', created_by: 'admin' },
    { supplierID: 'SUP005', supplierName: 'Bakery Indo', contactPerson: 'Dedi Kurniawan', supplierAddress: 'Jl. Melati No. 25, Jakarta', created_at: '2024-05-18', created_by: 'admin' }
  ],
  inventory: [
    { ingredientID: 'ING001', ingredientName: 'Chicken Breast', categoryIngredient: 'Meat', currentStock: 45, reorderLevel: 50, reorderAmount: 100, wastedAmount: 5, ingredientCost: 35000, supplierID: 'SUP001', lastUpdateRestock: '2026-04-18', created_at: '2024-01-15' },
    { ingredientID: 'ING002', ingredientName: 'Beef Patty', categoryIngredient: 'Meat', currentStock: 120, reorderLevel: 40, reorderAmount: 80, wastedAmount: 3, ingredientCost: 42000, supplierID: 'SUP001', lastUpdateRestock: '2026-04-19', created_at: '2024-01-15' },
    { ingredientID: 'ING003', ingredientName: 'Lettuce', categoryIngredient: 'Vegetable', currentStock: 30, reorderLevel: 30, reorderAmount: 50, wastedAmount: 8, ingredientCost: 8000, supplierID: 'SUP002', lastUpdateRestock: '2026-04-17', created_at: '2024-02-20' },
    { ingredientID: 'ING004', ingredientName: 'Tomato', categoryIngredient: 'Vegetable', currentStock: 75, reorderLevel: 40, reorderAmount: 60, wastedAmount: 12, ingredientCost: 12000, supplierID: 'SUP002', lastUpdateRestock: '2026-04-19', created_at: '2024-02-20' },
    { ingredientID: 'ING005', ingredientName: 'Cheddar Cheese', categoryIngredient: 'Dairy', currentStock: 55, reorderLevel: 25, reorderAmount: 40, wastedAmount: 2, ingredientCost: 28000, supplierID: 'SUP003', lastUpdateRestock: '2026-04-16', created_at: '2024-03-05' },
    { ingredientID: 'ING006', ingredientName: 'Burger Bun', categoryIngredient: 'Bakery', currentStock: 200, reorderLevel: 100, reorderAmount: 150, wastedAmount: 10, ingredientCost: 5000, supplierID: 'SUP005', lastUpdateRestock: '2026-04-20', created_at: '2024-05-18' },
    { ingredientID: 'ING007', ingredientName: 'Coca Cola Syrup', categoryIngredient: 'Beverage', currentStock: 25, reorderLevel: 20, reorderAmount: 30, wastedAmount: 0, ingredientCost: 65000, supplierID: 'SUP004', lastUpdateRestock: '2026-04-15', created_at: '2024-04-10' },
    { ingredientID: 'ING008', ingredientName: 'Mayonnaise', categoryIngredient: 'Sauce', currentStock: 80, reorderLevel: 20, reorderAmount: 25, wastedAmount: 4, ingredientCost: 18000, supplierID: 'SUP002', lastUpdateRestock: '2026-04-18', created_at: '2024-02-20' },
    { ingredientID: 'ING009', ingredientName: 'Ketchup', categoryIngredient: 'Sauce', currentStock: 90, reorderLevel: 20, reorderAmount: 25, wastedAmount: 3, ingredientCost: 15000, supplierID: 'SUP002', lastUpdateRestock: '2026-04-18', created_at: '2024-02-20' },
    { ingredientID: 'ING010', ingredientName: 'French Fries', categoryIngredient: 'Vegetable', currentStock: 58, reorderLevel: 50, reorderAmount: 80, wastedAmount: 6, ingredientCost: 22000, supplierID: 'SUP002', lastUpdateRestock: '2026-04-19', created_at: '2024-02-20' },
    { ingredientID: 'ING011', ingredientName: 'Milkshake Mix', categoryIngredient: 'Dairy', currentStock: 40, reorderLevel: 15, reorderAmount: 20, wastedAmount: 1, ingredientCost: 32000, supplierID: 'SUP003', lastUpdateRestock: '2026-04-14', created_at: '2024-03-05' },
    { ingredientID: 'ING012', ingredientName: 'Ice Cream', categoryIngredient: 'Dairy', currentStock: 85, reorderLevel: 30, reorderAmount: 40, wastedAmount: 7, ingredientCost: 25000, supplierID: 'SUP003', lastUpdateRestock: '2026-04-17', created_at: '2024-03-05' }
  ],
  customers: [
    { customerID: 'CUST001', customerName: 'Andi Wijaya', phoneNumber: '081234567890', email: 'andi@email.com', created_at: '2024-06-01' },
    { customerID: 'CUST002', customerName: 'Dewi Kusuma', phoneNumber: '081298765432', email: 'dewi@email.com', created_at: '2024-06-15' },
    { customerID: 'CUST003', customerName: 'Rudi Hartono', phoneNumber: '081356789012', email: 'rudi@email.com', created_at: '2024-07-02' },
    { customerID: 'CUST004', customerName: 'Sari Indah', phoneNumber: '081467890123', email: 'sari@email.com', created_at: '2024-07-20' },
    { customerID: 'CUST005', customerName: 'Bambang S', phoneNumber: '081578901234', email: 'bambang@email.com', created_at: '2024-08-05' },
    { customerID: 'CUST006', customerName: 'Maya Anggraini', phoneNumber: '081689012345', email: 'maya@email.com', created_at: '2024-08-18' },
    { customerID: 'CUST007', customerName: 'Fajar Nugroho', phoneNumber: '081790123456', email: 'fajar@email.com', created_at: '2024-09-01' },
    { customerID: 'CUST008', customerName: 'Lestari Putri', phoneNumber: '081801234567', email: 'lestari@email.com', created_at: '2024-09-15' },
    { customerID: 'CUST009', customerName: 'Agus Salim', phoneNumber: '081912345678', email: 'agus@email.com', created_at: '2024-10-01' },
    { customerID: 'CUST010', customerName: 'Rina Marlina', phoneNumber: '082023456789', email: 'rina@email.com', created_at: '2024-10-20' },
    { customerID: 'CUST011', customerName: 'Hendra Gunawan', phoneNumber: '082134567890', email: 'hendra@email.com', created_at: '2024-11-05' },
    { customerID: 'CUST012', customerName: 'Diana Sari', phoneNumber: '082245678901', email: 'diana@email.com', created_at: '2024-11-18' }
  ],
  crews: [
    { crewID: 'CREW001', crewName: 'Ahmad Rizky', position: 'Manager', phoneNumber: '081312345678', storeNumber: 'S001', schedule: 'Full Day (08:00 - 20:00)', created_at: '2024-01-10' },
    { crewID: 'CREW002', crewName: 'Nina Febriana', position: 'Cashier', phoneNumber: '081323456789', storeNumber: 'S001', schedule: 'Morning (06:00 - 14:00)', created_at: '2024-02-15' },
    { crewID: 'CREW003', crewName: 'Bayu Aji', position: 'Cook', phoneNumber: '081334567890', storeNumber: 'S001', schedule: 'Afternoon (14:00 - 22:00)', created_at: '2024-03-01' },
    { crewID: 'CREW004', crewName: 'Citra Lestari', position: 'Server', phoneNumber: '081345678901', storeNumber: 'S002', schedule: 'Morning (06:00 - 14:00)', created_at: '2024-04-10' },
    { crewID: 'CREW005', crewName: 'Doni Kusuma', position: 'Cook', phoneNumber: '081356789012', storeNumber: 'S002', schedule: 'Night (22:00 - 06:00)', created_at: '2024-05-20' },
    { crewID: 'CREW006', crewName: 'Eka Purnama', position: 'Cashier', phoneNumber: '081367890123', storeNumber: 'S002', schedule: 'Afternoon (14:00 - 22:00)', created_at: '2024-06-01' },
    { crewID: 'CREW007', crewName: 'Feri Setiawan', position: 'Delivery', phoneNumber: '081378901234', storeNumber: 'S003', schedule: 'Full Day (08:00 - 20:00)', created_at: '2024-07-15' },
    { crewID: 'CREW008', crewName: 'Gita Maharani', position: 'Server', phoneNumber: '081389012345', storeNumber: 'S003', schedule: 'Weekend Only', created_at: '2024-08-01' },
    { crewID: 'CREW009', crewName: 'Hadi Sucipto', position: 'Cook', phoneNumber: '081390123456', storeNumber: 'S003', schedule: 'Flexible', created_at: '2024-09-10' },
    { crewID: 'CREW010', crewName: 'Ika Wulandari', position: 'Cleaner', phoneNumber: '081401234567', storeNumber: 'S001', schedule: 'Night (22:00 - 06:00)', created_at: '2024-10-01' }
  ],
  menu: [
    { menuID: 'MENU001', comboItem: 'Quantum Burger', itemDescription: 'Beef patty with cheese, lettuce, tomato, special sauce', itemPrice: 45000, created_at: '2024-01-01' },
    { menuID: 'MENU002', comboItem: 'Double Quantum', itemDescription: 'Double beef patty with double cheese, premium toppings', itemPrice: 65000, created_at: '2024-01-01' },
    { menuID: 'MENU003', comboItem: 'Chicken Delight', itemDescription: 'Crispy chicken breast with mayo, lettuce, toasted bun', itemPrice: 40000, created_at: '2024-01-15' },
    { menuID: 'MENU004', comboItem: 'Quantum Fries', itemDescription: 'Large golden french fries with special seasoning', itemPrice: 22000, created_at: '2024-02-01' },
    { menuID: 'MENU005', comboItem: 'Quantum Meal Deal', itemDescription: 'Burger, fries, and drink combo at special price', itemPrice: 72000, created_at: '2024-02-15' },
    { menuID: 'MENU006', comboItem: 'Milkshake Classic', itemDescription: 'Creamy vanilla milkshake with whipped cream', itemPrice: 28000, created_at: '2024-03-01' },
    { menuID: 'MENU007', comboItem: 'Quantum Float', itemDescription: 'Cola float with vanilla ice cream', itemPrice: 25000, created_at: '2024-03-15' },
    { menuID: 'MENU008', comboItem: 'Kids Meal', itemDescription: 'Mini burger, small fries, juice, and toy', itemPrice: 38000, created_at: '2024-04-01' },
    { menuID: 'MENU009', comboItem: 'Quantum Chicken Bucket', itemDescription: '8 pieces crispy chicken with 2 large sides', itemPrice: 120000, created_at: '2024-05-01' },
    { menuID: 'MENU010', comboItem: 'Ice Cream Sundae', itemDescription: 'Chocolate sundae with nuts and cherry', itemPrice: 20000, created_at: '2024-06-01' }
  ],
  promotions: [
    { promoCode: 'WELCOME25', discountAmount: 25000, startDate: '2026-01-01', endDate: '2026-12-31', isActive: 1, created_at: '2026-01-01' },
    { promoCode: 'WEEKEND15', discountAmount: 15000, startDate: '2026-01-01', endDate: '2026-12-31', isActive: 1, created_at: '2026-01-01' },
    { promoCode: 'BURGER10', discountAmount: 10000, startDate: '2026-02-01', endDate: '2026-04-30', isActive: 1, created_at: '2026-02-01' },
    { promoCode: 'FAMILY50', discountAmount: 50000, startDate: '2026-03-01', endDate: '2026-05-31', isActive: 1, created_at: '2026-03-01' },
    { promoCode: 'HOLIDAY30', discountAmount: 30000, startDate: '2026-04-01', endDate: '2026-04-30', isActive: 1, created_at: '2026-04-01' }
  ],
  orders: [],
  orderItems: [],
  supplierPurchases: [],
  supplierPurchaseItems: []
};

// Generate mock orders
function generateOrders() {
  const statuses = ['Pending', 'Preparing', 'Completed', 'Cancelled'];
  const statusWeights = [0.15, 0.20, 0.60, 0.05];
  const customers = DB.customers;
  const menuItems = DB.menu;
  const promos = [...DB.promotions, null];

  let orderNum = 1;
  for (let d = 30; d >= 0; d--) {
    const date = new Date();
    date.setDate(date.getDate() - d);
    const dateStr = date.toISOString().split('T')[0];
    const dayOrders = Math.floor(Math.random() * 15) + 8;

    for (let i = 0; i < dayOrders; i++) {
      const orderNumber = `ORD${String(orderNum).padStart(5, '0')}`;
      const customer = customers[Math.floor(Math.random() * customers.length)];
      const promo = Math.random() > 0.7 ? promos[Math.floor(Math.random() * (promos.length - 1))] : null;

      let status;
      const r = Math.random();
      let cum = 0;
      for (let j = 0; j < statusWeights.length; j++) {
        cum += statusWeights[j];
        if (r < cum) { status = statuses[j]; break; }
      }

      if (d === 0 && status === 'Completed' && Math.random() > 0.5) status = 'Preparing';
      if (d === 0 && Math.random() > 0.7) status = 'Pending';

      const numItems = Math.floor(Math.random() * 3) + 1;
      let total = 0;
      const items = [];

      for (let k = 0; k < numItems; k++) {
        const menu = menuItems[Math.floor(Math.random() * menuItems.length)];
        const qty = Math.floor(Math.random() * 3) + 1;
        items.push({ menuID: menu.menuID, quantity: qty, price: menu.itemPrice });
        total += menu.itemPrice * qty;
      }

      if (promo) total = Math.max(0, total - promo.discountAmount);

      DB.orders.push({
        orderNumber,
        storeNumber: 'S00' + (Math.floor(Math.random() * 3) + 1),
        customerID: customer.customerID,
        promoCode: promo ? promo.promoCode : null,
        statusID: status,
        orderDate: dateStr,
        total,
        created_at: dateStr
      });

      items.forEach(item => {
        DB.orderItems.push({
          orderItemID: DB.orderItems.length + 1,
          orderNumber,
          menuID: item.menuID,
          quantityItem: item.quantity,
          created_at: dateStr
        });
      });

      orderNum++;
    }
  }
}

// Generate mock supplier purchases
function generatePurchases() {
  let purchaseNum = 1;
  for (let d = 60; d >= 0; d -= Math.floor(Math.random() * 5) + 3) {
    const date = new Date();
    date.setDate(date.getDate() - d);
    if (date > new Date()) continue;
    const dateStr = date.toISOString().split('T')[0];

    const supplier = DB.suppliers[Math.floor(Math.random() * DB.suppliers.length)];
    const purchaseID = `PUR${String(purchaseNum).padStart(5, '0')}`;
    const numItems = Math.floor(Math.random() * 3) + 1;
    let total = 0;

    const availableIngredients = DB.inventory.filter(i => i.supplierID === supplier.supplierID);
    if (availableIngredients.length === 0) continue;

    for (let i = 0; i < numItems; i++) {
      const ing = availableIngredients[Math.floor(Math.random() * availableIngredients.length)];
      const qty = Math.floor(Math.random() * 50) + 20;
      const cost = ing.ingredientCost * qty;
      total += cost;

      DB.supplierPurchaseItems.push({
        purchaseItemID: DB.supplierPurchaseItems.length + 1,
        purchaseID,
        ingredientID: ing.ingredientID,
        purchaseQuantity: qty,
        itemCost: cost,
        created_at: dateStr
      });
    }

    DB.supplierPurchases.push({
      purchaseID,
      supplierID: supplier.supplierID,
      purchaseDate: dateStr,
      totalCost: total,
      created_at: dateStr,
      created_by: 'admin'
    });

    purchaseNum++;
  }
}

// Initialize
function initDatabase() {
  generateOrders();
  generatePurchases();
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatRupiah(amount) {
  return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getStatusBadge(status) {
  const map = {
    'Pending': 'status-pending',
    'Preparing': 'status-preparing',
    'Completed': 'status-completed',
    'Cancelled': 'status-cancelled'
  };
  return `<span class="badge ${map[status] || 'status-pending'}">${status}</span>`;
}

function getInventoryStatus(stock, minLevel) {
  const alertLevel = minLevel + 10;
  if (stock <= minLevel) return '<span class="badge status-low">Critical</span>';
  if (stock <= alertLevel) return '<span class="badge status-warning">Low Stock</span>';
  return '<span class="badge status-ok">OK</span>';
}

// ============================================
// SIDEBAR & NAVIGATION
// ============================================
let currentPage = 'dashboard';

function initNavigation() {
  document.querySelectorAll('.sidebar-menu .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      navigateTo(page);
    });
  });

  document.querySelectorAll('.view-all').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });

  document.getElementById('sidebarCollapse').addEventListener('click', toggleSidebar);
  document.getElementById('sidebarToggle').addEventListener('click', toggleSidebarMobile);
}

function navigateTo(page) {
  currentPage = page;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');

  document.querySelectorAll('.sidebar-menu .nav-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.sidebar-menu .nav-link[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add('active');

  const titles = {
    dashboard: 'Dashboard',
    orders: 'Orders',
    crews: 'Crew Members',
    customers: 'Customers',
    inventory: 'Inventory',
    suppliers: 'Suppliers',
    purchases: 'Supplier Purchases',
    menu: 'Menu',
    promotions: 'Promotions'
  };
  document.getElementById('pageTitle').textContent = titles[page] || page;

  if (window.innerWidth < 992) {
    document.getElementById('sidebar').classList.remove('show');
  }

  // Refresh page data
  if (page === 'dashboard') renderDashboard();
  if (page === 'orders') renderOrders();
  if (page === 'crews') renderCrews();
  if (page === 'customers') renderCustomers();
  if (page === 'inventory') renderInventory();
  if (page === 'suppliers') renderSuppliers();
  if (page === 'purchases') renderPurchases();
  if (page === 'menu') renderMenu();
  if (page === 'promotions') renderPromotions();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
  const content = document.getElementById('content');
  if (document.getElementById('sidebar').classList.contains('collapsed')) {
    content.style.marginLeft = 'var(--sidebar-collapsed)';
  } else {
    content.style.marginLeft = 'var(--sidebar-width)';
  }
}

function toggleSidebarMobile() {
  document.getElementById('sidebar').classList.toggle('show');
}

// ============================================
// DASHBOARD
// ============================================
let revenueChart = null;
let orderStatusChart = null;

function renderDashboard() {
  // KPIs
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  const todayOrders = DB.orders.filter(o => o.orderDate === today && o.statusID !== 'Cancelled');
  const yestOrders = DB.orders.filter(o => o.orderDate === yesterday && o.statusID !== 'Cancelled');
  const todayRevenue = todayOrders.reduce((s, o) => s + o.total, 0);
  const yestRevenue = yestOrders.reduce((s, o) => s + o.total, 0);

  document.getElementById('todayOrders').textContent = todayOrders.length;
  document.getElementById('ordersChange').textContent = yestOrders.length ? Math.round((todayOrders.length - yestOrders.length) / yestOrders.length * 100) + '%' : '0%';
  document.getElementById('todayRevenue').textContent = formatRupiah(todayRevenue);
  document.getElementById('revenueChange').textContent = yestRevenue ? Math.round((todayRevenue - yestRevenue) / yestRevenue * 100) + '%' : '0%';
  document.getElementById('activeCustomers').textContent = DB.customers.length;
  document.getElementById('customersChange').textContent = '+12%';

  // Low stock
  const lowStock = DB.inventory.filter(i => i.currentStock <= i.reorderLevel + 10);
  document.getElementById('lowStockCount').textContent = lowStock.length;
  document.getElementById('inventoryBadge').textContent = lowStock.length;

  // Pending orders badge
  const pendingOrders = DB.orders.filter(o => o.statusID === 'Pending');
  document.getElementById('orderBadge').textContent = pendingOrders.length;

  // Revenue Chart
  renderRevenueChart();
  renderOrderStatusChart();
  renderTopItems();
  renderRecentOrders();
  renderInventoryAlerts();
  renderRecentPurchases();
}

function renderRevenueChart() {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  const days = parseInt(document.getElementById('revenuePeriod').value) || 7;

  const labels = [];
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dStr = d.toISOString().split('T')[0];
    labels.push(d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }));
    const dayRev = DB.orders.filter(o => o.orderDate === dStr && o.statusID === 'Completed').reduce((s, o) => s + o.total, 0);
    data.push(dayRev);
  }

  if (revenueChart) revenueChart.destroy();

  revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Revenue (Rp)',
        data,
        borderColor: '#D4732B',
        backgroundColor: 'rgba(212, 115, 43, 0.08)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#D4732B',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Poppins', size: 11 }, color: '#6B6B66' }
        },
        y: {
          grid: { color: '#E8E8E2' },
          ticks: {
            font: { family: 'Poppins', size: 11 },
            color: '#6B6B66',
            callback: v => 'Rp ' + (v / 1000).toFixed(0) + 'K'
          }
        }
      }
    }
  });
}

function renderOrderStatusChart() {
  const ctx = document.getElementById('orderStatusChart').getContext('2d');
  const counts = {
    Pending: DB.orders.filter(o => o.statusID === 'Pending').length,
    Preparing: DB.orders.filter(o => o.statusID === 'Preparing').length,
    Completed: DB.orders.filter(o => o.statusID === 'Completed').length,
    Cancelled: DB.orders.filter(o => o.statusID === 'Cancelled').length
  };

  if (orderStatusChart) orderStatusChart.destroy();

  orderStatusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Pending', 'Preparing', 'Completed', 'Cancelled'],
      datasets: [{
        data: [counts.Pending, counts.Preparing, counts.Completed, counts.Cancelled],
        backgroundColor: ['#E8914A', '#3498DB', '#4CAF50', '#E74C3C'],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: 'Poppins', size: 11 },
            padding: 16,
            usePointStyle: true,
            pointStyleWidth: 8
          }
        }
      }
    }
  });
}

function renderTopItems() {
  const itemSales = {};
  DB.orderItems.forEach(oi => {
    if (!itemSales[oi.menuID]) itemSales[oi.menuID] = { qty: 0, rev: 0 };
    const menu = DB.menu.find(m => m.menuID === oi.menuID);
    itemSales[oi.menuID].qty += oi.quantityItem;
    itemSales[oi.menuID].rev += menu.itemPrice * oi.quantityItem;
  });

  const sorted = Object.entries(itemSales)
    .map(([menuID, data]) => ({ menuID, ...data, menu: DB.menu.find(m => m.menuID === menuID) }))
    .sort((a, b) => b.qty - a.qty)
    .slice(0, 5);

  const tbody = document.querySelector('#topItemsTable tbody');
  tbody.innerHTML = sorted.map((item, i) => `
    <tr>
      <td><span class="badge" style="background:#D4732B">${i + 1}</span></td>
      <td><strong>${item.menu.comboItem}</strong></td>
      <td>${item.qty}</td>
      <td>${formatRupiah(item.rev)}</td>
    </tr>
  `).join('');
}

function renderRecentOrders() {
  const recent = [...DB.orders].reverse().slice(0, 6);
  const tbody = document.querySelector('#recentOrdersTable tbody');
  tbody.innerHTML = recent.map(o => {
    const cust = DB.customers.find(c => c.customerID === o.customerID);
    return `
      <tr>
        <td><strong>${o.orderNumber}</strong></td>
        <td>${cust ? cust.customerName : 'Unknown'}</td>
        <td>${formatRupiah(o.total)}</td>
        <td>${getStatusBadge(o.statusID)}</td>
      </tr>
    `;
  }).join('');
}

function renderInventoryAlerts() {
  const alerts = DB.inventory.filter(i => i.currentStock <= i.reorderLevel + 10);
  const tbody = document.querySelector('#inventoryAlertTable tbody');

  if (alerts.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted py-4">No alerts</td></tr>';
    return;
  }

  tbody.innerHTML = alerts.map(i => {
    const alertLevel = i.reorderLevel + 10;
    return `
      <tr>
        <td><strong>${i.ingredientName}</strong></td>
        <td>${i.currentStock}</td>
        <td>${i.reorderLevel}</td>
        <td>${alertLevel}</td>
        <td>${getInventoryStatus(i.currentStock, i.reorderLevel)}</td>
      </tr>
    `;
  }).join('');
}

function renderRecentPurchases() {
  const recent = [...DB.supplierPurchases].reverse().slice(0, 5);
  const tbody = document.querySelector('#recentPurchasesTable tbody');
  tbody.innerHTML = recent.map(p => {
    const sup = DB.suppliers.find(s => s.supplierID === p.supplierID);
    return `
      <tr>
        <td><strong>${p.purchaseID}</strong></td>
        <td>${sup ? sup.supplierName : 'Unknown'}</td>
        <td>${formatRupiah(p.totalCost)}</td>
        <td>${formatDate(p.purchaseDate)}</td>
      </tr>
    `;
  }).join('');
}

// ============================================
// ORDERS
// ============================================
let ordersPage = 1;
const ordersPerPage = 15;

function renderOrders() {
  const statusFilter = document.getElementById('orderStatusFilter').value;
  const search = document.getElementById('orderSearch').value.toLowerCase();

  let filtered = DB.orders;
  if (statusFilter) filtered = filtered.filter(o => o.statusID === statusFilter);
  if (search) filtered = filtered.filter(o =>
    o.orderNumber.toLowerCase().includes(search) ||
    DB.customers.find(c => c.customerID === o.customerID)?.customerName.toLowerCase().includes(search)
  );

  const totalPages = Math.ceil(filtered.length / ordersPerPage);
  const start = (ordersPage - 1) * ordersPerPage;
  const pageData = filtered.slice(start, start + ordersPerPage);

  const tbody = document.querySelector('#ordersTable tbody');
  tbody.innerHTML = pageData.map(o => {
    const cust = DB.customers.find(c => c.customerID === o.customerID);
    const items = DB.orderItems.filter(oi => oi.orderNumber === o.orderNumber);
    return `
      <tr>
        <td><strong>${o.orderNumber}</strong></td>
        <td>${cust ? cust.customerName : 'Unknown'}</td>
        <td>${items.length} item${items.length > 1 ? 's' : ''}</td>
        <td>${formatRupiah(o.total)}</td>
        <td>${formatDate(o.orderDate)}</td>
        <td>${getStatusBadge(o.statusID)}</td>
        <td>
          <button class="btn btn-icon btn-primary" onclick="editOrderStatus('${o.orderNumber}')" title="Edit Status">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-icon btn-info" onclick="viewOrderDetails('${o.orderNumber}')" title="View Details">
            <i class="fas fa-eye"></i>
          </button>
          <button class="btn btn-icon btn-danger" onclick="deleteOrder('${o.orderNumber}')" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  document.getElementById('ordersPaginationInfo').textContent = `Showing ${start + 1}-${Math.min(start + ordersPerPage, filtered.length)} of ${filtered.length}`;

  let paginationHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<button class="btn btn-sm ${i === ordersPage ? 'btn-primary' : 'btn-outline-primary'}" onclick="goToOrdersPage(${i})">${i}</button>`;
  }
  document.getElementById('ordersPagination').innerHTML = paginationHTML;
}

function goToOrdersPage(page) {
  ordersPage = page;
  renderOrders();
}

function editOrderStatus(orderNumber) {
  const order = DB.orders.find(o => o.orderNumber === orderNumber);
  if (!order) return;

  document.getElementById('editOrderNumber').value = orderNumber;
  document.getElementById('editOrderNumDisplay').value = orderNumber;
  document.getElementById('editCurrentStatus').value = order.statusID;
  document.getElementById('editNewStatus').value = order.statusID;

  new bootstrap.Modal(document.getElementById('orderStatusModal')).show();
}

function saveOrderStatus() {
  const orderNumber = document.getElementById('editOrderNumber').value;
  const newStatus = document.getElementById('editNewStatus').value;
  const order = DB.orders.find(o => o.orderNumber === orderNumber);
  if (order) {
    order.statusID = newStatus;
    order.updated_at = new Date().toISOString();
    showToast(`Order ${orderNumber} status updated to ${newStatus}`);
    bootstrap.Modal.getInstance(document.getElementById('orderStatusModal')).hide();
    renderOrders();
    renderDashboard();
  }
}

function viewOrderDetails(orderNumber) {
  const order = DB.orders.find(o => o.orderNumber === orderNumber);
  const cust = DB.customers.find(c => c.customerID === order.customerID);
  const items = DB.orderItems.filter(oi => oi.orderNumber === orderNumber);

  let html = `
    <div class="order-detail-row">
      <span class="order-detail-label">Order Number</span>
      <span class="order-detail-value">${order.orderNumber}</span>
    </div>
    <div class="order-detail-row">
      <span class="order-detail-label">Customer</span>
      <span class="order-detail-value">${cust ? cust.customerName : 'Unknown'}</span>
    </div>
    <div class="order-detail-row">
      <span class="order-detail-label">Date</span>
      <span class="order-detail-value">${formatDate(order.orderDate)}</span>
    </div>
    <div class="order-detail-row">
      <span class="order-detail-label">Status</span>
      <span class="order-detail-value">${getStatusBadge(order.statusID)}</span>
    </div>
    <div class="order-detail-row">
      <span class="order-detail-label">Store</span>
      <span class="order-detail-value">${order.storeNumber}</span>
    </div>
  `;

  if (order.promoCode) {
    html += `
      <div class="order-detail-row">
        <span class="order-detail-label">Promo</span>
        <span class="order-detail-value text-success">${order.promoCode}</span>
      </div>
    `;
  }

  html += `
    <div class="order-detail-row" style="border-top:2px solid var(--broken-white); margin-top:10px; padding-top:14px;">
      <span class="order-detail-label">Total</span>
      <span class="order-detail-value" style="color:var(--orange); font-size:16px;">${formatRupiah(order.total)}</span>
    </div>
    <div class="order-items-list">
      <h6>Order Items</h6>
  `;

  items.forEach(item => {
    const menu = DB.menu.find(m => m.menuID === item.menuID);
    html += `
      <div class="order-item-detail">
        <span>${menu ? menu.comboItem : item.menuID} x${item.quantityItem}</span>
        <strong>${formatRupiah((menu ? menu.itemPrice : 0) * item.quantityItem)}</strong>
      </div>
    `;
  });

  html += '</div>';

  document.getElementById('orderDetailsBody').innerHTML = html;
  new bootstrap.Modal(document.getElementById('orderDetailsModal')).show();
}

function deleteOrder(orderNumber) {
  if (!confirm('Delete this order?')) return;
  DB.orders = DB.orders.filter(o => o.orderNumber !== orderNumber);
  DB.orderItems = DB.orderItems.filter(oi => oi.orderNumber !== orderNumber);
  showToast('Order deleted');
  renderOrders();
}

function openAddOrderModal() {
  document.getElementById('orderModalTitle').textContent = 'Add Order';
  document.getElementById('orderForm').reset();
  document.getElementById('orderItemsContainer').innerHTML = '';
  addOrderItemRow();

  const custSelect = document.getElementById('orderCustomer');
  custSelect.innerHTML = '<option value="">Select Customer</option>' +
    DB.customers.map(c => `<option value="${c.customerID}">${c.customerName}</option>`).join('');

  const promoSelect = document.getElementById('orderPromo');
  promoSelect.innerHTML = '<option value="">No Promotion</option>' +
    DB.promotions.filter(p => p.isActive).map(p => `<option value="${p.promoCode}">${p.promoCode} (-${formatRupiah(p.discountAmount)})</option>`).join('');

  new bootstrap.Modal(document.getElementById('orderModal')).show();
}

function addOrderItemRow() {
  const row = document.createElement('div');
  row.className = 'order-item-row row align-items-end';
  row.innerHTML = `
    <div class="col-md-6 mb-2">
      <label class="form-label">Menu Item</label>
      <select class="form-select order-item-menu" required>
        <option value="">Select Item</option>
        ${DB.menu.map(m => `<option value="${m.menuID}">${m.comboItem} - ${formatRupiah(m.itemPrice)}</option>`).join('')}
      </select>
    </div>
    <div class="col-md-4 mb-2">
      <label class="form-label">Quantity</label>
      <input type="number" class="form-control order-item-qty" value="1" min="1" required>
    </div>
    <div class="col-md-2 mb-2">
      <button type="button" class="btn btn-danger btn-sm" onclick="removeOrderItemRow(this)">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;
  document.getElementById('orderItemsContainer').appendChild(row);
  updateDeleteButtons();
}

function removeOrderItemRow(btn) {
  btn.closest('.order-item-row').remove();
  updateDeleteButtons();
}

function updateDeleteButtons() {
  const rows = document.querySelectorAll('.order-item-row');
  rows.forEach((row, i) => {
    const btn = row.querySelector('.btn-danger');
    btn.disabled = rows.length === 1;
  });
}

function saveOrder() {
  const customerID = document.getElementById('orderCustomer').value;
  const storeNumber = document.getElementById('orderStore').value;
  const promoCode = document.getElementById('orderPromo').value || null;
  const status = document.getElementById('orderStatusInput').value;

  if (!customerID) { showToast('Please select a customer', 'error'); return; }

  const menus = document.querySelectorAll('.order-item-menu');
  const qtys = document.querySelectorAll('.order-item-qty');
  let total = 0;
  const items = [];

  for (let i = 0; i < menus.length; i++) {
    if (!menus[i].value) continue;
    const menu = DB.menu.find(m => m.menuID === menus[i].value);
    const qty = parseInt(qtys[i].value);
    items.push({ menuID: menus[i].value, quantity: qty, price: menu.itemPrice });
    total += menu.itemPrice * qty;
  }

  if (items.length === 0) { showToast('Please add at least one item', 'error'); return; }

  if (promoCode) {
    const promo = DB.promotions.find(p => p.promoCode === promoCode);
    if (promo) total = Math.max(0, total - promo.discountAmount);
  }

  const orderNumber = 'ORD' + String(DB.orders.length + 1).padStart(5, '0');
  const today = new Date().toISOString().split('T')[0];

  DB.orders.push({
    orderNumber,
    storeNumber,
    customerID,
    promoCode,
    statusID: status,
    orderDate: today,
    total,
    created_at: today
  });

  items.forEach(item => {
    DB.orderItems.push({
      orderItemID: DB.orderItems.length + 1,
      orderNumber,
      menuID: item.menuID,
      quantityItem: item.quantity,
      created_at: today
    });
  });

  showToast(`Order ${orderNumber} created successfully`);
  bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
  renderOrders();
}

// ============================================
// CREWS
// ============================================
function renderCrews() {
  const search = document.getElementById('crewSearch').value.toLowerCase();
  let filtered = DB.crews;
  if (search) filtered = filtered.filter(c =>
    c.crewName.toLowerCase().includes(search) ||
    c.position.toLowerCase().includes(search) ||
    c.crewID.toLowerCase().includes(search)
  );

  const tbody = document.querySelector('#crewsTable tbody');
  tbody.innerHTML = filtered.map(c => `
    <tr>
      <td><strong>${c.crewID}</strong></td>
      <td>${c.crewName}</td>
      <td><span class="badge" style="background:#D4A843; color:#fff">${c.position}</span></td>
      <td>${c.phoneNumber}</td>
      <td>${c.storeNumber}</td>
      <td>
        <select class="form-select form-select-sm crew-schedule-select" data-crew="${c.crewID}" style="min-width:160px" onchange="updateCrewSchedule('${c.crewID}', this.value)">
          <option value="">Select Schedule</option>
          <option value="Morning (06:00 - 14:00)" ${c.schedule === 'Morning (06:00 - 14:00)' ? 'selected' : ''}>Morning (06:00 - 14:00)</option>
          <option value="Afternoon (14:00 - 22:00)" ${c.schedule === 'Afternoon (14:00 - 22:00)' ? 'selected' : ''}>Afternoon (14:00 - 22:00)</option>
          <option value="Night (22:00 - 06:00)" ${c.schedule === 'Night (22:00 - 06:00)' ? 'selected' : ''}>Night (22:00 - 06:00)</option>
          <option value="Full Day (08:00 - 20:00)" ${c.schedule === 'Full Day (08:00 - 20:00)' ? 'selected' : ''}>Full Day (08:00 - 20:00)</option>
          <option value="Weekend Only" ${c.schedule === 'Weekend Only' ? 'selected' : ''}>Weekend Only</option>
          <option value="Flexible" ${c.schedule === 'Flexible' ? 'selected' : ''}>Flexible</option>
        </select>
      </td>
      <td>
        <button class="btn btn-icon btn-primary" onclick="editCrew('${c.crewID}')" title="Edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn btn-icon btn-danger" onclick="deleteCrew('${c.crewID}')" title="Delete">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function updateCrewSchedule(crewID, schedule) {
  const crew = DB.crews.find(c => c.crewID === crewID);
  if (crew && schedule) {
    crew.schedule = schedule;
    crew.updated_at = new Date().toISOString();
    showToast(`${crew.crewName}'s schedule updated to ${schedule}`);
  }
}

function openAddCrewModal() {
  document.getElementById('crewModalTitle').textContent = 'Add Crew Member';
  document.getElementById('crewForm').reset();
  document.getElementById('crewFormId').value = '';
  new bootstrap.Modal(document.getElementById('crewModal')).show();
}

function editCrew(crewID) {
  const crew = DB.crews.find(c => c.crewID === crewID);
  if (!crew) return;

  document.getElementById('crewModalTitle').textContent = 'Edit Crew Member';
  document.getElementById('crewFormId').value = crewID;
  document.getElementById('crewName').value = crew.crewName;
  document.getElementById('crewPosition').value = crew.position;
  document.getElementById('crewPhone').value = crew.phoneNumber;
  document.getElementById('crewStore').value = crew.storeNumber;
  document.getElementById('crewSchedule').value = crew.schedule || '';
  new bootstrap.Modal(document.getElementById('crewModal')).show();
}

function saveCrew() {
  const crewID = document.getElementById('crewFormId').value;
  const name = document.getElementById('crewName').value;
  const position = document.getElementById('crewPosition').value;
  const phone = document.getElementById('crewPhone').value;
  const store = document.getElementById('crewStore').value;
  const schedule = document.getElementById('crewSchedule').value;

  if (!name || !position || !phone || !store) {
    showToast('Please fill all required fields', 'error');
    return;
  }

  if (crewID) {
    const crew = DB.crews.find(c => c.crewID === crewID);
    crew.crewName = name;
    crew.position = position;
    crew.phoneNumber = phone;
    crew.storeNumber = store;
    crew.schedule = schedule;
    crew.updated_at = new Date().toISOString();
    showToast('Crew member updated');
  } else {
    const newID = 'CREW' + String(DB.crews.length + 1).padStart(3, '0');
    DB.crews.push({
      crewID: newID,
      crewName: name,
      position,
      phoneNumber: phone,
      storeNumber: store,
      schedule,
      created_at: new Date().toISOString().split('T')[0]
    });
    showToast('Crew member added');
  }

  bootstrap.Modal.getInstance(document.getElementById('crewModal')).hide();
  renderCrews();
}

function deleteCrew(crewID) {
  if (!confirm('Delete this crew member?')) return;
  DB.crews = DB.crews.filter(c => c.crewID !== crewID);
  showToast('Crew member deleted');
  renderCrews();
}

// ============================================
// CUSTOMERS
// ============================================
function renderCustomers() {
  const search = document.getElementById('customerSearch').value.toLowerCase();

  // Calculate order counts and totals per customer
  const custStats = {};
  DB.orders.forEach(o => {
    if (!custStats[o.customerID]) custStats[o.customerID] = { count: 0, total: 0 };
    custStats[o.customerID].count++;
    if (o.statusID === 'Completed') custStats[o.customerID].total += o.total;
  });

  let filtered = DB.customers;
  if (search) filtered = filtered.filter(c =>
    c.customerName.toLowerCase().includes(search) ||
    c.customerID.toLowerCase().includes(search) ||
    c.phoneNumber.includes(search)
  );

  const tbody = document.querySelector('#customersTable tbody');
  tbody.innerHTML = filtered.map(c => {
    const stats = custStats[c.customerID] || { count: 0, total: 0 };
    return `
      <tr>
        <td><strong>${c.customerID}</strong></td>
        <td>${c.customerName}</td>
        <td>${c.phoneNumber}</td>
        <td>${c.email || '-'}</td>
        <td>${stats.count}</td>
        <td>${formatRupiah(stats.total)}</td>
        <td>
          <button class="btn btn-icon btn-primary" onclick="editCustomer('${c.customerID}')" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-icon btn-danger" onclick="deleteCustomer('${c.customerID}')" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddCustomerModal() {
  document.getElementById('customerModalTitle').textContent = 'Add Customer';
  document.getElementById('customerForm').reset();
  document.getElementById('customerFormId').value = '';
  new bootstrap.Modal(document.getElementById('customerModal')).show();
}

function editCustomer(customerID) {
  const cust = DB.customers.find(c => c.customerID === customerID);
  if (!cust) return;

  document.getElementById('customerModalTitle').textContent = 'Edit Customer';
  document.getElementById('customerFormId').value = customerID;
  document.getElementById('customerName').value = cust.customerName;
  document.getElementById('customerPhone').value = cust.phoneNumber;
  document.getElementById('customerEmail').value = cust.email || '';
  new bootstrap.Modal(document.getElementById('customerModal')).show();
}

function saveCustomer() {
  const customerID = document.getElementById('customerFormId').value;
  const name = document.getElementById('customerName').value;
  const phone = document.getElementById('customerPhone').value;
  const email = document.getElementById('customerEmail').value;

  if (!name || !phone) { showToast('Please fill required fields', 'error'); return; }

  if (customerID) {
    const cust = DB.customers.find(c => c.customerID === customerID);
    cust.customerName = name;
    cust.phoneNumber = phone;
    cust.email = email;
    showToast('Customer updated');
  } else {
    const newID = 'CUST' + String(DB.customers.length + 1).padStart(3, '0');
    DB.customers.push({
      customerID: newID,
      customerName: name,
      phoneNumber: phone,
      email,
      created_at: new Date().toISOString().split('T')[0]
    });
    showToast('Customer added');
  }

  bootstrap.Modal.getInstance(document.getElementById('customerModal')).hide();
  renderCustomers();
}

function deleteCustomer(customerID) {
  if (!confirm('Delete this customer?')) return;
  DB.customers = DB.customers.filter(c => c.customerID !== customerID);
  showToast('Customer deleted');
  renderCustomers();
}

// ============================================
// INVENTORY
// ============================================
function renderInventory() {
  const search = document.getElementById('inventorySearch').value.toLowerCase();
  const category = document.getElementById('inventoryCategoryFilter').value;

  let filtered = DB.inventory;
  if (category) filtered = filtered.filter(i => i.categoryIngredient === category);
  if (search) filtered = filtered.filter(i =>
    i.ingredientName.toLowerCase().includes(search) ||
    i.ingredientID.toLowerCase().includes(search)
  );

  // KPIs
  document.getElementById('totalIngredients').textContent = DB.inventory.length;
  const lowStock = DB.inventory.filter(i => i.currentStock <= i.reorderLevel + 10);
  document.getElementById('lowStockIngredients').textContent = lowStock.length;
  document.getElementById('wastedItemsCount').textContent = DB.inventory.reduce((s, i) => s + i.wastedAmount, 0);

  const tbody = document.querySelector('#inventoryTable tbody');
  tbody.innerHTML = filtered.map(i => {
    const supplier = DB.suppliers.find(s => s.supplierID === i.supplierID);
    const alertLevel = i.reorderLevel + 10;
    return `
      <tr>
        <td><strong>${i.ingredientID}</strong></td>
        <td>${i.ingredientName}</td>
        <td><span class="badge" style="background:#E8E8E2; color:#2C2C28">${i.categoryIngredient}</span></td>
        <td><strong>${i.currentStock}</strong></td>
        <td>${i.reorderLevel}</td>
        <td>${alertLevel}</td>
        <td>${formatRupiah(i.ingredientCost)}</td>
        <td>${supplier ? supplier.supplierName : '-'}</td>
        <td>
          <button class="btn btn-icon btn-primary" onclick="editInventory('${i.ingredientID}')" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-icon btn-danger" onclick="deleteInventory('${i.ingredientID}')" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddInventoryModal() {
  document.getElementById('inventoryModalTitle').textContent = 'Add Inventory Item';
  document.getElementById('inventoryForm').reset();
  document.getElementById('inventoryFormId').value = '';

  const supSelect = document.getElementById('invSupplier');
  supSelect.innerHTML = '<option value="">Select Supplier</option>' +
    DB.suppliers.map(s => `<option value="${s.supplierID}">${s.supplierName}</option>`).join('');

  new bootstrap.Modal(document.getElementById('inventoryModal')).show();
}

function editInventory(ingredientID) {
  const item = DB.inventory.find(i => i.ingredientID === ingredientID);
  if (!item) return;

  document.getElementById('inventoryModalTitle').textContent = 'Edit Inventory Item';
  document.getElementById('inventoryFormId').value = ingredientID;
  document.getElementById('invName').value = item.ingredientName;
  document.getElementById('invCategory').value = item.categoryIngredient;
  document.getElementById('invStock').value = item.currentStock;
  document.getElementById('invMinLevel').value = item.reorderLevel;
  document.getElementById('invCost').value = item.ingredientCost;

  const supSelect = document.getElementById('invSupplier');
  supSelect.innerHTML = '<option value="">Select Supplier</option>' +
    DB.suppliers.map(s => `<option value="${s.supplierID}" ${s.supplierID === item.supplierID ? 'selected' : ''}>${s.supplierName}</option>`).join('');

  new bootstrap.Modal(document.getElementById('inventoryModal')).show();
}

function saveInventory() {
  const ingredientID = document.getElementById('inventoryFormId').value;
  const name = document.getElementById('invName').value;
  const category = document.getElementById('invCategory').value;
  const stock = parseInt(document.getElementById('invStock').value);
  const minLevel = parseInt(document.getElementById('invMinLevel').value);
  const cost = parseInt(document.getElementById('invCost').value);
  const supplierID = document.getElementById('invSupplier').value;

  if (!name || !category || isNaN(stock) || isNaN(minLevel) || !supplierID) {
    showToast('Please fill all required fields', 'error');
    return;
  }

  if (ingredientID) {
    const item = DB.inventory.find(i => i.ingredientID === ingredientID);
    item.ingredientName = name;
    item.categoryIngredient = category;
    item.currentStock = stock;
    item.reorderLevel = minLevel;
    item.reorderAmount = minLevel * 2;
    item.ingredientCost = cost;
    item.supplierID = supplierID;
    item.lastUpdateRestock = new Date().toISOString().split('T')[0];
    showToast('Inventory item updated');
  } else {
    const newID = 'ING' + String(DB.inventory.length + 1).padStart(3, '0');
    DB.inventory.push({
      ingredientID: newID,
      ingredientName: name,
      categoryIngredient: category,
      currentStock: stock,
      reorderLevel: minLevel,
      reorderAmount: minLevel * 2,
      wastedAmount: 0,
      ingredientCost: cost,
      supplierID,
      lastUpdateRestock: new Date().toISOString().split('T')[0],
      created_at: new Date().toISOString().split('T')[0]
    });
    showToast('Inventory item added');
  }

  bootstrap.Modal.getInstance(document.getElementById('inventoryModal')).hide();
  renderInventory();
  renderDashboard();
}

function deleteInventory(ingredientID) {
  if (!confirm('Delete this inventory item?')) return;
  DB.inventory = DB.inventory.filter(i => i.ingredientID !== ingredientID);
  showToast('Inventory item deleted');
  renderInventory();
}

// ============================================
// SUPPLIERS
// ============================================
function renderSuppliers() {
  const search = document.getElementById('supplierSearch').value.toLowerCase();
  let filtered = DB.suppliers;
  if (search) filtered = filtered.filter(s =>
    s.supplierName.toLowerCase().includes(search) ||
    s.supplierID.toLowerCase().includes(search)
  );

  const tbody = document.querySelector('#suppliersTable tbody');
  tbody.innerHTML = filtered.map(s => {
    const itemCount = DB.inventory.filter(i => i.supplierID === s.supplierID).length;
    return `
      <tr>
        <td><strong>${s.supplierID}</strong></td>
        <td>${s.supplierName}</td>
        <td>${s.contactPerson}</td>
        <td>${s.supplierAddress}</td>
        <td>${itemCount} items</td>
        <td>
          <button class="btn btn-icon btn-primary" onclick="editSupplier('${s.supplierID}')" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-icon btn-danger" onclick="deleteSupplier('${s.supplierID}')" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddSupplierModal() {
  document.getElementById('supplierModalTitle').textContent = 'Add Supplier';
  document.getElementById('supplierForm').reset();
  document.getElementById('supplierFormId').value = '';
  new bootstrap.Modal(document.getElementById('supplierModal')).show();
}

function editSupplier(supplierID) {
  const sup = DB.suppliers.find(s => s.supplierID === supplierID);
  if (!sup) return;

  document.getElementById('supplierModalTitle').textContent = 'Edit Supplier';
  document.getElementById('supplierFormId').value = supplierID;
  document.getElementById('supplierName').value = sup.supplierName;
  document.getElementById('supplierContact').value = sup.contactPerson;
  document.getElementById('supplierAddress').value = sup.supplierAddress;
  new bootstrap.Modal(document.getElementById('supplierModal')).show();
}

function saveSupplier() {
  const supplierID = document.getElementById('supplierFormId').value;
  const name = document.getElementById('supplierName').value;
  const contact = document.getElementById('supplierContact').value;
  const address = document.getElementById('supplierAddress').value;

  if (!name || !contact || !address) { showToast('Please fill all fields', 'error'); return; }

  if (supplierID) {
    const sup = DB.suppliers.find(s => s.supplierID === supplierID);
    sup.supplierName = name;
    sup.contactPerson = contact;
    sup.supplierAddress = address;
    showToast('Supplier updated');
  } else {
    const newID = 'SUP' + String(DB.suppliers.length + 1).padStart(3, '0');
    DB.suppliers.push({
      supplierID: newID,
      supplierName: name,
      contactPerson: contact,
      supplierAddress: address,
      created_at: new Date().toISOString().split('T')[0],
      created_by: 'admin'
    });
    showToast('Supplier added');
  }

  bootstrap.Modal.getInstance(document.getElementById('supplierModal')).hide();
  renderSuppliers();
}

function deleteSupplier(supplierID) {
  if (!confirm('Delete this supplier?')) return;
  DB.suppliers = DB.suppliers.filter(s => s.supplierID !== supplierID);
  showToast('Supplier deleted');
  renderSuppliers();
}

// ============================================
// PURCHASES
// ============================================
function renderPurchases() {
  const search = document.getElementById('purchaseSearch').value.toLowerCase();
  let filtered = DB.supplierPurchases;
  if (search) filtered = filtered.filter(p =>
    p.purchaseID.toLowerCase().includes(search) ||
    DB.suppliers.find(s => s.supplierID === p.supplierID)?.supplierName.toLowerCase().includes(search)
  );

  document.getElementById('totalPurchasesCount').textContent = DB.supplierPurchases.length;
  document.getElementById('totalPurchaseAmount').textContent = formatRupiah(DB.supplierPurchases.reduce((s, p) => s + p.totalCost, 0));

  const tbody = document.querySelector('#purchasesTable tbody');
  tbody.innerHTML = filtered.map(p => {
    const sup = DB.suppliers.find(s => s.supplierID === p.supplierID);
    const items = DB.supplierPurchaseItems.filter(spi => spi.purchaseID === p.purchaseID);
    return `
      <tr>
        <td><strong>${p.purchaseID}</strong></td>
        <td>${sup ? sup.supplierName : 'Unknown'}</td>
        <td>${items.length} item${items.length > 1 ? 's' : ''}</td>
        <td>${formatRupiah(p.totalCost)}</td>
        <td>${formatDate(p.purchaseDate)}</td>
        <td>
          <button class="btn btn-icon btn-info" onclick="viewPurchaseDetails('${p.purchaseID}')" title="View">
            <i class="fas fa-eye"></i>
          </button>
          <button class="btn btn-icon btn-danger" onclick="deletePurchase('${p.purchaseID}')" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function viewPurchaseDetails(purchaseID) {
  const purchase = DB.supplierPurchases.find(p => p.purchaseID === purchaseID);
  const sup = DB.suppliers.find(s => s.supplierID === purchase.supplierID);
  const items = DB.supplierPurchaseItems.filter(spi => spi.purchaseID === purchaseID);

  let html = `
    <div class="order-detail-row">
      <span class="order-detail-label">Purchase ID</span>
      <span class="order-detail-value">${purchase.purchaseID}</span>
    </div>
    <div class="order-detail-row">
      <span class="order-detail-label">Supplier</span>
      <span class="order-detail-value">${sup ? sup.supplierName : 'Unknown'}</span>
    </div>
    <div class="order-detail-row">
      <span class="order-detail-label">Date</span>
      <span class="order-detail-value">${formatDate(purchase.purchaseDate)}</span>
    </div>
    <div class="order-detail-row" style="border-top:2px solid var(--broken-white); margin-top:10px; padding-top:14px;">
      <span class="order-detail-label">Total</span>
      <span class="order-detail-value" style="color:var(--orange); font-size:16px;">${formatRupiah(purchase.totalCost)}</span>
    </div>
    <div class="order-items-list">
      <h6>Purchased Items</h6>
  `;

  items.forEach(item => {
    const ing = DB.inventory.find(i => i.ingredientID === item.ingredientID);
    html += `
      <div class="order-item-detail">
        <span>${ing ? ing.ingredientName : item.ingredientID} x${item.purchaseQuantity}</span>
        <strong>${formatRupiah(item.itemCost)}</strong>
      </div>
    `;
  });

  html += '</div>';
  document.getElementById('orderDetailsBody').innerHTML = html;
  new bootstrap.Modal(document.getElementById('orderDetailsModal')).show();
}

function openAddPurchaseModal() {
  document.getElementById('purchaseForm').reset();
  document.getElementById('purchaseItemsContainer').innerHTML = '';
  document.getElementById('purchaseDate').value = new Date().toISOString().split('T')[0];
  addPurchaseItemRow();

  const supSelect = document.getElementById('purchaseSupplier');
  supSelect.innerHTML = '<option value="">Select Supplier</option>' +
    DB.suppliers.map(s => `<option value="${s.supplierID}">${s.supplierName}</option>`).join('');

  new bootstrap.Modal(document.getElementById('purchaseModal')).show();
}

function addPurchaseItemRow() {
  const row = document.createElement('div');
  row.className = 'purchase-item-row row align-items-end';
  row.innerHTML = `
    <div class="col-md-5 mb-2">
      <label class="form-label">Ingredient</label>
      <select class="form-select purchase-item-ing" required>
        <option value="">Select Ingredient</option>
        ${DB.inventory.map(i => `<option value="${i.ingredientID}">${i.ingredientName}</option>`).join('')}
      </select>
    </div>
    <div class="col-md-3 mb-2">
      <label class="form-label">Quantity</label>
      <input type="number" class="form-control purchase-item-qty" value="1" min="1" required>
    </div>
    <div class="col-md-3 mb-2">
      <label class="form-label">Cost (Rp)</label>
      <input type="number" class="form-control purchase-item-cost" required>
    </div>
    <div class="col-md-1 mb-2">
      <button type="button" class="btn btn-danger btn-sm" onclick="removePurchaseItemRow(this)">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;
  document.getElementById('purchaseItemsContainer').appendChild(row);
  updatePurchaseDeleteButtons();
}

function removePurchaseItemRow(btn) {
  btn.closest('.purchase-item-row').remove();
  updatePurchaseDeleteButtons();
}

function updatePurchaseDeleteButtons() {
  const rows = document.querySelectorAll('.purchase-item-row');
  rows.forEach(row => {
    const btn = row.querySelector('.btn-danger');
    btn.disabled = rows.length === 1;
  });
}

function savePurchase() {
  const supplierID = document.getElementById('purchaseSupplier').value;
  const date = document.getElementById('purchaseDate').value;

  if (!supplierID) { showToast('Please select a supplier', 'error'); return; }

  const ings = document.querySelectorAll('.purchase-item-ing');
  const qtys = document.querySelectorAll('.purchase-item-qty');
  const costs = document.querySelectorAll('.purchase-item-cost');
  let total = 0;
  const items = [];

  for (let i = 0; i < ings.length; i++) {
    if (!ings[i].value) continue;
    const qty = parseInt(qtys[i].value);
    const cost = parseInt(costs[i].value);
    items.push({ ingredientID: ings[i].value, quantity: qty, cost });
    total += cost;
  }

  if (items.length === 0) { showToast('Please add at least one item', 'error'); return; }

  const purchaseID = 'PUR' + String(DB.supplierPurchases.length + 1).padStart(5, '0');

  DB.supplierPurchases.push({
    purchaseID,
    supplierID,
    purchaseDate: date,
    totalCost: total,
    created_at: date,
    created_by: 'admin'
  });

  items.forEach(item => {
    DB.supplierPurchaseItems.push({
      purchaseItemID: DB.supplierPurchaseItems.length + 1,
      purchaseID,
      ingredientID: item.ingredientID,
      purchaseQuantity: item.quantity,
      itemCost: item.cost,
      created_at: date
    });
  });

  showToast(`Purchase ${purchaseID} created`);
  bootstrap.Modal.getInstance(document.getElementById('purchaseModal')).hide();
  renderPurchases();
}

function deletePurchase(purchaseID) {
  if (!confirm('Delete this purchase?')) return;
  DB.supplierPurchases = DB.supplierPurchases.filter(p => p.purchaseID !== purchaseID);
  DB.supplierPurchaseItems = DB.supplierPurchaseItems.filter(spi => spi.purchaseID !== purchaseID);
  showToast('Purchase deleted');
  renderPurchases();
}

// ============================================
// MENU
// ============================================
function renderMenu() {
  const search = document.getElementById('menuSearch').value.toLowerCase();

  // Calculate stats per menu item
  const menuStats = {};
  DB.orderItems.forEach(oi => {
    if (!menuStats[oi.menuID]) menuStats[oi.menuID] = { count: 0, rev: 0 };
    menuStats[oi.menuID].count += oi.quantityItem;
    const menu = DB.menu.find(m => m.menuID === oi.menuID);
    menuStats[oi.menuID].rev += menu.itemPrice * oi.quantityItem;
  });

  let filtered = DB.menu;
  if (search) filtered = filtered.filter(m =>
    m.comboItem.toLowerCase().includes(search) ||
    m.menuID.toLowerCase().includes(search)
  );

  const tbody = document.querySelector('#menuTable tbody');
  tbody.innerHTML = filtered.map(m => {
    const stats = menuStats[m.menuID] || { count: 0, rev: 0 };
    return `
      <tr>
        <td><strong>${m.menuID}</strong></td>
        <td>${m.comboItem}</td>
        <td>${m.itemDescription.substring(0, 50)}...</td>
        <td>${formatRupiah(m.itemPrice)}</td>
        <td>${stats.count}</td>
        <td>${formatRupiah(stats.rev)}</td>
        <td>
          <button class="btn btn-icon btn-primary" onclick="editMenu('${m.menuID}')" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-icon btn-danger" onclick="deleteMenu('${m.menuID}')" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddMenuModal() {
  document.getElementById('menuModalTitle').textContent = 'Add Menu Item';
  document.getElementById('menuForm').reset();
  document.getElementById('menuFormId').value = '';
  new bootstrap.Modal(document.getElementById('menuModal')).show();
}

function editMenu(menuID) {
  const menu = DB.menu.find(m => m.menuID === menuID);
  if (!menu) return;

  document.getElementById('menuModalTitle').textContent = 'Edit Menu Item';
  document.getElementById('menuFormId').value = menuID;
  document.getElementById('menuComboItem').value = menu.comboItem;
  document.getElementById('menuDescription').value = menu.itemDescription;
  document.getElementById('menuPrice').value = menu.itemPrice;
  new bootstrap.Modal(document.getElementById('menuModal')).show();
}

function saveMenu() {
  const menuID = document.getElementById('menuFormId').value;
  const combo = document.getElementById('menuComboItem').value;
  const desc = document.getElementById('menuDescription').value;
  const price = parseInt(document.getElementById('menuPrice').value);

  if (!combo || !desc || !price) { showToast('Please fill all fields', 'error'); return; }

  if (menuID) {
    const menu = DB.menu.find(m => m.menuID === menuID);
    menu.comboItem = combo;
    menu.itemDescription = desc;
    menu.itemPrice = price;
    showToast('Menu item updated');
  } else {
    const newID = 'MENU' + String(DB.menu.length + 1).padStart(3, '0');
    DB.menu.push({
      menuID: newID,
      comboItem: combo,
      itemDescription: desc,
      itemPrice: price,
      created_at: new Date().toISOString().split('T')[0]
    });
    showToast('Menu item added');
  }

  bootstrap.Modal.getInstance(document.getElementById('menuModal')).hide();
  renderMenu();
}

function deleteMenu(menuID) {
  if (!confirm('Delete this menu item?')) return;
  DB.menu = DB.menu.filter(m => m.menuID !== menuID);
  showToast('Menu item deleted');
  renderMenu();
}

// ============================================
// PROMOTIONS
// ============================================
function renderPromotions() {
  const statusFilter = document.getElementById('promoStatusFilter').value;

  // Calculate usage per promo
  const promoUsage = {};
  DB.orders.forEach(o => {
    if (o.promoCode) {
      if (!promoUsage[o.promoCode]) promoUsage[o.promoCode] = 0;
      promoUsage[o.promoCode]++;
    }
  });

  let filtered = DB.promotions;
  if (statusFilter !== '') filtered = filtered.filter(p => p.isActive === parseInt(statusFilter));

  const tbody = document.querySelector('#promotionsTable tbody');
  tbody.innerHTML = filtered.map(p => {
    const usage = promoUsage[p.promoCode] || 0;
    const isActive = new Date(p.endDate) >= new Date() && p.isActive;
    return `
      <tr>
        <td><strong>${p.promoCode}</strong></td>
        <td>${formatRupiah(p.discountAmount)}</td>
        <td>${formatDate(p.startDate)}</td>
        <td>${formatDate(p.endDate)}</td>
        <td>${isActive ? '<span class="badge status-ok">Active</span>' : '<span class="badge status-cancelled">Expired</span>'}</td>
        <td>${usage} orders</td>
        <td>
          <button class="btn btn-icon btn-primary" onclick="editPromotion('${p.promoCode}')" title="Edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-icon btn-danger" onclick="deletePromotion('${p.promoCode}')" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddPromotionModal() {
  document.getElementById('promotionModalTitle').textContent = 'Add Promotion';
  document.getElementById('promotionForm').reset();
  document.getElementById('promotionFormId').value = '';
  new bootstrap.Modal(document.getElementById('promotionModal')).show();
}

function editPromotion(promoCode) {
  const promo = DB.promotions.find(p => p.promoCode === promoCode);
  if (!promo) return;

  document.getElementById('promotionModalTitle').textContent = 'Edit Promotion';
  document.getElementById('promotionFormId').value = promoCode;
  document.getElementById('promoCode').value = promo.promoCode;
  document.getElementById('promoDiscount').value = promo.discountAmount;
  document.getElementById('promoStart').value = promo.startDate;
  document.getElementById('promoEnd').value = promo.endDate;
  document.getElementById('promoActive').value = promo.isActive;
  new bootstrap.Modal(document.getElementById('promotionModal')).show();
}

function savePromotion() {
  const promoCode = document.getElementById('promotionFormId').value;
  const code = document.getElementById('promoCode').value.toUpperCase();
  const discount = parseInt(document.getElementById('promoDiscount').value);
  const start = document.getElementById('promoStart').value;
  const end = document.getElementById('promoEnd').value;
  const active = parseInt(document.getElementById('promoActive').value);

  if (!code || !discount || !start || !end) { showToast('Please fill all fields', 'error'); return; }

  if (promoCode) {
    const promo = DB.promotions.find(p => p.promoCode === promoCode);
    promo.promoCode = code;
    promo.discountAmount = discount;
    promo.startDate = start;
    promo.endDate = end;
    promo.isActive = active;
    showToast('Promotion updated');
  } else {
    DB.promotions.push({
      promoCode: code,
      discountAmount: discount,
      startDate: start,
      endDate: end,
      isActive: active,
      created_at: new Date().toISOString().split('T')[0],
      created_by: 'admin'
    });
    showToast('Promotion added');
  }

  bootstrap.Modal.getInstance(document.getElementById('promotionModal')).hide();
  renderPromotions();
}

function deletePromotion(promoCode) {
  if (!confirm('Delete this promotion?')) return;
  DB.promotions = DB.promotions.filter(p => p.promoCode !== promoCode);
  showToast('Promotion deleted');
  renderPromotions();
}

// ============================================
// NOTIFICATIONS & TOASTS
// ============================================
function showToast(message, type = 'success') {
  document.getElementById('toastMessage').textContent = message;
  const toastEl = document.getElementById('notificationToast');
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

let notificationPanelOpen = false;

function toggleSettings() {
  showToast('Settings feature coming soon!');
}

// ============================================
// SEARCH HANDLERS
// ============================================
function initSearchHandlers() {
  document.getElementById('orderSearch').addEventListener('input', () => { ordersPage = 1; renderOrders(); });
  document.getElementById('orderStatusFilter').addEventListener('change', () => { ordersPage = 1; renderOrders(); });
  document.getElementById('crewSearch').addEventListener('input', renderCrews);
  document.getElementById('customerSearch').addEventListener('input', renderCustomers);
  document.getElementById('inventorySearch').addEventListener('input', renderInventory);
  document.getElementById('inventoryCategoryFilter').addEventListener('change', renderInventory);
  document.getElementById('supplierSearch').addEventListener('input', renderSuppliers);
  document.getElementById('purchaseSearch').addEventListener('input', renderPurchases);
  document.getElementById('menuSearch').addEventListener('input', renderMenu);
  document.getElementById('promoStatusFilter').addEventListener('change', renderPromotions);
  document.getElementById('revenuePeriod').addEventListener('change', renderRevenueChart);
}

// ============================================
// INTERACTIVE FEATURES
// ============================================

// Touch / Swipe handling for sidebar
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 60;

function initTouchGestures() {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');

  // Swipe from left edge to open sidebar (mobile)
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  // Swipe on sidebar to close
  sidebar.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  sidebar.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (diff > SWIPE_THRESHOLD && window.innerWidth < 992) {
      closeSidebar();
    }
  }, { passive: true });
}

function handleSwipe() {
  const diff = touchEndX - touchStartX;
  const isMobile = window.innerWidth < 992;

  // Swipe right from left edge (first 30px) to open
  if (diff > SWIPE_THRESHOLD && touchStartX < 30 && isMobile) {
    openSidebar();
  }
  // Swipe left to close
  if (diff < -SWIPE_THRESHOLD && isMobile) {
    closeSidebar();
  }
}

// Sidebar overlay
function initSidebarOverlay() {
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebarOverlay';
  overlay.addEventListener('click', closeSidebar);
  document.querySelector('.wrapper').appendChild(overlay);
}

function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.add('show');
  overlay.classList.add('active');
  document.body.classList.add('sidebar-open');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.remove('show');
  overlay.classList.remove('active');
  document.body.classList.remove('sidebar-open');
}

function toggleSidebarMobile() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('show')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

// Keyboard Shortcuts
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ignore if in input/textarea/select
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
    if (e.target.isContentEditable) return;

    const key = e.key.toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;

    // Ctrl+Number for pages
    if (ctrl && key >= '1' && key <= '9') {
      e.preventDefault();
      const pages = ['dashboard', 'orders', 'crews', 'customers', 'inventory', 'suppliers', 'purchases', 'menu', 'promotions'];
      const idx = parseInt(key) - 1;
      if (pages[idx]) navigateTo(pages[idx]);
    }

    // Escape to close sidebar or modals
    if (key === 'escape') {
      const sidebar = document.getElementById('sidebar');
      if (sidebar.classList.contains('show')) {
        closeSidebar();
        return;
      }
      // Close any open modal
      const openModal = document.querySelector('.modal.show');
      if (openModal) {
        const modal = bootstrap.Modal.getInstance(openModal);
        if (modal) modal.hide();
      }
    }

    // B for sidebar toggle
    if (key === 'b' && !ctrl) {
      if (window.innerWidth >= 992) {
        toggleSidebar();
      } else {
        toggleSidebarMobile();
      }
    }

    // S for search focus
    if (key === 's' && !ctrl) {
      e.preventDefault();
      const searchBox = document.getElementById('globalSearch');
      if (searchBox) searchBox.focus();
    }

    // N for notifications
    if (key === 'n' && !ctrl) {
      toggleNotificationPanel();
    }
  });
}

// Notification Panel
function initNotificationPanel() {
  const btn = document.getElementById('notificationBtn');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNotificationPanel();
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('notificationPanel');
    if (panel && panel.classList.contains('show')) {
      if (!panel.contains(e.target) && !e.target.closest('#notificationBtn')) {
        panel.classList.remove('show');
      }
    }
  });
}

function toggleNotificationPanel() {
  const panel = document.getElementById('notificationPanel');
  if (!panel) return;
  panel.classList.toggle('show');
}

// Smooth page navigation with scroll to top
function navigateTo(page) {
  currentPage = page;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');

  document.querySelectorAll('.sidebar-menu .nav-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.sidebar-menu .nav-link[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add('active');

  const titles = {
    dashboard: 'Dashboard',
    orders: 'Orders',
    crews: 'Crew Members',
    customers: 'Customers',
    inventory: 'Inventory',
    suppliers: 'Suppliers',
    purchases: 'Supplier Purchases',
    menu: 'Menu',
    promotions: 'Promotions'
  };
  document.getElementById('pageTitle').textContent = titles[page] || page;
  document.title = `Quantom - ${titles[page] || page}`;

  // Close mobile sidebar
  if (window.innerWidth < 992) {
    closeSidebar();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh page data
  if (page === 'dashboard') renderDashboard();
  if (page === 'orders') renderOrders();
  if (page === 'crews') renderCrews();
  if (page === 'customers') renderCustomers();
  if (page === 'inventory') renderInventory();
  if (page === 'suppliers') renderSuppliers();
  if (page === 'purchases') renderPurchases();
  if (page === 'menu') renderMenu();
  if (page === 'promotions') renderPromotions();
}

// Desktop sidebar toggle with proper margin
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');
  sidebar.classList.toggle('collapsed');

  if (sidebar.classList.contains('collapsed')) {
    content.style.marginLeft = '70px';
  } else {
    content.style.marginLeft = '260px';
  }

  // Trigger chart resize after transition
  setTimeout(() => {
    if (revenueChart) revenueChart.resize();
    if (orderStatusChart) orderStatusChart.resize();
  }, 350);
}

// Handle window resize
function handleResize() {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');

  if (window.innerWidth >= 992) {
    // Desktop
    closeSidebar();
    if (!sidebar.classList.contains('collapsed')) {
      content.style.marginLeft = '260px';
    } else {
      content.style.marginLeft = '70px';
    }
  } else {
    // Mobile
    sidebar.classList.remove('collapsed');
    content.style.marginLeft = '0';
  }
}

// Initialize global search
function initGlobalSearch() {
  const searchInput = document.getElementById('globalSearch');
  if (!searchInput) return;

  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const query = e.target.value.toLowerCase();
      if (query.length < 2) return;

      // Search across current page
      const pageSearchMap = {
        dashboard: null,
        orders: 'orderSearch',
        crews: 'crewSearch',
        customers: 'customerSearch',
        inventory: 'inventorySearch',
        suppliers: 'supplierSearch',
        purchases: 'purchaseSearch',
        menu: 'menuSearch',
        promotions: null
      };

      const targetId = pageSearchMap[currentPage];
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          target.value = query;
          target.dispatchEvent(new Event('input'));
        }
      }
    }, 300);
  });
}

// Back to top button
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:99;width:48px;height:48px;border-radius:50%;display:none;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(212,115,43,0.4);padding:0;';
  btn.id = 'backToTop';
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  }, { passive: true });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initDatabase();
  initSidebarOverlay();
  initTouchGestures();
  initKeyboardShortcuts();
  initNotificationPanel();
  initGlobalSearch();
  initBackToTop();
  initNavigation();
  initSearchHandlers();
  renderDashboard();

  // Set active sidebar
  document.querySelector('.sidebar-menu .nav-link[data-page="dashboard"]').classList.add('active');

  // Handle resize
  window.addEventListener('resize', handleResize);
  handleResize();
});
