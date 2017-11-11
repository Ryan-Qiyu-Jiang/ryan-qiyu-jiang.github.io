(function() {
  $(document).ready(function() {
    return $('#contact-form').submit(function(e) {
      var email, message, name;
      name = document.getElementById('inputName');
      email = document.getElementById('inputEmail');
      message = document.getElementById('inputMessage');

      if (!name.value || !email.value || !message.value) {
        alertify.error('Please check your entries');
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/ryan.qiyu.jiang@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json',
            success: function (data) {
                return alertify.success('Message sent');
            },
            error: function (textStatus, errorThrown) {
                alertify.error('Couldnt send sorry');
            }
        });
        e.preventDefault();
        $(this).get(0).reset();
      }
      
    });
  });

}).call(this);