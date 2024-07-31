window.onload = () => {
    
    const handleSubmit = () => {    
      const messageValue = document.querySelector("#contact_message");
      const nameValue = document.querySelector("#contact_name");
      const emailValue = document.querySelector("#contact_email");
    
      const data = {
        service_id: "service_yxcxh33",
        template_id: "template_0m59b7c",
        user_id: "oViey6tyw-x6Y7Q4p",
        template_params: {
          data: messageValue.value || "",
          from_name: nameValue.value || "",
          from_email: emailValue.value || "",
        },
      };
    
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((result => {
        alert("Message sent!"); 
      })).catch(err => {
        alert("Sorry something went wrong!"); 
      });
    };


    const contactForm = document.querySelector("#contact_form"); 
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        handleSubmit(); 
    })

}
