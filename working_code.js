<!DOCTYPE HTML>
<html>
  <head>
    <title>Picture Puzzle</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="../google-blockly-82871b3/blockly_compressed.js"></script>
    <script src="../google-blockly-82871b3/blocks_compressed.js"></script>
    <script src="../google-blockly-82871b3/msg/js/en.js"></script>
    <script src="../google-blockly-82871b3/javascript_compressed.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script> 
    var timeleft = 60;
var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 60 - timeleft;
  timeleft -= 1;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);
    </script> 
    
  </head>
  <body>
    <div style="background: url(bg.jpg);background-position: center; background-repeat: no-repeat; background-size: cover;">
    <h1>Picture Puzzle</h1>
    <h2>Match each of the images with their names and country</h2>
    <progress value="0" max="60" id="progressBar"></progress>
    <button onclick="showCode()">Check Answer</button>
    <div id="blockly-div" style="height: 480px; width: 1200px;"></div>
    <xml xmlns="http://www.w3.org/1999/xhtml" id="workspaceBlocks" style="display:none">
        <block type="asia_txt"></block>
        <block type="africa_txt"></block>
        <block type="northamerica_txt"></block>
        <block type="austrialia_txt"></block>
        <block type="africa_img"></block>
        <block type="asia_img"></block>
        <block type="northamerica_img"></block>
        <block type="austrialia_img"></block>
        <block type="africa"></block>
        <block type="austrialia"></block>
        <block type="asia"></block>
        <block type="northamerica"></block>

    </xml>
    <button onclick="showCode()">show JavaScript</button>
    </div>
  </body>
  <script>
    /* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	readOnly : true, 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : true, 
	oneBasedIndex : true
};

/* Inject your workspace */ 
var workspace = Blockly.inject('blockly-div', {
  media: '../../../media/',
  toolbox: document.getElementById('toolbox'),
  toolboxPosition: 'end',
  horizontalLayout: true,
  scrollbars: false
});

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

//asia block
Blockly.Blocks['asia_txt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Asia");
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.moveBy(300, 100);
  },
};
Blockly.JavaScript['asia_txt'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Asia';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//africa block
Blockly.Blocks['africa_txt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Africa");
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.moveBy(500, 220);
  }
};
Blockly.JavaScript['africa_txt'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Africa';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//austrialia
Blockly.Blocks['austrialia_txt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Austrialia");
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.moveBy(1000, 400);
  }
};
Blockly.JavaScript['austrialia_txt'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Austrialia';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//North America
Blockly.Blocks['northamerica_txt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("North America");
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.moveBy(800, 200);
  }
};
Blockly.JavaScript['northamerica_txt'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'North America';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//africa image
Blockly.Blocks['africa_img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./africa.png", 100, 100, "*"));
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.moveBy(800, 300);
  }
};
Blockly.JavaScript['africa_img'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'africa img';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//asia image
Blockly.Blocks['asia_img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./asia.png", 100, 100, "*"));
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.moveBy(50, 250);
  }
};
Blockly.JavaScript['asia_img'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'asia img';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//austrialia image
Blockly.Blocks['austrialia_img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./austrialia.png", 100, 100, "*"));
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.moveBy(100, 100);
  }
};
Blockly.JavaScript['austrialia_img'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'austrialia img';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//north america image
Blockly.Blocks['northamerica_img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("./north-america.png", 100, 100, "*"));
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.moveBy(900, 60);
  }
};
Blockly.JavaScript['northamerica_img'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'North America img';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//input
Blockly.Blocks['africa'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("africa");
    this.appendValueInput("image")
    .setCheck(null)
    .appendField("image");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
    //run javascript
    Blockly.JavaScript['africa'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_image = Blockly.JavaScript.valueToCode(block, 'image', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + value_image
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['asia'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("asia");
    this.appendValueInput("image")
    .setCheck(null)
    .appendField("image");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
    //run javascript
    Blockly.JavaScript['asia'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_image = Blockly.JavaScript.valueToCode(block, 'image', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_name + value_image
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['northamerica'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("northamerica");
    this.appendValueInput("image")
    .setCheck(null)
    .appendField("image");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
    //run javascript
    Blockly.JavaScript['northamerica'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_image = Blockly.JavaScript.valueToCode(block, 'image', Blockly.JavaScript.ORDER_ATOMIC);  // TODO: Assemble JavaScript into code variable.
  var code = value_name + value_image
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['austrialia'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("austrialia");
    this.appendValueInput("image")
    .setCheck(null)
    .appendField("image");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
    //run javascript
    Blockly.JavaScript['austrialia'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_image = Blockly.JavaScript.valueToCode(block, 'image', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + value_image
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

function loadWorkspace(button) {
    let workspace = Blockly.getMainWorkspace();
    workspace.clear();
    if (button.blocklyXml) {
      Blockly.Xml.domToWorkspace(button.blocklyXml, workspace);
    }
  }

  function save(button) {
    let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    button.blocklyXml = xml;
  }
  
  </script>

<script>

  
  // Generate JavaScript code and display it.
  function showCode() {
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    alert(code);
  }

  // Generate JavaScript code and run it.
  function runCode() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
      eval(code);
    } catch (e) {
      alert(e);
    }
  }
</script>

</html>
