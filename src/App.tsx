import './App.css'
import {ApolloProvider} from "./components/apollo-provider";

function App() {
  return (
    <ApolloProvider urlBase={''}>
      <div>Hello World</div>
    </ApolloProvider>
  )
}

export default App
