// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll > 0) {
//     $("#header").addClass("active");
//   } else {
//     $("#header").removeClass("active");
//   }
// });

let distEvent;

window.onmessage = function(event) {
  if (event.data === 'getHeight')
    event.source.postMessage(document.body.scrollHeight, event.origin);
  if (event.data === 'InitEvent') {
    distEvent = event;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const scrollBody = document.getElementById('scroll-body');
  const shadowHeader = document.getElementById('shadow-header');
  const closeButton = document.getElementById('close-button');
  const learnMore = document.getElementById('learn-more-link');

  // Modal
  const loadAnnouncementButton = document.getElementById(
    'load-announcement-button'
  );
  const announcementOverlay = document.getElementById('announcement-overlay');
  const announcementContainer = document.getElementById(
    'announcement-container'
  );

  if (scrollBody) scrollBody.addEventListener('scroll', dialogScroll);

  if (closeButton) {
    closeButton.addEventListener(
      'mousedown',
      closeMouseDown ? closeMouseDown : null
    );
    closeButton.addEventListener('mouseup', closeMouseUp ? closeMouseUp : null);
    closeButton.addEventListener(
      'mouseleave',
      closeMouseLeave ? closeMouseLeave : null
    );
    closeButton.addEventListener(
      'click',
      closeAnnouncement ? closeAnnouncement : null
    );
  }

  if (learnMore) {
    learnMore.addEventListener('mousedown', learnMouseDown);
    learnMore.addEventListener('mouseup', learnMouseUp);
    learnMore.addEventListener('mouseleave', learnMouseLeave);
    learnMore.addEventListener('click', function() {
      distEvent.source.postMessage('linkToFeatures', distEvent.origin);
    });
  }

  // if (announcementOverlay) {
  //   announcementOverlay.addEventListener('click', closeAnnouncement);
  // }

  if (loadAnnouncementButton) {
    loadAnnouncementButton.addEventListener('click', loadAnnouncement);
  }

  // scrollBody.addEventListener("mousedown", dialogMouseover);
  // scrollBody.addEventListener("mouseup", dialogMouseout);

  function dialogScroll(e) {
    // if (e.target.classList.contains('on-scrollbar') === false) {
    //   e.target.classList.add('on-scrollbar');
    // }

    // setTimeout(() => {
    //   e.target.classList.remove('on-scrollbar');
    // }, 500);

    if (scrollBody.scrollTop <= 0) {
      shadowHeader.classList.remove('has-shadow');
    } else {
      shadowHeader.classList.add('has-shadow');
    }
  }

  function closeMouseDown() {
    console.log('Close mouse down');
    closeButton.classList.add('on-mouse-down');
  }

  function closeMouseUp() {
    console.log('Close mouse up');
    closeButton.classList.remove('on-mouse-down');
  }

  function closeMouseLeave() {
    console.log('Close mouse leave');
    closeButton.classList.remove('on-mouse-down');
  }

  // LEARN MORE

  function learnMouseDown() {
    learnMore.classList.add('on-mouse-down');
  }

  function learnMouseUp() {
    learnMore.classList.remove('on-mouse-down');
  }

  function learnMouseLeave() {
    learnMore.classList.remove('on-mouse-down');
  }

  function loadAnnouncement() {
    if (announcementContainer) {
      announcementContainer.classList.add('shown');
      announcementOverlay.classList.add('shown');
      setTimeout(() => {
        closeButton.classList.add('shown');
      }, 3000);
    }
  }

  function closeAnnouncement() {
    announcementContainer.classList.remove('shown');
    announcementOverlay.classList.remove('shown');
    closeButton.classList.remove('shown');
    distEvent.source.postMessage('close', distEvent.origin);
  }

  window.onload = function() {
    loadAnnouncement();
  };
});
