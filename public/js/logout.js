// add in the function to logout
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Err on logout, please attempt later.');
    }
};
  
document.querySelector('#logout').addEventListener('click', logout);
