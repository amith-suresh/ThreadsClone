
import store from './store'; 

import { Provider } from 'react-redux'; 

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;