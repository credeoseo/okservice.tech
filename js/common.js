document.addEventListener('DOMContentLoaded', () => {
  function openModal(modalSelector = '.modal') {
    const modal = document.querySelector(modalSelector);
    const close = '.modalClose';
    modal.classList.add('modal--open');
    modal.setAttribute('tabindex', '-1');

    modal.addEventListener('animationend', () => {
      modal.firstElementChild.classList.add('modal__content--open');
    });

    modal.addEventListener('click', event => {
      const target = event.target;
      if (target.closest(close) || target.closest(modalSelector) && !target.closest('.modal__content')) {
        modal.firstElementChild.classList.remove('modal__content--open');
        modal.classList.remove('modal--open');
        modal.removeAttribute('tabindex');
      }
    });
  }

  $('.contact-button').on('click', function (e) {
    e.preventDefault();
    openModal('.form-modal');
  });
  
  function valLength(count, el) {
    var valid = false
    if ($(el).val().length < count) {
      $(el).addClass('invalid');
    } else {
      $(el).removeClass('invalid');
      valid = true;
    }
    return valid;
  }

  $('#mail-form').on('submit', function (e) {
    e.preventDefault();
    var formValid = false
    if (
      valLength(1, '.fieldEmail')
    ) {
      formValid = true;
    }
    if (!formValid) return;

    var action = $(this).attr('action');
    var payload = {}
    $('#mail-form').serializeArray().forEach((field) => {
      if (field.name === 'phone') {
        payload[field.name] = field.value.split('-').join('').split(' ').join('').split('(').join('').split(')').join('');
        return;
      }
      payload[field.name] = field.value
    });
    $.post(action, payload, function(data) {
      openModal('.success-modal');
    }).fail(function(error) {
      console.log( "error", error.responseJSON.result);
    })
  });

  $('.fieldEmail').on('blur', function () {
    valLength(1, '.fieldEmail');
  });
});


$(document).ready(function () {
  $('.accordionBtn').on('click', function () {
    $(this).closest('li').toggleClass('open');
    $(this).closest('li').find('.accordionContent').slideToggle();
  });

});


const player = document.querySelector("lottie-player");

if (player) {
  player.load(player.getAttribute('src'), {
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });
}




