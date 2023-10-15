import { Provider } from "react-redux";
import { createStore } from "redux";
import { cartReducer } from "./CartReducer";

const store = createStore(cartReducer);

export default store;
<Provider store={store}>
        <div>App Component</div>
        // child components of App/ other logic
</Provider>

// rest of the code ...