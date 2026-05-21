function submitRegistration(event) {
    // Prevent default form submission page reload
    event.preventDefault();
  
    var name = document.getElementById('fullname').value.trim();
    var age = document.getElementById('age').value.trim();
    var gender = document.getElementById('gender').value;
    var phone = document.getElementById('phone').value.trim();
    var instagram = document.getElementById('instagram').value.trim();
    var bloodgroup = document.getElementById('bloodgroup').value;
    var emgName = document.getElementById('emg-name').value.trim();
    var emgPhone = document.getElementById('emg-phone').value.trim();
    var utr = document.getElementById('utr').value.trim();
    
    // Basic absolute validations
    if (!name || !age || !gender || !phone || !instagram || !bloodgroup || !emgName || !emgPhone || !utr) { 
      alert('Please complete all form questions.'); 
      return false; 
    }
    
    if (utr.length < 12) { 
      alert('Please enter a valid 12-digit UPI Transaction ID / UTR Number.'); 
      return false; 
    }
  
    var form = document.getElementById('regForm');
    var formData = new FormData(form);
  
    // Send data asynchronously via AJAX
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';
      } else {
        alert('An error occurred during submission. Please try again.');
      }
    }).catch(error => {
      alert('Network error encountered. Please check your connection and try again.');
    });
  
    return false;
  }