const main = () => {
  const appContainer = document.getElementById('app');

  fetch('/api/customers').then(response => {
    const rows = [];
    response.json().then(customers => {
      customers.forEach(customer => {
        rows.push(`<span>${customer.name}</span> : <span>${customer.email}</span><br />`);
      });
      appContainer.innerHTML = rows.join('');
    });
  });
};

main();
