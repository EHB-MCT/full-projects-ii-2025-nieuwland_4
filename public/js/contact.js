document.getElementById('contactForm').addEventListener('submit', async function (e) {
   e.preventDefault();
 
   const formData = {
     naamOuder: document.getElementById('naamOuder').value,
     naamLln: document.getElementById('naamLln').value,
     klas: document.getElementById('klas').value,
     telnmr: document.getElementById('telnmr').value,
     ontvanger: document.getElementById('ontvanger').value,
     bericht: document.getElementById('bericht').value,
   };
 
   const response = await fetch('/send', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
 
   if (response.ok) {
     alert('Bericht verzonden!');
     document.getElementById('contactForm').reset();
   } else {
     alert('Er is iets fout gegaan.');
   }
 });
 