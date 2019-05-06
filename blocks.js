        <script>
            Blockly.Blocks['image'] = {
    init: function() {
        this.appendValueInput("Image")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Image");
        this.appendValueInput("Name")
            .setCheck("String")
            .appendField("Name:");
        this.appendValueInput("Country")
            .setCheck(null)
            .appendField("Country");
        this.setOutput(true, null);
        this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
    };

    Blockly.JavaScript['image'] = function(block) {
  var value_image = Blockly.JavaScript.valueToCode(block, 'Image', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'Name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_country = Blockly.JavaScript.valueToCode(block, 'Country', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Your answers are correct!';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

    </script>

    <script>
          
          Blockly.Blocks['north_america'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("north-america.png", 100, 100, "*"));
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['north_america'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['asia'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("asia.png", 100, 100, "*"));
    this.setOutput(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['asia'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['austrialia'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("austrialia.png", 100, 100, "*"));
    this.setOutput(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['austrialia'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['africa'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("africa.png", 100, 100, "*"));
    this.setOutput(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['africa'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Africa text

Blockly.Blocks['africa_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Africa");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['africa_text'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Asia text


Blockly.Blocks['asia_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Asia");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['asia_text'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//north america text


Blockly.Blocks['northamerica_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("North America");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['northamerica_text'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'North America is correct!';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//austriali text

Blockly.Blocks['austrialia_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Austrialia");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['austrialia_text'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//africa countries

//Nigeria

Blockly.Blocks['nigeria'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Nigeria");
        this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['nigeria'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



//Asia countries

//Japan

Blockly.Blocks['japan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Japan");
        this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['japan'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];;
};


//countries in austrialia

//fiji

Blockly.Blocks['fiji'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fiji");
        this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['fiji'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//counties in north america

//Mexico

Blockly.Blocks['mexico'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mexico");
        this.setOutput(true, null);

    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['mexico'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
          </script>