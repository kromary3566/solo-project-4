(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"solo_project_4_atlas_1", frames: [[0,64,208,62],[0,0,248,62],[0,128,183,53]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["solo_project_4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["solo_project_4_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["solo_project_4_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-52,-15.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-15.5,104,31);


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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-62,-15.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-15.5,124,31);


(lib.here_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-46.25,-13.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF33CC").ss(2,1,1).p("ApGisISNAAIAAFZIyNAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F161CD").s().p("ApFCtIAAlZISLAAIAAFZg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FB59D2").ss(2,1,1).p("ApGisISNAAIAAFZIyNAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F885DB").s().p("ApFCtIAAlZISLAAIAAFZg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E415B0").ss(2,1,1).p("ApGisISNAAIAAFZIyNAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F142C5").s().p("ApFCtIAAlZISLAAIAAFZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-18.2,118.5,36.5);


// stage content:
(lib.solo_project_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_1.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('http://www.adobe.com', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// button
	this.button_1 = new lib.here_btn();
	this.button_1.name = "button_1";
	this.button_1.setTransform(339.75,30.3);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.here_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(59).to({_off:false},0).wait(1));

	// jewelry
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(545,45.45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({x:173.55},20).wait(1));

	// first_spark
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(555,15.55);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:147.55},20).wait(11));

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap3V9QiPgehThhQhThhgJiSQgFhbAXhmIAUhFIACgFIALghIAEgJQBWjpC3jSIBxh5IBLhGIAegaIAVgTIC7iJQD+iqEIg2QCaggB+ATIAiAGQCPAfBTBhQBTBhAICRQAICNg+CoQiEFjlkExQljExlyBMQhhAThVAAQhGAAg+gNgAAnz8QgigkgbADQAhgLAEgyIgCgPIgCggIAdAlIAHAIQAoAoAlgIQgkALgOAsQgHAYABAVQgMgSgRgSg");
	this.shape.setTransform(495.6922,29.1439,0.1594,0.1649);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFF0F0").s().p("AqHOXQidgohfhuQhehvgQihQgMh+AliPQgXBmAFBbQAICSBTBhQBTBhCPAfQCLAdCvgkQFzhMFjkxQFkkwCEliQA+iogIiOQgJiShThhQhThhiPgeIghgGQA1AFAxAMQCdAoBeBvQBfBuAQChQAPCcg8C2Qg9C1h+CzQiCC6i3CdQi3CdjMBlQjEBhi9AgQhUAOhNAAQhfAAhUgWgAnQogIAZgVIgVASIgeAaIAagXg");
	this.shape_1.setTransform(496.5375,39.2576,0.1594,0.1649);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECF8FE").s().p("AAZGuIgFhEQgVgdgagMQg0gXgUBZIgEAUIg/gPIjVjnIjTjjQgGgGgCgMIAXhJIAvgrQArgugNgWIAJgLQFmiSAggGQAMgBApAGIAnAGIACAPQgEAygiALQAcgDAhAlQARARAMATQgBgWAHgYQAOgsAkgKQglAHgogoIgHgIIA+AMIBWASIGtHNIADAFQgaADghAPIAAAuQAFAsAUARIgJATIjfBeQjjBggZANQgJAEgVAAIgagCg");
	this.shape_2.setTransform(496.0251,13.2201,0.1594,0.1649);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3E4E5").s().p("ArkYRQjEg8h8iRQh8iQgdjMQgdjEA/jgQA+jgCQjZQAwhJA3hDIAIgKQBpiACAhxQBuiEBLiPQAihBAUg0QgcgbguhJIhAhqIAAAAQgYgfgVg7QgfhngLgZQgOglgJhRQgJhQAHgUIAWg1QAVgkAmgHQApgGAXAPQANAIAYAiIABABQANAWgqAuIgwAqIgXBKIgCAHIDXDuIAGABIDWDnIA+APIAFgUQAUhZAzAXQAaAMAWAdIAEBEQAqAEAOgHQAagMDjhgIDeheIAKgTQgVgRgEgsIAAguQAhgPAagDQA8gGAUA+QAPAtgIA3IgcArQgYAuAWAPQAaATBwBAQA0AYAuAfIAEACIgBAAQBFAwA3A/QB8CRAdDLQAdDDg+DhQg/DgiQDZQiVDhjYC5QjYC5j1BxQjsBtjnAbQhKAJhFAAQiVAAiBgogAFTmbQkHA2j+CqIi7CLIgZAVIgaAXIhMBFIhxB5Qi3DShWDpIgDAKIgMAgIgBAFIgUBFQgmCPANB+QAQChBeBuQBfBvCdAoQCXAnC9ggQC9ggDEhhQDMhkC3idQC3idCCi6QB+i0A9i1QA8i2gPicQgQighfhvQhehuidgoQgxgNg1gFQgwgHgzAAQhWAAhgAUgAkynlIAAAAIAAgBIAAABgAA83FIgcglIACAgIgmgGQgNgPgHgRQgQgqAogWQAqgWAsAiQAWARAOAWIAABEIg+gMg");
	this.shape_3.setTransform(495.3636,30.7387,0.1594,0.1649);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFF0F0").s().p("AhmCXQgZgGgPgSQgPgTgDgaQgCgTAFgVQgDAOABANQABAYANAPIABABQANAQAXAFQAWAFAcgGQA6gMA5gyQA4gzAWg5QAJgcgBgXQgBgYgNgQQgOgQgWgFIgGgBQAJAAAHACQAZAHAQASQAPATACAaQADAagKAeQgKAdgUAdQgVAfgdAaQgdAaggAQQgfAQgeAGQgNACgMAAQgQAAgNgEg");
	this.shape_4.setTransform(478.4964,39.2587);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhkDkQgWgFgOgQIgBgBQgMgQgBgXQgBgNADgPIAEgQQAQgtAdgjIAeggIAEgDIAFgEIAdgWQAogcAqgJQAZgFAUADIAFABQAXAFANAQQANAQACAXQABAYgKAbQgVA7g5AyQg4Ayg7ANQgPADgOAAQgLAAgKgCgAAGjVQgFgGgDAAIAAAAQAEgCAAgIQAKAFAGAAIABAAIABAAQgGACgCAHQgBABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape_5.setTransform(477.6423,29.5386);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3E4E5").s().p("Ah1D/QgfgKgUgXQgUgYgFgiQgEggAKglQAKglAXgkQAHgMAJgKIABgCQARgVAVgTQARgVAMgYIAJgTQgFgFgHgMIgKgRQgEgFgEgKIgGgVQgDgGgBgOQgBgNABgDIADgJQADgGAHgBQAGgBAEACIAGAHIAAABQACADgHAIIgHAHIgEAMIABADIBEBMIAKACIABgDQADgPAHAEQAEACAEAFIAAALQAHABACgCIApgRIAjgQIACgDQgEgDAAgHIAAgIQAFgCAEgBQAKgBADALQACAHgBAJIgFAHQgDAIADACIAWAOQAIAEAIAFIAAAAQALAIAJALQAUAYAEAhQAFAfgKAlQgKAlgXAkQgYAlgiAfQgjAegnATQgkASglAEQgMACgMAAQgXAAgUgHgAA2hEQgqAJgoAcIgdAXIgFAEIgEADIgeAfQgdAjgQAtIgEAQQgFAWACASQACAbAPASQAPASAZAHQAYAGAfgFQAegFAegQQAhgRAdgaQAdgZAVgfQAUgeAJgeQAKgegCgZQgDgagPgSQgPgSgZgHQgIgCgIgBIgQgBQgOAAgPADgAAKj0IgFgGQgDAFgCAAIAAAAIgDgGQgDgHAGgDQARAFACADQgFAJgDAAIgBAAg");
	this.shape_6.setTransform(477.3135,30.8083);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ECF8FE").s().p("AAEBJIgBgLQgDgFgDgCQgJgEgDAPIgBADIgKgCIhDhLIgCgDIAEgMIAIgHQAGgIgCgDQA7gaAFgBIAJABIAAAAQACgBADgEIAEAGIAKACIAOADIBEBLIABABQgFABgFACIAAAIQABAHADADIgBADIgkAQIgoARIgEABIgFAAgAADgwQAEACABgEQADgHAFgCIAAAAIgCAAQgFAAgJgFQgBAIgEACIgBAAIABAAQAEAAAEAGg");
	this.shape_7.setTransform(477.975,13.045);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECF8FE").s().p("AAEBJIgBgLQgDgFgDgCQgJgEgDAPIgBADIgKgCIhDhLIgCgDIAEgMIAIgHQAGgIgCgDQA7gaAFgBIAJABIAAAAQACgBADgEIAEAGIAKACIAOADIBEBLIABABQgFABgFACIAAAIQABAHADADIgBADIgkAQIgoARIgEABIgFAAgAADgwQAEACABgEQADgHAFgCIgBAAIgBAAQgFAAgJgFQgBAIgEACIgBAAIABAAQAEAAAEAGg");
	this.shape_8.setTransform(459.875,13.045);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECF8FE").s().p("AAEBJIgBgLQgDgFgDgCQgJgEgDAPIgBADIgKgCIhDhLIgCgDIAEgMIAIgHQAGgIgCgDQA7gaAFgBIAJABIAAAAQACgBADgEIAEAGIAKACIAOADIBEBLIABABQgFABgFACIAAAIQABAHADADIgBADIgkAQIgoARIgEABIgFAAgAADgwQAEACABgEQADgHAFgCIAAAAIgBAAQgGAAgJgFQgBAIgEACIgBAAIABAAQAEAAAEAGg");
	this.shape_9.setTransform(423.725,13.045);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ECF8FE").s().p("AAEBJIgBgLQgDgFgDgCQgJgEgDAPIgBADIgKgCIhDhLIgCgDIAEgMIAIgHQAGgIgCgDQA7gaAFgBIAJABIAAAAQACgBADgEIAEAGIAKACIAOADIBEBLIABABQgFABgFACIAAAIQABAHADADIgBADIgkAQIgoARIgEABIgFAAgAADgwQAEACABgEQADgHAFgCIgBAAIAAAAQgGAAgJgFQgBAIgEACIgBAAIABAAQAEAAAEAGg");
	this.shape_10.setTransform(369.475,13.045);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhkDkQgWgFgOgQIgBgBQgMgQgBgXQgBgNADgPIAEgQQAQgtAdgjIAeggIAFgEIAEgDIAdgWQAogcAqgJQAZgFAUADIAFABQAXAFANAQQANAQACAXQABAYgKAbQgVA7g5AyQg4Ayg7ANQgPADgOAAQgLAAgKgCgAAGjVQgFgGgDAAIAAAAQAEgCAAgIQAKAFAGAAIABAAIABAAQgGACgCAHQgBABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape_11.setTransform(116.0423,29.5386);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3,p:{x:495.3636}},{t:this.shape_2,p:{x:496.0251}},{t:this.shape_1,p:{x:496.5375}},{t:this.shape,p:{x:495.6922}}]},14).to({state:[{t:this.shape_7,p:{x:477.975}},{t:this.shape_6,p:{x:477.3135}},{t:this.shape_5,p:{x:477.6423}},{t:this.shape_4,p:{x:478.4964}}]},1).to({state:[{t:this.shape_8,p:{x:459.875}},{t:this.shape_6,p:{x:459.2135}},{t:this.shape_5,p:{x:459.5423}},{t:this.shape_4,p:{x:460.3964}}]},1).to({state:[{t:this.shape_8,p:{x:441.775}},{t:this.shape_6,p:{x:441.1135}},{t:this.shape_5,p:{x:441.4423}},{t:this.shape_4,p:{x:442.2964}}]},1).to({state:[{t:this.shape_5,p:{x:423.3923}},{t:this.shape_9,p:{x:423.725}},{t:this.shape_6,p:{x:423.0635}},{t:this.shape_4,p:{x:424.2464}}]},1).to({state:[{t:this.shape_9,p:{x:405.625}},{t:this.shape_5,p:{x:405.2923}},{t:this.shape_6,p:{x:404.9635}},{t:this.shape_4,p:{x:406.1464}}]},1).to({state:[{t:this.shape_6,p:{x:386.9135}},{t:this.shape_8,p:{x:387.575}},{t:this.shape_5,p:{x:387.2423}},{t:this.shape_4,p:{x:388.0964}}]},1).to({state:[{t:this.shape_6,p:{x:368.8135}},{t:this.shape_5,p:{x:369.1423}},{t:this.shape_10,p:{x:369.475}},{t:this.shape_4,p:{x:369.9964}}]},1).to({state:[{t:this.shape_6,p:{x:350.7135}},{t:this.shape_4,p:{x:351.8964}},{t:this.shape_5,p:{x:351.0423}},{t:this.shape_9,p:{x:351.375}}]},1).to({state:[{t:this.shape_6,p:{x:332.6635}},{t:this.shape_8,p:{x:333.325}},{t:this.shape_5,p:{x:332.9923}},{t:this.shape_4,p:{x:333.8464}}]},1).to({state:[{t:this.shape_8,p:{x:315.225}},{t:this.shape_6,p:{x:314.5635}},{t:this.shape_5,p:{x:314.8923}},{t:this.shape_4,p:{x:315.7464}}]},1).to({state:[{t:this.shape_9,p:{x:297.175}},{t:this.shape_6,p:{x:296.5135}},{t:this.shape_5,p:{x:296.8423}},{t:this.shape_4,p:{x:297.6964}}]},1).to({state:[{t:this.shape_7,p:{x:279.075}},{t:this.shape_6,p:{x:278.4135}},{t:this.shape_5,p:{x:278.7423}},{t:this.shape_4,p:{x:279.5964}}]},1).to({state:[{t:this.shape_10,p:{x:261.025}},{t:this.shape_6,p:{x:260.3635}},{t:this.shape_5,p:{x:260.6923}},{t:this.shape_4,p:{x:261.5464}}]},1).to({state:[{t:this.shape_9,p:{x:242.925}},{t:this.shape_5,p:{x:242.5923}},{t:this.shape_6,p:{x:242.2635}},{t:this.shape_4,p:{x:243.4464}}]},1).to({state:[{t:this.shape_6,p:{x:224.2135}},{t:this.shape_8,p:{x:224.875}},{t:this.shape_5,p:{x:224.5423}},{t:this.shape_4,p:{x:225.3964}}]},1).to({state:[{t:this.shape_6,p:{x:206.1135}},{t:this.shape_5,p:{x:206.4423}},{t:this.shape_8,p:{x:206.775}},{t:this.shape_4,p:{x:207.2964}}]},1).to({state:[{t:this.shape_5,p:{x:188.3923}},{t:this.shape_4,p:{x:189.2464}},{t:this.shape_6,p:{x:188.0635}},{t:this.shape_9,p:{x:188.725}}]},1).to({state:[{t:this.shape_6,p:{x:169.9635}},{t:this.shape_5,p:{x:170.2923}},{t:this.shape_7,p:{x:170.625}},{t:this.shape_4,p:{x:171.1464}}]},1).to({state:[{t:this.shape_8,p:{x:152.525}},{t:this.shape_6,p:{x:151.8635}},{t:this.shape_5,p:{x:152.1923}},{t:this.shape_4,p:{x:153.0464}}]},1).to({state:[{t:this.shape_9,p:{x:134.475}},{t:this.shape_6,p:{x:133.8135}},{t:this.shape_5,p:{x:134.1423}},{t:this.shape_4,p:{x:134.9964}}]},1).to({state:[{t:this.shape_6,p:{x:115.7135}},{t:this.shape_9,p:{x:116.375}},{t:this.shape_11},{t:this.shape_4,p:{x:116.8964}}]},1).to({state:[{t:this.shape_8,p:{x:98.325}},{t:this.shape_6,p:{x:97.6635}},{t:this.shape_5,p:{x:97.9923}},{t:this.shape_4,p:{x:98.8464}}]},1).to({state:[{t:this.shape_8,p:{x:80.225}},{t:this.shape_5,p:{x:79.8923}},{t:this.shape_6,p:{x:79.5635}},{t:this.shape_4,p:{x:80.7464}}]},1).to({state:[{t:this.shape_6,p:{x:61.4635}},{t:this.shape_10,p:{x:62.125}},{t:this.shape_5,p:{x:61.7923}},{t:this.shape_4,p:{x:62.6464}}]},1).to({state:[{t:this.shape_2,p:{x:44.0751}},{t:this.shape_3,p:{x:43.4136}},{t:this.shape_1,p:{x:44.5875}},{t:this.shape,p:{x:43.7422}}]},1).wait(21));

	// Background
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FF4A4A","#FF893C","#FFB620","#FFB923","#FFADF8"],[0,0.165,0.314,0.318,0.471],-303.5,0,303.5,0).s().p("EgvaAGMIAAsXMBe1AAAIAAMXg");
	this.shape_12.setTransform(264.85,32.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(195.4,23.1,421.6,49.199999999999996);
// library properties:
lib.properties = {
	id: '0E446C6065B0B4408A6C27C2DDB5192C',
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/solo_project_4_atlas_1.png", id:"solo_project_4_atlas_1"}
	],
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
an.compositions['0E446C6065B0B4408A6C27C2DDB5192C'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;