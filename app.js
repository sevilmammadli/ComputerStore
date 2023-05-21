const button = document.querySelector('.btn');
const form = document.querySelector('.form');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const data = new FormData(form);
    
  if(data.get('model')&& data.get('harddrive')&&data.get('memory')&&data.get('processor')&&data.get('size')){
    alert(`This type of computers are exist. You can get computer from our shop`);
  }else{
    alert("Please enter your information right");
  }
  
});
