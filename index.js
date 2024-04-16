fetch('https://api.heritagecapitals.com.ng/api/ManagementTeams')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


  fetch('https://api.heritagecapitals.com.ng/api/ManagementTeams')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => {
    // Assuming the images are provided as URLs in the 'imgUrl' property of each item in the response data
    const images = data.map(item => item.imgUrl); // Adjust this line based on the structure of your data
    const container = document.getElementById("show");

    // Clear existing content
    container.innerHTML = "";

    // Create img elements for each image URL and append them to the container
    images.forEach(imgUrl => {
      const img = document.createElement("img");
      img.src = imgUrl;
      container.appendChild(img);
    });
  })
  .catch(error => console.error('Error:', error));

