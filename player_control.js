// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var player;
// Callback for when the YouTube iFrame player is ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // Set Player height and width
    height: '390',
    width: '640',
    // Set the id of the video to be played
    videoId: 'M7lc1UVf-VE',
    // Setup event listeners
    // These are covered in the next section
    events: {
      'onReady': onPlayerReady
    }
  });
};

function onPlayerReady (){
  player.playVideo();
  setTimeout(pauseVideo, 4000);
  setTimeout(loadNewVideo, 6000);
  setTimeout(stopVideo, 8500);
  setInterval(getContent, 1000);
};

function pauseVideo(){
  player.pauseVideo();
}

function loadNewVideo(){
  player.loadVideoById("me91AGSVsyo");
}

function stopVideo(){
  player.stopVideo();
}

function getContent(){
  var content
  content = player.INSERT_METHOD_HERE;
  document.getElementById('content').innerText = content
}