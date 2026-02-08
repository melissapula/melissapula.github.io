export function defineCustomBlocks(Blockly) {
    Blockly.Blocks['print_message'] = {
        init() {
            this.appendValueInput('MESSAGE').setCheck('String').appendField('print');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip('Print a message to the console');
        }
    };

    Blockly.Blocks['wait_seconds'] = {
        init() {
            this.appendValueInput('SECONDS').setCheck('Number').appendField('wait');
            this.appendDummyInput().appendField('seconds');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(120);
            this.setTooltip('Wait for a number of seconds');
        }
    };

    Blockly.Blocks['random_number'] = {
        init() {
            this.appendValueInput('MIN').setCheck('Number').appendField('random from');
            this.appendValueInput('MAX').setCheck('Number').appendField('to');
            this.setOutput(true, 'Number');
            this.setColour(230);
            this.setTooltip('Generate a random number between min and max');
        }
    };

    Blockly.Blocks['set_variable'] = {
        init() {
            this.appendValueInput('VALUE')
                .appendField('set')
                .appendField(new Blockly.FieldTextInput('myVar'), 'VAR')
                .appendField('to');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(330);
            this.setTooltip('Set a variable to a value');
        }
    };

    Blockly.Blocks['repeat_count'] = {
        init() {
            this.appendValueInput('TIMES').setCheck('Number').appendField('repeat');
            this.appendDummyInput().appendField('times');
            this.appendStatementInput('DO').appendField('do');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(120);
            this.setTooltip('Repeat blocks a number of times');
        }
    };

    const generator = Blockly.JavaScript;
    if (generator.forBlock) {
        generator.forBlock['print_message'] = function (block, gen) {
            const msg = gen.valueToCode(block, 'MESSAGE', 0) || "''";
            return `console.log(${msg});\n`;
        };
        generator.forBlock['wait_seconds'] = function (block, gen) {
            const secs = gen.valueToCode(block, 'SECONDS', 0) || '1';
            return `await new Promise(r => setTimeout(r, ${secs} * 1000));\n`;
        };
        generator.forBlock['random_number'] = function (block, gen) {
            const min = gen.valueToCode(block, 'MIN', 0) || '0';
            const max = gen.valueToCode(block, 'MAX', 0) || '100';
            return [`Math.floor(Math.random() * (${max} - ${min} + 1)) + ${min}`, 0];
        };
        generator.forBlock['set_variable'] = function (block, gen) {
            const varName = block.getFieldValue('VAR');
            const value = gen.valueToCode(block, 'VALUE', 0) || '0';
            return `let ${varName} = ${value};\n`;
        };
        generator.forBlock['repeat_count'] = function (block, gen) {
            const times = gen.valueToCode(block, 'TIMES', 0) || '10';
            const branch = gen.statementToCode(block, 'DO');
            return `for (let i = 0; i < ${times}; i++) {\n${branch}}\n`;
        };
    }
}
