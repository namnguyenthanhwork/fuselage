import ReactDOM from 'react-dom';

import BoolflyChatLogo from './BoolflyChatLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoolflyChatLogo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
