import type {Metadata} from 'next'
import './globals.css'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cookie from "@/components/cookie";

export const metadata: Metadata = {
    title: 'Чай оптом от компании «Лотос» в Москве',
    description: 'Чайная компания &quot;Лотос&quot; предлагает только элитные сорта цейлонского чая оптом высокого качества. Оптовая торговля чаем различных видов и сортов на выгодных условиях.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body>
        <Header/>
        {children}
        <Cookie/>
        <Footer/>
        </body>
        </html>
    )
}
