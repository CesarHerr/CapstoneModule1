const btn = document.querySelector('.btnSubmit');

btn.addEventListener('click', () => {
  const radioTicket = document.querySelectorAll('input[name="ticket"]');
  const radioMenu = document.querySelectorAll('input[name="menu"]');
  const popup = document.createElement('div');

  let isCheckedTicket = false;
  radioTicket.forEach((ticket) => {
    if (ticket.checked) {
      isCheckedTicket = true;
    }
  });

  let isCheckedMenu = false;
  radioMenu.forEach((menu) => {
    if (menu.checked) {
      isCheckedMenu = true;
    }
  });

  if (isCheckedTicket && isCheckedMenu) {
    popup.className = 'popup';
    popup.innerHTML = `
  <div class="confirmation">
        <span>
          <img src="./img/celebrate.png" alt="celebrate" />
          <h2>Thank you very much for your reservation.</h2>
          <img src="./img/celebrate.png" alt="celebrate" />
        </span>
        <p>
        Thank you sincerely for choosing our services for your reservation. We genuinely appreciate your trust and look forward to providing you with an extraordinary experience. Wishing you a delightful day ahead as you prepare to embark on an unforgettable journey with us.
        </p>
        <button class="close">Close</button>
  `;

    document.body.insertAdjacentElement('afterbegin', popup);
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  } else {
    alert('Dear customer, please kindly select a Ticket and a Lunch');
  }
});
