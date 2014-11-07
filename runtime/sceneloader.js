(function(require, _, VAPI, THREE, console, Math) {
function SceneLoader() {
  this.m_bHierarchy = false;
  this.m_bDependencies = false;
  this.scene = undefined;
  this.loadTime = 0;
}

SceneLoader.prototype = new VAPI.VeroldComponent();


SceneLoader.prototype.init = function() {
  if ( this.scene ) {
    this.scene.on( "load_progress", this.onProgress, this );
    this.scene.once( "load", this.onLoadComplete, this );
    this.scene.once( "load_hierarchy_failure", this.onLoadComplete, this );
  }
};

SceneLoader.prototype.shutdown = function() {
  if ( this.scene ) {
    this.scene.off( "load_progress", this.onProgress, this );
  }
};

SceneLoader.prototype.update = function( delta ) {
  this.loadTime += delta;
};

//fired as progress loading occurs
SceneLoader.prototype.onProgress = function(scene){
  var progress = scene.getLoadingProgress();//0.0 -> 1.0

  this.getEvents().trigger("sceneLoadProgress", progress, this.scene );

  /*****INCREASE THE SIZE OF THE BAR BASED OFF OF THE PERCENT LOADED  - CUSTOM CODE******/
  if(document.getElementById('load-bar')) {
    document.getElementById('load-bar').style.width = (progress*100) + '%';
  }

  //If no progress happens for a full second, trigger load complete
  if ( this.timeoutId ) {
    clearTimeout( this.timeoutId );
  }
  var that = this;
  this.timeoutId = setTimeout( function() {
    that.onLoadComplete();
  }, 5000 );
  /**************************************************************************************/
};

//fired when everything has been loaded
SceneLoader.prototype.onLoadComplete = function(){
  if ( document.getElementById('load-scene') ) {
    if(document.getElementById('load-bar')) {
      $('.load-bar').css('-webkit-transition', 'width 0s ease');
      $('.load-bar').css('-moz-transition', 'width 0s ease');
      document.getElementById('load-bar').style.width = 100 + '%';
    }

    /************************show the app and remove the loading scene -  CUSTOM CODE **************************/
    var that = this;
    setTimeout(function() {
      //document.body.removeChild(document.getElementById('load-scene'));
      var deleteElem = document.getElementById('load-scene');
      deleteElem.parentNode.removeChild(deleteElem);
    console.log("Scene load completed in " + that.loadTime.toFixed(2) + " seconds.");
      parent.postMessage({command: 'loadComplete', params: []}, '*');
    }, 100);
    /**************************************************************************************/
  }

  this.getEvents().trigger("sceneLoadComplete", this.scene );
};


return SceneLoader;
});