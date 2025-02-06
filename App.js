import StackNavigator from './src/navigation/Stack';
import { NavigationContainer } from '@react-navigation/native';
import Blog from './src/pages/readBlog/Blog';

const App = () => {
  return (
    <>
      {/* <Blog /> */}
      <StackNavigator />
    {/* // <Home /> */}
    </>

  );
};

export default App;