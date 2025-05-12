document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const weeklyKm = parseFloat(form.weeklyKm.value);
        const refillTimes = parseFloat(form.refillTimes.value);
        const tankRange = parseFloat(form.tankRange.value);
        const h2Efficiency = parseFloat(form.carType.value);

        if (isNaN(weeklyKm) || isNaN(refillTimes) || isNaN(tankRange) || weeklyKm <= 0 || tankRange <= 0) {
            resultDiv.textContent = 'Please fill all fields correctly.';
            return;
        }

        const monthlyKm = weeklyKm * 4;
        const petrolLitresUsed = refillTimes * (tankRange / 100 * 6.5); // estimate 6.5L/100km
        const hydrogenUsed = (monthlyKm / 100) * h2Efficiency;

        resultDiv.innerHTML = `
      <p>🚗 You drive about <strong>${monthlyKm} km/month</strong>.</p>
      <p>⛽ Your petrol usage is roughly <strong>${petrolLitresUsed.toFixed(1)} liters/month</strong>.</p>
      <p>💧 With a hydrogen car, you'd use around <strong>${hydrogenUsed.toFixed(2)} kg of H₂/month</strong>.</p>
    `;
    });
});
