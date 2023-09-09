import '../styles/globals.css';
import Layout from '@/componets/Layout/Layout';
import TodoProvider from '@/componets/Store/TodoProvider';





function MyApp ({Component, pageProps}) {
    return (
        <Layout>
            <TodoProvider>
                <Component {...pageProps} />
            </TodoProvider>
        </Layout>
    )
};

export default MyApp;