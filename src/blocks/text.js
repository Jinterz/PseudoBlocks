/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  type: 'add_text',
  message0: 'Add text %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: '',
  helpUrl: '',
};


const read = {
  init: function() {
    this.appendStatementInput('Read')
    .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField('Read')
      .appendField(new Blockly.FieldTextInput('default'), 'x');
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(195);
  }
};

Blockly.common.defineBlocks({read: read});
                    

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  addText,
]);
