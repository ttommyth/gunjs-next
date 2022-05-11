import { Header, Layout } from "@components/index"

export const CommonTemplate = (props: React.PropsWithChildren<{}>) => {
    return <Layout>
        <Header />
        <div className="container mx-auto min-h-screen pt-16">
            {props.children}
        </div>
    </Layout>
}