document.getElementById('calculate').addEventListener('click', function() {
    const adultTickets = parseInt(document.getElementById('adults').value) || 0;
    const childTickets = parseInt(document.getElementById('children').value) || 0;
    const totalAmount = (adultTickets * 10) + (childTickets * 5);
    document.getElementById('total').value = totalAmount;
});
