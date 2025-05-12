document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('hydrogenForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        const efficiency = parseFloat(document.getElementById('efficiency').value);

        if (isNaN(distance) || distance <= 0) {
            resultDiv.textContent = 'Please enter a valid distance.';
            return;
        }

        const hydrogenUsed = (distance / 100) * efficiency;
        resultDiv.textContent = `You would use approximately ${hydrogenUsed.toFixed(2)} kg of hydrogen per week.`;
    });
});
