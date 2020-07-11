import  {createWrapper} from 'next-redux-wrapper';
import initStore from '../store';
import 'bootstrap/dist/css/bootstrap.css';


function MyApp({ Component, pageProps}) {
    return (
            <Component {...pageProps} />
    );
}

export const wrapper = createWrapper(initStore, {debug: true});


export default wrapper.withRedux(MyApp);