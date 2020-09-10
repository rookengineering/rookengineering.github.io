
var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
emailjs.send('service_f1tlp5o', 'template_w0sjv1k', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
