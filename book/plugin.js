require([
  "gitbook",
  "jQuery"
], function(gitbook, $) {
  gitbook.events.bind("start", function(e, config) {
    var ad = config.ad || {}

    if(ad.contentTop) {
      $(".book-body .page-inner").prepend(ad.contentTop)
    }

    if(ad.contentBottom) {
      $(".book-body .page-inner").append(ad.contentBottom)        
    }
  })
})
