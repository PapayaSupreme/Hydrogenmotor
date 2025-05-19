document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const weeklyKm = parseFloat(form.weeklyKm.value);
        const refillTimes = parseFloat(form.refillTimes.value);
        const tankRange = parseFloat(form.tankRange.value);
        const h2Efficiency = parseFloat(form.carType.value);
        const selectedOption = form.carType.options[form.carType.selectedIndex];
        const petrolPer100 = parseFloat(selectedOption.dataset.petrol);

        if (isNaN(weeklyKm) || isNaN(refillTimes) || isNaN(tankRange) || weeklyKm <= 0 || tankRange <= 0) {
            resultDiv.textContent = 'Please fill all fields correctly.';
            return;
        }

        const monthlyKm = weeklyKm * 4;
        const petrolLitresUsed = refillTimes * (tankRange / 100 * petrolPer100);
        const hydrogenUsed = (monthlyKm / 100) * h2Efficiency;
        const differenceCost = petrolLitresUsed * 1.8 * 0.1;
        resultDiv.innerHTML = `
      <p>🚗 You drive about <strong>${monthlyKm} km/month</strong>.</p>
      <p>⛽ Your petrol usage is roughly <strong>${petrolLitresUsed.toFixed(1)} liters/month</strong>.</p>
      <p>💧 With a hydrogen car, you'd use around <strong>${hydrogenUsed.toFixed(2)} kg of H₂/month</strong>.</p>
      <p>💶 By switching to hydrogen, you'd save approximately <strong>€${differenceCost.toFixed(2)} per month</strong> in fuel costs.</p>
    `;
    });
});
