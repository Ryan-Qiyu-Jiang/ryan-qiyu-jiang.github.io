/*
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
*/
var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: '//formspree.io/ryan.qiyu.jiang@gmail.com',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    },
    success: function(data) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--success">Message sent!</div>');
    },
    error: function(err) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
    }
  });
});