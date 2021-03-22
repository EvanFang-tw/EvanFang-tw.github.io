$(function () {
  /**
   * 手機版選單控制
   */
  $('.burger').click(function () {
    $(this).find('span').toggleClass('active')
    if ($('ul.nav').hasClass('active')) {
      $('ul.nav').removeClass('active')
      $('ul.nav li').each(function () {
        $(this).removeClass('active')
      })
    } else {
      $('ul.nav').addClass('active')
    }
  })

  $('ul.nav li').click(function () {
    $('ul.nav li').each(function () {
      $(this).removeClass('active')
      $(this).find('.fa-plus').addClass('show').removeClass('hide')
      $(this).find('.fa-minus').addClass('hide').removeClass('show')
    })
    $(this).addClass('active')
    $(this).find('.fa-plus').addClass('hide').removeClass('show')
    $(this).find('.fa-minus').addClass('show').removeClass('hide')
  })

  /**
   * 下方警語
   */
  $('#warning .title').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('#warning .info').removeClass('active')
      $('#warning .fa-plus').addClass('show').removeClass('hide')
      $('#warning .fa-minus').addClass('hide').removeClass('show')
    } else {
      $(this).addClass('active')
      $('#warning .info').addClass('active')
      $('#warning .fa-plus').addClass('hide').removeClass('show')
      $('#warning .fa-minus').addClass('show').removeClass('hide')
    }
  })

  /**
   * 優惠
   */
  $('.promotion-tab li').click(function () {
    var tab = $(this).attr('tab')
    $('.promotion-tab li').each(function () {
      $(this).removeClass('active')
      $(this).attr('open', 'false')
      $('.warning-info' + $(this).attr('tab')).hide()
    })
    $(this).addClass('active')
    $('.warning-info' + tab).show()
  })
})
