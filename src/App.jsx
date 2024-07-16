import { Provider } from "./context/Provider";
import { Layout } from "./ui/Layout/Layout";

import { Main } from "./ui/Main/Main";

function App() {
  return (
    <Provider>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  );
}

export default App;
