
  const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
     //   const context = canvas.getContext('2d');
        const snapButton = document.getElementById('snapshot');

        
       // Access the webcam
       //And we should first let the DOM all render Before the 
       // video so thats why we first loaded, then applied the video media 
       
       document.addEventListener('DOMContentLoaded', () => {
            const video = document.getElementById('video');

            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    video.srcObject = stream;
                })
                .catch(error => {
                    console.error("Error accessing webcam: ", error);
                });
        });