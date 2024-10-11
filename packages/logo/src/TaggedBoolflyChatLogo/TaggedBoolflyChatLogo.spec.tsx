import ReactDOM from 'react-dom';

import TaggedBoolflyChatLogo from './TaggedBoolflyChatLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaggedBoolflyChatLogo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
