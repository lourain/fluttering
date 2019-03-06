import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'


function configStore(init){
  return createStore(rootReducer,init,applyMiddleware(thunk))
}
// export default createStore(rootReducer,applyMiddleware(thunk))
export default configStore