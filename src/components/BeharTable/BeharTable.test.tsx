import React from 'react';
import * as ReactDOM from 'react-dom';
import BeharTable from './BeharTable';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const args = {
      rows: [{
        cells: [
          { content: 'world', key: 'world' },
          'Frozen yoghurt',
          159,
        ],
      },
      ],
      headers: [
        { cell: 'name', key: 'name' },
        { cell: 'calories', key: 'calories' },
        { cell: 'hello', key: 'hello' },
      ]
    }
    ReactDOM.render(
      <BeharTable {...args} />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
