/* FlowPlayer jQuery integration script written by Robin Smidsrød <robin@smidsrod.no>
   This code is licensed under the same license as FlowPlayer itself.
 */
init_flowplayer = function(root) {
    if ( ! $.fn.flowplayer ) {
        return false;
    }
    var $videos = $("a.video.flowplayer", root);
    $videos.flowplayer("flowplayer/flowplayer-3.2.7.swf", {
        "debug"  : false, // JavaScript debugging
        "log"    : {      // Flash debugging
            "level" : "error"
        },
        "plugins": {
            "controls": {
                "url": "flowplayer/flowplayer.controls-3.2.5.swf"
            }
        },
        "clip"   : {
            "autoPlay": true, // This ensures play happens immediately when anchor play button is clicked
            "scaling" : "scale", // Ensures videos use exactly the size we specify for them, ignoring aspect ratio
            "fadeInSpeed": 0,
            "fadeOutSpeed": 0
        }
    });
    $videos.each(function() {
        var $el = $(this);
        if ( ! $el.hasClass('autoplay') ) {
            return true; // Skip videos without autoplay class
        }
        var player = $el.flowplayer(0);
        if ( ! player ) {
            return true; // Skip to next video, because player is still not available
        }
        player.play();
        return true;
    });
    return true;
};
