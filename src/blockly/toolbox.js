export const toolbox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'Logic',
            colour: '#5C81A6',
            contents: [
                { kind: 'block', type: 'controls_if' },
                { kind: 'block', type: 'controls_ifelse' },
                { kind: 'block', type: 'logic_compare' },
                { kind: 'block', type: 'logic_operation' },
                { kind: 'block', type: 'logic_negate' },
                { kind: 'block', type: 'logic_boolean' }
            ]
        },
        {
            kind: 'category',
            name: 'Loops',
            colour: '#5CA65C',
            contents: [
                { kind: 'block', type: 'repeat_count' },
                { kind: 'block', type: 'controls_repeat_ext' },
                { kind: 'block', type: 'controls_whileUntil' }
            ]
        },
        {
            kind: 'category',
            name: 'Math',
            colour: '#5C68A6',
            contents: [
                { kind: 'block', type: 'math_number' },
                { kind: 'block', type: 'math_arithmetic' },
                { kind: 'block', type: 'random_number' },
                { kind: 'block', type: 'math_modulo' }
            ]
        },
        {
            kind: 'category',
            name: 'Text',
            colour: '#5CA68D',
            contents: [
                { kind: 'block', type: 'text' },
                { kind: 'block', type: 'text_join' },
                { kind: 'block', type: 'text_length' }
            ]
        },
        {
            kind: 'category',
            name: 'Actions',
            colour: '#A6745C',
            contents: [
                { kind: 'block', type: 'print_message' },
                { kind: 'block', type: 'wait_seconds' },
                { kind: 'block', type: 'set_variable' }
            ]
        }
    ]
};

export const starterBlocksXml = `
<xml>
  <block type="print_message" x="30" y="30">
    <value name="MESSAGE">
      <block type="text">
        <field name="TEXT">Hello from Blockly!</field>
      </block>
    </value>
    <next>
      <block type="repeat_count">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">3</field>
          </block>
        </value>
        <statement name="DO">
          <block type="print_message">
            <value name="MESSAGE">
              <block type="text">
                <field name="TEXT">Looping...</field>
              </block>
            </value>
          </block>
        </statement>
      </block>
    </next>
  </block>
</xml>
`;
