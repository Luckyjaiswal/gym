const from = document.querySelector("form");

function sendEmail(){
   Email.send({
      Host : "smtp.elasticemail.com",
      Username : "ljaiswl264@gmail.com",
      Password : "6ACB8C21161C235F35C2CE2A469705C77A92",
      To : 'ljaiswl264@gmail.com',
      From : "ljaiswl264@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
 }
 from.addEventListener("submit", (e) =>{
   e.preventDefault();

   sendEmail();
 });