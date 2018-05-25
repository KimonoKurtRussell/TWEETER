$(document).ready(function() {

// CREATING TWEET ELEMENTS THROUGH JQUERY INSTEAD OF HTML

function createTweetElement(tweet) {
  var $tweet = $("<div>").addClass("tweet");
  var $header = $("<header>").addClass("header").appendTo($tweet);
  $("<img>").addClass("profile-pic").attr("src", tweet.user.avatars.small).appendTo($header);
  $("<h3>").text(tweet.user.name).appendTo($header)
  $("<p>").text(tweet.user.handle).appendTo($header)
  var $article = $("<article>").text(tweet.content.text).appendTo($tweet)
  var $line = $("<hr>").appendTo($tweet)
  var $footer = $("<footer>").appendTo($tweet);
  $("<p>").addClass("clock").text(calculateSince(tweet.created_at)).appendTo($footer)
  var $span = $("<span>").addClass("icons").appendTo($footer);
  $("<i>").addClass("fa fa-thumbs-o-up").appendTo($span);
  $("<i>").addClass('fa fa-share fa').appendTo($span);
  $("<i>").addClass("fa fa-bookmark-o").appendTo($span);
  return $tweet;
}

// HELPS TO CREATE THE TWEETS ON PAGE FROM DATABASE

function renderTweets(tweets) {
  $(".newTweet").empty()
  for (var tweet of tweets) {
    let $tweetHtml = createTweetElement(tweet);
    $(".newTweet").append($tweetHtml)
  }
}

function renderPage() {
  $.get("/tweets", function (data) {
    data.reverse()
    renderTweets(data)
  })
};

// DEFINES HOW TEXT INPUT FIELD IS SUPPOSED TO WORK

$(".inputField").on("submit",function(event) {
   var $sendTweet = $(this);
   event.preventDefault();
   var $tweetMessage = $("textarea").val();
   if ($tweetMessage.length > 0 && $tweetMessage.length <141){
    var serializedMessage = $(this).serialize();
    $.post("/tweets", serializedMessage, function() {
      renderPage();
      $(".inputField").trigger("reset");
   })
  }else if ($tweetMessage.length > 140) {
   alert("Please make your tweet shorter than 140 characters.")
  }else if ($tweetMessage.length === 0) {
   alert("Please enter a message.")
  }
});
renderPage();
})

// VARIOUS ON LOAD FUNCTIONS INCLUDING HIDING AND TOGGLING COMPOSE, AUTOSELCT TEXT BOX ON TOGGLE

$(window).load(function(){
   $(".new-tweet").hide()
  })

$(document).ready(function(){
    $(".compose").click(function(){
        $(".new-tweet").slideToggle(750);
    });
 });

  $(document).ready(function (){
     $(".compose").click(function(){
     $('.textInput').focus()
    $('.textInput').select()
});
});

// FUNCTION FOR DEFINING MILLISECONDS INTO H/D/M/Y

function calculateSince(datetime)
{
    var tTime=new Date(datetime);
    var cTime=new Date();
    var sinceMin=Math.round((cTime-tTime)/60000);
    if(sinceMin==0)
    {
        var sinceSec=Math.round((cTime-tTime)/1000);
        if(sinceSec<10)
          var since='Less than 10 seconds ago';
        else if(sinceSec<20)
          var since='Less than 20 seconds ago';
        else
          var since='Half a minute ago';
    }
    else if(sinceMin==1)
    {
        var sinceSec=Math.round((cTime-tTime)/1000);
        if(sinceSec==30)
          var since='Half a minute ago';
        else if(sinceSec<60)
          var since='Less than a minute ago';
        else
          var since='1 minute ago';
    }
    else if(sinceMin<45)
        var since=sinceMin+' minutes ago';
    else if(sinceMin>44&&sinceMin<60)
        var since='About 1 hour ago';
    else if(sinceMin<1440){
        var sinceHr=Math.round(sinceMin/60);
    if(sinceHr==1)
      var since='About 1 hour ago';
    else
      var since='About '+sinceHr+' hours ago';
    }
    else if(sinceMin>1439&&sinceMin<2880)
        var since='1 day ago';
    else
    {
        var sinceDay=Math.round(sinceMin/1440);
        var since=sinceDay+' days ago';
    }
    return since;
};





