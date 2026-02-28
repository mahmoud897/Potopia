document.addEventListener('DOMContentLoaded', () => {
    // Product Filtering Logic (for products/index.html)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('btn-primary'));
                filterBtns.forEach(b => b.classList.add('btn-outline'));

                // Add active class to clicked
                btn.classList.remove('btn-outline');
                btn.classList.add('btn-primary');

                const filterValue = btn.getAttribute('data-filter');

                productCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ROI Calculator (for AMP-F Containers page)
    const calculateBtn = document.getElementById('calculate-roi-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const lossPercent = parseFloat(document.getElementById('current-loss').value) || 0;
            const farmSize = parseFloat(document.getElementById('farm-size').value) || 0;
            const pricePerTon = parseFloat(document.getElementById('potato-price').value) || 0;

            // Assumptions: avg yield 15 tons/feddan
            const totalTons = farmSize * 15;
            const currentLossTons = totalTons * (lossPercent / 100);
            const newLossTons = totalTons * 0.05; // AMP-F reduces to 5%

            const savedTons = currentLossTons - newLossTons;
            const savedRevenue = savedTons * pricePerTon;

            const resultDiv = document.getElementById('roi-result');
            if (savedRevenue > 0) {
                resultDiv.innerHTML = `
          <h4 style="color: var(--primary-green); margin-bottom: 10px;">Estimated Annual Savings</h4>
          <p class="savings-amount" style="font-size: 2rem; font-weight: 700; color: var(--secondary-gold);">${savedRevenue.toLocaleString()} EGP</p>
          <p>By saving <strong>${savedTons.toFixed(1)} tons</strong> of potatoes from spoilage.</p>
        `;
            } else {
                resultDiv.innerHTML = `<p style="color: var(--error-color);">Please enter realistic values to see your ROI.</p>`;
            }
            resultDiv.style.display = 'block';
        });
    }
});
