var canvas, stage, exportRoot, anim_container, dom_overlay_container2, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container2");
	dom_overlay_container2 = document.getElementById("dom_overlay_container2");
	var comp=AdobeAn.getComposition("74D450ADB528F74DBC02886E394D3499");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.CONT_BTN();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container2]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D35A04").ss(2,2,1).p("AqfAAIU/AA");
	this.shape.setTransform(67.175,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-1,-1,136.4,2), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D35A04").ss(1,1,1).p("A27oiMAt3AAAIAARFMgt3AAAg");
	this.shape.setTransform(146.8,54.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D35A04").s().p("A27IjIAAxFMAt3AAAIAARFg");
	this.shape_1.setTransform(146.8,54.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,295.6,111.5);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D35A04").ss(2,1,1).p("AsrmoIZXAAQCwAAB8B8QB9B9AACvIAAAAQAACwh9B8Qh8B9iwAAI5XAAQiwAAh9h9Qh8h8AAiwIAAAAQAAivB8h9QB9h8CwAAg");
	this.shape.setTransform(124.0094,42.475,1.0026,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1,-1,250,87), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AzyTzMAAAgnlMAnlAAAMAAAAnlg");
	var mask_graphics_1 = new cjs.Graphics().p("AzoTpMAAAgnRMAnRAAAMAAAAnRg");
	var mask_graphics_2 = new cjs.Graphics().p("AzJTKMAAAgmTMAmTAAAMAAAAmTg");
	var mask_graphics_3 = new cjs.Graphics().p("AyXSYMAAAgkvMAkvAAAMAAAAkvg");
	var mask_graphics_4 = new cjs.Graphics().p("AxVRWMAAAgirMAirAAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("AwDQEMAAAggHMAgHAAAMAAAAgHg");
	var mask_graphics_6 = new cjs.Graphics().p("AumOnIAA9NIdNAAIAAdNg");
	var mask_graphics_7 = new cjs.Graphics().p("AtCNDIAA6FIaFAAIAAaFg");
	var mask_graphics_8 = new cjs.Graphics().p("ArZLaIAA2zIWzAAIAAWzg");
	var mask_graphics_9 = new cjs.Graphics().p("Aq+K/IAA19IV9AAIAAV9g");
	var mask_graphics_10 = new cjs.Graphics().p("AqjKkIAA1HIVHAAIAAVHg");
	var mask_graphics_11 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_12 = new cjs.Graphics().p("ApwJxIAAzhIThAAIAAThg");
	var mask_graphics_13 = new cjs.Graphics().p("ApZJaIAAyzISzAAIAASzg");
	var mask_graphics_14 = new cjs.Graphics().p("ApDJEIAAyHISHAAIAASHg");
	var mask_graphics_15 = new cjs.Graphics().p("AowIxIAAxhIRhAAIAARhg");
	var mask_graphics_16 = new cjs.Graphics().p("AofIgIAAw/IQ/AAIAAQ/g");
	var mask_graphics_17 = new cjs.Graphics().p("AoRISIAAwjIQjAAIAAQjg");
	var mask_graphics_18 = new cjs.Graphics().p("AoGIHIAAwNIQNAAIAAQNg");
	var mask_graphics_19 = new cjs.Graphics().p("An+H/IAAv9IP9AAIAAP9g");
	var mask_graphics_20 = new cjs.Graphics().p("An5H6IAAvzIPzAAIAAPzg");
	var mask_graphics_21 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_22 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_23 = new cjs.Graphics().p("An3H5IAAvxIPvAAIAAPxg");
	var mask_graphics_24 = new cjs.Graphics().p("An3H5IAAvxIPvAAIAAPxg");
	var mask_graphics_25 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_26 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_27 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_28 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_29 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_30 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_31 = new cjs.Graphics().p("An3H5IAAvxIPvAAIAAPxg");
	var mask_graphics_32 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_33 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_34 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_35 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_36 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_37 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_38 = new cjs.Graphics().p("An3H5IAAvxIPvAAIAAPxg");
	var mask_graphics_39 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_40 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_41 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_42 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_43 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_44 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_299 = new cjs.Graphics().p("An3H4IAAvvIPvAAIAAPvg");
	var mask_graphics_300 = new cjs.Graphics().p("An5H6IAAvzIPzAAIAAPzg");
	var mask_graphics_301 = new cjs.Graphics().p("An8H9IAAv5IP5AAIAAP5g");
	var mask_graphics_302 = new cjs.Graphics().p("AoBICIAAwDIQDAAIAAQDg");
	var mask_graphics_303 = new cjs.Graphics().p("AoIIJIAAwRIQRAAIAAQRg");
	var mask_graphics_304 = new cjs.Graphics().p("AoRISIAAwjIQjAAIAAQjg");
	var mask_graphics_305 = new cjs.Graphics().p("AodIeIAAw7IQ7AAIAAQ7g");
	var mask_graphics_306 = new cjs.Graphics().p("AoqIrIAAxVIRVAAIAARVg");
	var mask_graphics_307 = new cjs.Graphics().p("Ao5I6IAAxzIRzAAIAARzg");
	var mask_graphics_308 = new cjs.Graphics().p("ApLJMIAAyXISXAAIAASXg");
	var mask_graphics_309 = new cjs.Graphics().p("ApeJfIAAy9IS9AAIAAS9g");
	var mask_graphics_310 = new cjs.Graphics().p("ApzJ0IAAznITnAAIAATng");
	var mask_graphics_311 = new cjs.Graphics().p("AqJKKIAA0TIUTAAIAAUTg");
	var mask_graphics_312 = new cjs.Graphics().p("AqhKiIAA1DIVDAAIAAVDg");
	var mask_graphics_313 = new cjs.Graphics().p("Aq7K8IAA13IV3AAIAAV3g");
	var mask_graphics_314 = new cjs.Graphics().p("ArXLYIAA2vIWvAAIAAWvg");
	var mask_graphics_315 = new cjs.Graphics().p("Ar0L1IAA3pIXpAAIAAXpg");
	var mask_graphics_316 = new cjs.Graphics().p("AsSMTIAA4lIYlAAIAAYlg");
	var mask_graphics_317 = new cjs.Graphics().p("AsyMzIAA5lIZlAAIAAZlg");
	var mask_graphics_318 = new cjs.Graphics().p("AtTNUIAA6nIanAAIAAang");
	var mask_graphics_319 = new cjs.Graphics().p("At1N2IAA7rIbrAAIAAbrg");
	var mask_graphics_320 = new cjs.Graphics().p("AuYOZIAA8xIcxAAIAAcxg");
	var mask_graphics_321 = new cjs.Graphics().p("Au8O9IAA95Id5AAIAAd5g");
	var mask_graphics_322 = new cjs.Graphics().p("AvhPiIAA/DIfDAAIAAfDg");
	var mask_graphics_323 = new cjs.Graphics().p("AwGQHMAAAggNMAgNAAAMAAAAgNg");
	var mask_graphics_324 = new cjs.Graphics().p("AwtQuMAAAghbMAhbAAAMAAAAhbg");
	var mask_graphics_325 = new cjs.Graphics().p("AxTRUMAAAginMAinAAAMAAAAing");
	var mask_graphics_326 = new cjs.Graphics().p("Ax7R8MAAAgj3MAj3AAAMAAAAj3g");
	var mask_graphics_327 = new cjs.Graphics().p("AyiSjMAAAglFMAlFAAAMAAAAlFg");
	var mask_graphics_328 = new cjs.Graphics().p("AzKTLMAAAgmVMAmVAAAMAAAAmVg");
	var mask_graphics_329 = new cjs.Graphics().p("AzyTzMAAAgnlMAnlAAAMAAAAnlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:120.1689,y:38.7445}).wait(1).to({graphics:mask_graphics_1,x:121.9811,y:39.6724}).wait(1).to({graphics:mask_graphics_2,x:127.3482,y:42.4215}).wait(1).to({graphics:mask_graphics_3,x:136.0647,y:46.8855}).wait(1).to({graphics:mask_graphics_4,x:147.7944,y:52.8925}).wait(1).to({graphics:mask_graphics_5,x:162.0873,y:60.2127}).wait(1).to({graphics:mask_graphics_6,x:178.3935,y:68.5643}).wait(1).to({graphics:mask_graphics_7,x:196.0875,y:77.6259}).wait(1).to({graphics:mask_graphics_8,x:214.488,y:86.7605}).wait(1).to({graphics:mask_graphics_9,x:188.9843,y:87.0367}).wait(1).to({graphics:mask_graphics_10,x:163.8518,y:87.3085}).wait(1).to({graphics:mask_graphics_11,x:139.4582,y:87.5722}).wait(1).to({graphics:mask_graphics_12,x:116.1585,y:87.8247}).wait(1).to({graphics:mask_graphics_13,x:94.2925,y:88.061}).wait(1).to({graphics:mask_graphics_14,x:74.1793,y:88.2787}).wait(1).to({graphics:mask_graphics_15,x:56.1123,y:88.474}).wait(1).to({graphics:mask_graphics_16,x:40.3546,y:88.6446}).wait(1).to({graphics:mask_graphics_17,x:27.1359,y:88.7877}).wait(1).to({graphics:mask_graphics_18,x:16.6495,y:88.9015}).wait(1).to({graphics:mask_graphics_19,x:9.0481,y:88.9834}).wait(1).to({graphics:mask_graphics_20,x:4.4428,y:89.0334}).wait(1).to({graphics:mask_graphics_21,x:2.9497,y:89.15}).wait(1).to({graphics:mask_graphics_22,x:9.9562,y:72.4343}).wait(1).to({graphics:mask_graphics_23,x:16.1293,y:57.7035}).wait(1).to({graphics:mask_graphics_24,x:21.5194,y:44.8434}).wait(1).to({graphics:mask_graphics_25,x:26.1742,y:33.7378}).wait(1).to({graphics:mask_graphics_26,x:30.1414,y:24.2716}).wait(1).to({graphics:mask_graphics_27,x:33.4706,y:16.3282}).wait(1).to({graphics:mask_graphics_28,x:36.2101,y:9.7925}).wait(1).to({graphics:mask_graphics_29,x:38.4079,y:4.5481}).wait(1).to({graphics:mask_graphics_30,x:40.1126,y:0.481}).wait(1).to({graphics:mask_graphics_31,x:41.3725,y:-2.5254}).wait(1).to({graphics:mask_graphics_32,x:42.2366,y:-4.5869}).wait(1).to({graphics:mask_graphics_33,x:42.7532,y:-5.819}).wait(1).to({graphics:mask_graphics_34,x:42.97,y:-6.3374}).wait(1).to({graphics:mask_graphics_35,x:42.9367,y:-6.2573}).wait(1).to({graphics:mask_graphics_36,x:42.701,y:-5.6948}).wait(1).to({graphics:mask_graphics_37,x:42.3113,y:-4.7651}).wait(1).to({graphics:mask_graphics_38,x:41.8162,y:-3.5847}).wait(1).to({graphics:mask_graphics_39,x:41.2646,y:-2.2685}).wait(1).to({graphics:mask_graphics_40,x:40.7048,y:-0.932}).wait(1).to({graphics:mask_graphics_41,x:40.1845,y:0.3082}).wait(1).to({graphics:mask_graphics_42,x:39.7534,y:1.3378}).wait(1).to({graphics:mask_graphics_43,x:39.4591,y:2.0398}).wait(1).to({graphics:mask_graphics_44,x:39.3503,y:2.2999}).wait(255).to({graphics:mask_graphics_299,x:39.3503,y:2.2999}).wait(1).to({graphics:mask_graphics_300,x:39.4609,y:2.3494}).wait(1).to({graphics:mask_graphics_301,x:39.7935,y:2.4984}).wait(1).to({graphics:mask_graphics_302,x:40.3465,y:2.7454}).wait(1).to({graphics:mask_graphics_303,x:41.1187,y:3.0906}).wait(1).to({graphics:mask_graphics_304,x:42.1078,y:3.5334}).wait(1).to({graphics:mask_graphics_305,x:43.3116,y:4.0716}).wait(1).to({graphics:mask_graphics_306,x:44.7259,y:4.7038}).wait(1).to({graphics:mask_graphics_307,x:46.3482,y:5.4288}).wait(1).to({graphics:mask_graphics_308,x:48.1721,y:6.2446}).wait(1).to({graphics:mask_graphics_309,x:50.1943,y:7.1487}).wait(1).to({graphics:mask_graphics_310,x:52.4088,y:8.1391}).wait(1).to({graphics:mask_graphics_311,x:54.8087,y:9.2119}).wait(1).to({graphics:mask_graphics_312,x:57.389,y:10.3657}).wait(1).to({graphics:mask_graphics_313,x:60.1411,y:11.5965}).wait(1).to({graphics:mask_graphics_314,x:63.058,y:12.901}).wait(1).to({graphics:mask_graphics_315,x:66.132,y:14.2753}).wait(1).to({graphics:mask_graphics_316,x:69.3544,y:15.7162}).wait(1).to({graphics:mask_graphics_317,x:72.7164,y:17.2192}).wait(1).to({graphics:mask_graphics_318,x:76.2088,y:18.7807}).wait(1).to({graphics:mask_graphics_319,x:79.8224,y:20.3962}).wait(1).to({graphics:mask_graphics_320,x:83.5465,y:22.0617}).wait(1).to({graphics:mask_graphics_321,x:87.3715,y:23.7721}).wait(1).to({graphics:mask_graphics_322,x:91.2865,y:25.5226}).wait(1).to({graphics:mask_graphics_323,x:95.2812,y:27.3091}).wait(1).to({graphics:mask_graphics_324,x:99.3442,y:29.1258}).wait(1).to({graphics:mask_graphics_325,x:103.4649,y:30.9681}).wait(1).to({graphics:mask_graphics_326,x:107.6319,y:32.8311}).wait(1).to({graphics:mask_graphics_327,x:111.8336,y:34.7098}).wait(1).to({graphics:mask_graphics_328,x:116.0582,y:36.5989}).wait(1).to({graphics:mask_graphics_329,x:120.1689,y:38.7445}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D35A04").ss(2,1,1).p("AuQmoIchAAQCwAAB8B8QB8B9AACvIAAAAQAACwh8B8Qh8B9iwAAI8hAAQiwAAh8h9Qh8h8AAiwIAAAAQAAivB8h9QB8h8CwAAg");
	this.shape.setTransform(118.4984,37.5348,0.8862,0.8839);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(330));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,239,77.1);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("Aw6moMAh1AAAQCwAAB8B8QB9B9AACvIAAAAQAACwh9B8Qh8B9iwAAMgh1AAAQiwAAh8h9Qh8h8AAiwIAAAAQAAivB8h9QB8h8CwAAg");
	this.shape.setTransform(111.994,31.4782,0.7428,0.7409);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,226,65), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D35A04").s().p("Ah+B/Qg1g0AAhLQAAhKA1g0QA0g1BLAAQBKAAA0A1QA1A0AABKQAABLg1A0Qg0A1hKAAQhLAAg0g1gAhgg8QgJAJAAAOIAABQQAAANAJAKQAKAJAOAAIAaAAIAAAZQAAAGAJAGIAFAAQAGAAADgDIAhgiIA/AAQAOAAAJgJQAKgKAAgNIAAhQQAAgOgKgJQgJgJgOAAIiRAAQgOAAgKAJgAAjAAQAAgSAUAAQAUAAAAASQAAATgUAAQgUAAAAgTgAgSAAQAAgSASAAQATAAAAASQAAATgTAAQgSAAAAgTgAhMAAQAAgSAVAAQAUAAAAASQAAATgUAAQgVAAAAgTg");
	this.shape.setTransform(17.975,17.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,36,36), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnsA8QgVgWAAgkQAAgmAVgXQAVgXAlAAQAiAAAVAWQAUAWAAAlQAAAngVAWQgVAXgjAAQgjAAgVgXgAnXgqQgOAQAAAaQAAAbANARQAOAQAWAAQAXAAANgQQANgPAAgcQAAgdgMgPQgNgQgXAAQgWAAgOARgAJ2BRIAAigIAbAAIAACggAH5BRIAAigIAaAAIAABAIAcAAQAZAAAPAMQAOALAAAWQAAAXgPAOQgPAOgaAAgAITA6IAXAAQAPABAIgIQAIgGAAgNQAAgagfAAIgXAAgAGCBRIAAiKIguAAIAAgWIB3AAIAAAWIguAAIAACKgAEYBRIg4hKIgEgGIAAAAIAABQIgbAAIAAigIAbAAIAABLIAAAAIAEgFIA2hGIAgAAIg/BMIBEBUgAB4BRIgPgqIg/AAIgOAqIgcAAIA7igIAeAAIA8CggABHgtIgWA/IAxAAIgWg/IgCgLIgBAAIgCALgAhWBRIAAiKIguAAIAAgWIB3AAIAAAWIguAAIAACKgAjMBRIAAhGIhMAAIAABGIgbAAIAAigIAbAAIAABDIBMAAIAAhDIAbAAIAACggAo5BRIg4hKIgEgGIAAAAIAABQIgbAAIAAigIAbAAIAABLIAAAAIAEgFIA2hGIAgAAIg/BMIBEBUg");
	this.shape.setTransform(65.675,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,131.4,16.6), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(9));

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(67.2,0,0.0781,1,0,0,0,67.2,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},1,cjs.Ease.backOut).to({scaleX:1},13,cjs.Ease.backOut).to({scaleX:0.0781},8,cjs.Ease.sineIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-1.3,148.6,2.6);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2pMuIAA5bMAtTAAAIAAZbg");
	var mask_graphics_1 = new cjs.Graphics().p("A2mMtIAA5ZMAtNAAAIAAZZg");
	var mask_graphics_2 = new cjs.Graphics().p("A2dMpIAA5RMAs7AAAIAAZRg");
	var mask_graphics_3 = new cjs.Graphics().p("A2OMiIAA5DMAsdAAAIAAZDg");
	var mask_graphics_4 = new cjs.Graphics().p("A15MYIAA4vMArzAAAIAAYvg");
	var mask_graphics_5 = new cjs.Graphics().p("A1eMMIAA4XMAq9AAAIAAYXg");
	var mask_graphics_6 = new cjs.Graphics().p("A0+L+IAA37MAp9AAAIAAX7g");
	var mask_graphics_7 = new cjs.Graphics().p("A0ZLtIAA3ZMAozAAAIAAXZg");
	var mask_graphics_8 = new cjs.Graphics().p("AzwLaIAA2zMAnhAAAIAAWzg");
	var mask_graphics_9 = new cjs.Graphics().p("AzCLFIAA2JMAmFAAAIAAWJg");
	var mask_graphics_10 = new cjs.Graphics().p("AyQKuIAA1bMAkhAAAIAAVbg");
	var mask_graphics_11 = new cjs.Graphics().p("AxbKWIAA0rMAi3AAAIAAUrg");
	var mask_graphics_12 = new cjs.Graphics().p("AwjJ8IAAz3MAhHAAAIAAT3g");
	var mask_graphics_13 = new cjs.Graphics().p("AvoJiIAAzDIfRAAIAATDg");
	var mask_graphics_14 = new cjs.Graphics().p("AusJGIAAyLIdZAAIAASLg");
	var mask_graphics_15 = new cjs.Graphics().p("AtuIqIAAxTIbdAAIAARTg");
	var mask_graphics_16 = new cjs.Graphics().p("AsxIOIAAwbIZjAAIAAQbg");
	var mask_graphics_17 = new cjs.Graphics().p("AsSIFIAAwJIYlAAIAAQJg");
	var mask_graphics_18 = new cjs.Graphics().p("Ar2H9IAAv5IXtAAIAAP5g");
	var mask_graphics_19 = new cjs.Graphics().p("ArdH2IAAvrIW7AAIAAPrg");
	var mask_graphics_20 = new cjs.Graphics().p("ArHHvIAAvdIWPAAIAAPdg");
	var mask_graphics_21 = new cjs.Graphics().p("Aq0HqIAAvTIVpAAIAAPTg");
	var mask_graphics_22 = new cjs.Graphics().p("AqjHlIAAvJIVHAAIAAPJg");
	var mask_graphics_23 = new cjs.Graphics().p("AqUHgIAAu/IUpAAIAAO/g");
	var mask_graphics_24 = new cjs.Graphics().p("AqHHdIAAu5IUPAAIAAO5g");
	var mask_graphics_25 = new cjs.Graphics().p("Ap9HaIAAuzIT7AAIAAOzg");
	var mask_graphics_26 = new cjs.Graphics().p("Ap0HXIAAutITpAAIAAOtg");
	var mask_graphics_27 = new cjs.Graphics().p("AptHVIAAupITbAAIAAOpg");
	var mask_graphics_28 = new cjs.Graphics().p("ApnHTIAAulITPAAIAAOlg");
	var mask_graphics_29 = new cjs.Graphics().p("ApjHSIAAujITHAAIAAOjg");
	var mask_graphics_30 = new cjs.Graphics().p("ApgHRIAAuhITBAAIAAOhg");
	var mask_graphics_31 = new cjs.Graphics().p("ApfHRIAAuhIS/AAIAAOhg");
	var mask_graphics_32 = new cjs.Graphics().p("ApeHRIAAuhIS9AAIAAOhg");
	var mask_graphics_33 = new cjs.Graphics().p("ApeHRIAAuhIS9AAIAAOhg");
	var mask_graphics_34 = new cjs.Graphics().p("ApfHRIAAuhIS/AAIAAOhg");
	var mask_graphics_35 = new cjs.Graphics().p("AphHRIAAuhITDAAIAAOhg");
	var mask_graphics_36 = new cjs.Graphics().p("ApiHSIAAujITFAAIAAOjg");
	var mask_graphics_37 = new cjs.Graphics().p("AplHTIAAulITLAAIAAOlg");
	var mask_graphics_38 = new cjs.Graphics().p("ApnHTIAAulITPAAIAAOlg");
	var mask_graphics_39 = new cjs.Graphics().p("ApqHUIAAunITVAAIAAOng");
	var mask_graphics_40 = new cjs.Graphics().p("ApsHVIAAupITZAAIAAOpg");
	var mask_graphics_41 = new cjs.Graphics().p("ApuHVIAAupITdAAIAAOpg");
	var mask_graphics_42 = new cjs.Graphics().p("ApwHWIAAurIThAAIAAOrg");
	var mask_graphics_43 = new cjs.Graphics().p("ApxHWIAAurITjAAIAAOrg");
	var mask_graphics_44 = new cjs.Graphics().p("ApxHWIAAurITjAAIAAOrg");
	var mask_graphics_299 = new cjs.Graphics().p("ApxHWIAAurITjAAIAAOrg");
	var mask_graphics_300 = new cjs.Graphics().p("ApyHXIAAutITlAAIAAOtg");
	var mask_graphics_301 = new cjs.Graphics().p("Ap2HYIAAuvITtAAIAAOvg");
	var mask_graphics_302 = new cjs.Graphics().p("Ap7HaIAAuzIT3AAIAAOzg");
	var mask_graphics_303 = new cjs.Graphics().p("AqDHeIAAu7IUHAAIAAO7g");
	var mask_graphics_304 = new cjs.Graphics().p("AqNHiIAAvDIUbAAIAAPDg");
	var mask_graphics_305 = new cjs.Graphics().p("AqZHnIAAvNIUzAAIAAPNg");
	var mask_graphics_306 = new cjs.Graphics().p("AqoHtIAAvZIVRAAIAAPZg");
	var mask_graphics_307 = new cjs.Graphics().p("Aq4H0IAAvnIVxAAIAAPng");
	var mask_graphics_308 = new cjs.Graphics().p("ArLH8IAAv3IWXAAIAAP3g");
	var mask_graphics_309 = new cjs.Graphics().p("ArfIEIAAwHIW/AAIAAQHg");
	var mask_graphics_310 = new cjs.Graphics().p("Ar2IOIAAwbIXtAAIAAQbg");
	var mask_graphics_311 = new cjs.Graphics().p("AsOIYIAAwvIYdAAIAAQvg");
	var mask_graphics_312 = new cjs.Graphics().p("AspIjIAAxFIZTAAIAARFg");
	var mask_graphics_313 = new cjs.Graphics().p("AtFIvIAAxdIaLAAIAARdg");
	var mask_graphics_314 = new cjs.Graphics().p("AtiI7IAAx1IbFAAIAAR1g");
	var mask_graphics_315 = new cjs.Graphics().p("AuCJIIAAyPIcFAAIAASPg");
	var mask_graphics_316 = new cjs.Graphics().p("AuiJWIAAyrIdFAAIAASrg");
	var mask_graphics_317 = new cjs.Graphics().p("AvFJkIAAzHIeLAAIAATHg");
	var mask_graphics_318 = new cjs.Graphics().p("AvoJzIAAzlIfRAAIAATlg");
	var mask_graphics_319 = new cjs.Graphics().p("AwNKCIAA0DMAgbAAAIAAUDg");
	var mask_graphics_320 = new cjs.Graphics().p("AwzKSIAA0jMAhnAAAIAAUjg");
	var mask_graphics_321 = new cjs.Graphics().p("AxaKiIAA1DMAi1AAAIAAVDg");
	var mask_graphics_322 = new cjs.Graphics().p("AyCKzIAA1lMAkFAAAIAAVlg");
	var mask_graphics_323 = new cjs.Graphics().p("AyqLEIAA2HMAlVAAAIAAWHg");
	var mask_graphics_324 = new cjs.Graphics().p("AzULVIAA2pMAmpAAAIAAWpg");
	var mask_graphics_325 = new cjs.Graphics().p("Az+LnIAA3NMAn9AAAIAAXNg");
	var mask_graphics_326 = new cjs.Graphics().p("A0oL4IAA3vMApRAAAIAAXvg");
	var mask_graphics_327 = new cjs.Graphics().p("A1TMKIAA4TMAqnAAAIAAYTg");
	var mask_graphics_328 = new cjs.Graphics().p("A1+McIAA43MAr9AAAIAAY3g");
	var mask_graphics_329 = new cjs.Graphics().p("A2pMuIAA5bMAtTAAAIAAZbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:122.4,y:48.0249}).wait(1).to({graphics:mask_graphics_1,x:121.7893,y:48.3597}).wait(1).to({graphics:mask_graphics_2,x:119.9628,y:49.36}).wait(1).to({graphics:mask_graphics_3,x:116.9379,y:51.0165}).wait(1).to({graphics:mask_graphics_4,x:112.7444,y:53.3133}).wait(1).to({graphics:mask_graphics_5,x:107.4218,y:56.2288}).wait(1).to({graphics:mask_graphics_6,x:101.0219,y:59.7334}).wait(1).to({graphics:mask_graphics_7,x:93.6063,y:63.7951}).wait(1).to({graphics:mask_graphics_8,x:85.2467,y:68.3734}).wait(1).to({graphics:mask_graphics_9,x:76.023,y:73.4256}).wait(1).to({graphics:mask_graphics_10,x:66.0244,y:78.9016}).wait(1).to({graphics:mask_graphics_11,x:55.3468,y:84.7498}).wait(1).to({graphics:mask_graphics_12,x:44.0937,y:90.9135}).wait(1).to({graphics:mask_graphics_13,x:32.373,y:97.3327}).wait(1).to({graphics:mask_graphics_14,x:20.2977,y:103.9464}).wait(1).to({graphics:mask_graphics_15,x:7.9839,y:110.6901}).wait(1).to({graphics:mask_graphics_16,x:-4.4496,y:117.5004}).wait(1).to({graphics:mask_graphics_17,x:30.0388,y:107.5878}).wait(1).to({graphics:mask_graphics_18,x:61.1631,y:98.6418}).wait(1).to({graphics:mask_graphics_19,x:89.0824,y:90.6174}).wait(1).to({graphics:mask_graphics_20,x:113.9567,y:83.4678}).wait(1).to({graphics:mask_graphics_21,x:135.9441,y:77.148}).wait(1).to({graphics:mask_graphics_22,x:155.2055,y:71.6121}).wait(1).to({graphics:mask_graphics_23,x:171.8987,y:66.8142}).wait(1).to({graphics:mask_graphics_24,x:186.183,y:62.7084}).wait(1).to({graphics:mask_graphics_25,x:198.2182,y:59.2492}).wait(1).to({graphics:mask_graphics_26,x:208.1641,y:56.3909}).wait(1).to({graphics:mask_graphics_27,x:216.1787,y:54.0873}).wait(1).to({graphics:mask_graphics_28,x:222.4219,y:52.2927}).wait(1).to({graphics:mask_graphics_29,x:227.0529,y:50.9616}).wait(1).to({graphics:mask_graphics_30,x:230.2312,y:50.0485}).wait(1).to({graphics:mask_graphics_31,x:232.1159,y:49.5067}).wait(1).to({graphics:mask_graphics_32,x:232.866,y:49.2912}).wait(1).to({graphics:mask_graphics_33,x:232.641,y:49.3556}).wait(1).to({graphics:mask_graphics_34,x:231.6001,y:49.6548}).wait(1).to({graphics:mask_graphics_35,x:229.9023,y:50.1426}).wait(1).to({graphics:mask_graphics_36,x:227.7068,y:50.7735}).wait(1).to({graphics:mask_graphics_37,x:225.1737,y:51.502}).wait(1).to({graphics:mask_graphics_38,x:222.4615,y:52.2814}).wait(1).to({graphics:mask_graphics_39,x:219.7296,y:53.0667}).wait(1).to({graphics:mask_graphics_40,x:217.1372,y:53.8119}).wait(1).to({graphics:mask_graphics_41,x:214.8435,y:54.4707}).wait(1).to({graphics:mask_graphics_42,x:213.0084,y:54.9985}).wait(1).to({graphics:mask_graphics_43,x:211.7903,y:55.3486}).wait(1).to({graphics:mask_graphics_44,x:211.3493,y:55.4756}).wait(255).to({graphics:mask_graphics_299,x:211.3493,y:55.4756}).wait(1).to({graphics:mask_graphics_300,x:211.2273,y:55.4652}).wait(1).to({graphics:mask_graphics_301,x:210.8619,y:55.4346}).wait(1).to({graphics:mask_graphics_302,x:210.2539,y:55.3833}).wait(1).to({graphics:mask_graphics_303,x:209.4053,y:55.3127}).wait(1).to({graphics:mask_graphics_304,x:208.3181,y:55.2213}).wait(1).to({graphics:mask_graphics_305,x:206.995,y:55.1106}).wait(1).to({graphics:mask_graphics_306,x:205.4407,y:54.9806}).wait(1).to({graphics:mask_graphics_307,x:203.6592,y:54.8312}).wait(1).to({graphics:mask_graphics_308,x:201.6544,y:54.6633}).wait(1).to({graphics:mask_graphics_309,x:199.4319,y:54.477}).wait(1).to({graphics:mask_graphics_310,x:196.9987,y:54.2736}).wait(1).to({graphics:mask_graphics_311,x:194.3613,y:54.0522}).wait(1).to({graphics:mask_graphics_312,x:191.5263,y:53.815}).wait(1).to({graphics:mask_graphics_313,x:188.5019,y:53.5617}).wait(1).to({graphics:mask_graphics_314,x:185.2965,y:53.293}).wait(1).to({graphics:mask_graphics_315,x:181.9184,y:53.01}).wait(1).to({graphics:mask_graphics_316,x:178.3773,y:52.7134}).wait(1).to({graphics:mask_graphics_317,x:174.6828,y:52.4043}).wait(1).to({graphics:mask_graphics_318,x:170.8452,y:52.083}).wait(1).to({graphics:mask_graphics_319,x:166.8744,y:51.7504}).wait(1).to({graphics:mask_graphics_320,x:162.7821,y:51.4071}).wait(1).to({graphics:mask_graphics_321,x:158.5786,y:51.0552}).wait(1).to({graphics:mask_graphics_322,x:154.2762,y:50.6948}).wait(1).to({graphics:mask_graphics_323,x:149.8865,y:50.3271}).wait(1).to({graphics:mask_graphics_324,x:145.4216,y:49.9532}).wait(1).to({graphics:mask_graphics_325,x:140.8937,y:49.5742}).wait(1).to({graphics:mask_graphics_326,x:136.3145,y:49.1904}).wait(1).to({graphics:mask_graphics_327,x:131.6979,y:48.8034}).wait(1).to({graphics:mask_graphics_328,x:127.0553,y:48.415}).wait(1).to({graphics:mask_graphics_329,x:122.4,y:48.0249}).wait(1));

	// Layer_1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(124,42.5,1,1,0,0,0,124,42.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,250,87);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(6));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(13.15,27.85,0.5323,0.5323,90,0,0,13.8,29.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regY:29.4,scaleX:0.9471,scaleY:0.9471,rotation:0,x:13.05,alpha:1},16,cjs.Ease.backOut).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-1.7,37.400000000000006,41.400000000000006);


// stage content:
(lib.CONT_BTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,14,27];
	// timeline functions:
	this.frame_0 = function() {
		this.button_1.addEventListener("rollover", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay(15);
			this.underline.gotoAndPlay(1);
		}
		this.button_1.addEventListener("rollout", fl_ClickToGoToAndStopAtFrame2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame2()
		{
			this.gotoAndPlay(29);
			this.underline.gotoAndPlay(15);
		}
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(13).call(this.frame_27).wait(1));

	// Layer_3
	this.button_1 = new lib.Symbol13();
	this.button_1.name = "button_1";
	this.button_1.setTransform(147.8,54.7,1,1,0,0,0,146.8,54.7);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Symbol13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(28));

	// Layer_8
	this.underline = new lib.Symbol14();
	this.underline.name = "underline";
	this.underline.setTransform(160.8,68.6,1,1,0,0,0,67.2,0);

	this.timeline.addTween(cjs.Tween.get(this.underline).wait(28));

	// Symbol_2
	this.instance = new lib.Symbol3();
	this.instance.setTransform(66,55,1,1,0,0,0,17,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

	// Layer_4
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(145.6,54.85,1.043,1.043,0,0,0,118.5,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:145.25},14,cjs.Ease.backOut).wait(1).to({x:145.6},0).to({scaleX:1.043,scaleY:1.043},12,cjs.Ease.backOut).wait(1));

	// Layer_5
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(145.1,55.1,1.0493,1.0493,0,0,0,112.1,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:112,scaleX:1,scaleY:1,x:144.95,y:55.05},14,cjs.Ease.backOut).wait(1).to({regX:112.1,scaleX:1.0493,scaleY:1.0493,x:145.1,y:55.1},12,cjs.Ease.backOut).wait(1));

	// Layer_6
	this.instance_3 = new lib.Symbol6();
	this.instance_3.setTransform(146,55,1.119,1.119,0,0,0,124,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:145.65,y:54.95},14,cjs.Ease.backOut).wait(1).to({x:146},0).to({scaleX:1.119,scaleY:1.119,y:55},12,cjs.Ease.backOut).wait(1));

	// Symbol_1
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(160.7,55.3,1,1,0,0,0,65.7,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(129,-22.4,178.10000000000002,212);
// library properties:
lib.properties = {
	id: '74D450ADB528F74DBC02886E394D3499',
	width: 295,
	height: 110,
	fps: 30,
	color: "#000000",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['74D450ADB528F74DBC02886E394D3499'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;