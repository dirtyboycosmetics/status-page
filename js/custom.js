var w = window.matchMedia("(max-width: 992px)");
var vid = document.getElementById("dirtyboyvideo");
var source = document.getElementById("dirtyboyvideosource");


$(document).ready(function() {
    vid.pause();
    source.removeAttribute("src");
    source.src = "video/dirtyboy.mp4";
    // vid.load();
    const playPromise = vid.play();
    if (playPromise !== null) {
        playPromise.catch(() => { vid.play(); })
    }
    setTimeout(function() {
        vid.play();
    }, 1000);
});
window.addEventListener("resize", function screenres() {
    if (w.matches) {
        vid.pause();
        source.removeAttribute("src");
        source.src = "video/dirtyboy-mobile.mp4";
        // vid.load();
        const playPromise = vid.play();
        if (playPromise !== null) {
            playPromise.catch(() => { vid.play(); })
        }
    } else {
        vid.pause();
        source.removeAttribute("src");
        source.src = "video/dirtyboy.mp4";
        // vid.load();
        const playPromise = vid.play();
        if (playPromise !== null) {
            playPromise.catch(() => { vid.play(); })
        }
    };
});

// $(document).ready(function() {

//     var vid = $('video');
//     var vid_w_orig = 1280;
//     var vid_h_orig = 720;

//     // re-scale image when viewport resizes
//     $(window).resize(function() {

//         // get the parent element size
//         var container_w = vid.parent().width();
//         var container_h = vid.parent().height();

//         // use largest scale factor of horizontal/vertical
//         var scale_w = container_w / vid_w_orig;
//         var scale_h = container_h / vid_h_orig;
//         var scale = scale_w > scale_h ? scale_w : scale_h;

//         // scale the video
//         vid.width(scale * vid_w_orig);
//         vid.height(scale * vid_h_orig);

//     });

//     // trigger re-scale on pageload
//     $(window).trigger('resize');

// });