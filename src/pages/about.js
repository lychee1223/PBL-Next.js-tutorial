import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

import {
    Box,
    VStack,
    HStack,
    Heading,
    Text,
    Image,
    SimpleGrid
} from "@chakra-ui/react"
import { FaUnity, FaPython, } from "react-icons/fa"
import { SiUnrealengine, SiCplusplus, } from "react-icons/si"

import Theme from "@/components/Theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {

    // スキルリスト
    const SKILL_LIST = [
        {
            header: "Unity",
            icon: <FaUnity size="90%" />,
            body: "UniTaskを用いた非同期処理の実装, PUNを用いた簡単なマルチゲームのチーム開発経験あり"
        },
        {
            header: "UE4 / UE5",
            icon: <SiUnrealengine size="80%" />,
            body: "GASを用いたアクションゲームのチーム開発経験あり. 現在C++での開発を勉強中"
        },
        {
            header: "C++",
            icon: <SiCplusplus size="50%" />,
            body: "CUIオセロゲームを開発しました"
        },
        {
            header: "Python",
            icon: <FaPython size="50%" />,
            body: "PyTorchを用いた自然言語処理マスターする予定"
        },
    ];

    return (
        <>
            <Head>
                <title>三毛猫のアンドロン</title>
                <meta name="description" content="my portfolio site" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`${styles.main} ${inter.className}`}>
                {/* ヘッダ */}
                <Header defaultIndex={1} />

                {/* コンテンツ */}
                <Box className={styles.content}>
                    {/* プロフィール */}
                    <Box h="500px" bg={Theme.color.backgroundA}>
                        <HStack h="100%" spacing={20} >
                            <Image
                                src="/img/background.png"
                                w="20%"
                                ml="auto"
                            />
                            <VStack h="100%" w="50%" spacing={1} justify="center">
                                <Heading size="3xl" mb={5} mr="auto" color={Theme.color.main}>川田 拓朗</Heading>
                                <Text mr="auto">所　　属：法政大学 理工学部 応用情報工学科</Text>
                                <Text mr="auto">　　　　　知的情報処理研究室(彌冨研究室)</Text>
                                <Text mr="auto">サークル：計算技術研究会</Text>
                            </VStack>
                        </HStack>
                    </Box>

                    {/* スキル */}
                    <Box p={4} bg={Theme.color.backgroundB}>
                        <Heading size="4xl" mb={4} align="center" color={Theme.color.main}>SKILL</Heading>
                        <SimpleGrid spacing="15px" minChildWidth="250px">
                            {SKILL_LIST.map((skill, index) => (
                                <Box p={2} aspectRatio={1.5} bg={Theme.color.backgroundC} key={index}>
                                    <HStack h="100%">
                                        {skill.icon}
                                        <VStack mb="auto">
                                            <Heading mr="auto" color={Theme.color.main}>{skill.header}</Heading>
                                            <Text>{skill.body}</Text>
                                        </VStack>
                                    </HStack>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Box>
                {/* フッター */}
                <Footer />
            </main>
        </>
    )
}