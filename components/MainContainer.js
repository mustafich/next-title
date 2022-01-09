import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords,title="Главнаяяя страница"}) => {
    return (
        <>
            <Head>
                <meta keywords={"ulbi tv, nextjs" + keywords}></meta>
                <title>{title}</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                   
                `}
            </style>
        </>
    );
};

export default MainContainer;
