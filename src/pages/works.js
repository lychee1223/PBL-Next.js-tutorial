import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

import {
    Box,
    HStack,
    Heading,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    SimpleGrid,
    Tag,
    TagLabel,
    CloseButton,
    VStack,
} from "@chakra-ui/react"
import React, { useState } from "react";

import Theme from "@/components/Theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import SlideShow from "@/components/SlideShow";

export default function Home() {
    // 作品のタグ
    const TAG_MAP = {
        unity: {
            name: "Unity",
            color: "red"
        },
        ue: {
            name: "UE",
            color: "messenger"
        },
        ai: {
            name: "AI",
            color: "green"
        },
    };

    // 作品リスト
    const WORK_LIST = [
        {
            tag: TAG_MAP.unity,
            date: "2022/07/24",
            imageList: [
                "/img/works/PoA/PoA_image1.png",
                "/img/works/PoA/PoA_image2.png",
                "/img/works/PoA/PoA_image3.png",
            ],
            title: "Plague of Athens",
            body: (
                <Box>
                    <VStack>
                    <Text>古代ギリシアが舞台の脱出アドベンチャーです</Text>
                    <Text>紀元前431年、疫病が蔓延したアテナイで女神アテナの祝福を求めパルテノン神殿を目指しましょう！</Text>
                    <br/>
                    <Text>ダウンロード：coming soon</Text>
                    </VStack>
                </Box>
            )
        },
        {
            tag: TAG_MAP.ue,
            date: "2022/07/24",
            imageList: [
                "/img/works/coming_soon.png",
            ],
            title: "3Dアクション",
            body: (
                <Box>
                    開発中
                </Box>
            )
        },
        {
            tag: TAG_MAP.ue,
            date: "2022/07/24",
            imageList: [
                "/img/works/coming_soon.png",
            ],
            title: "ミニゲーム",
            body: (
                <Box>
                    開発予定
                </Box>
            )
        },
        {
            tag: TAG_MAP.ai,
            date: "2022/07/24",
            imageList: [
                "/img/works/coming_soon.png",
            ],
            title: "NLPな何か",
            body: (
                <Box>
                    開発予定
                </Box>
            )
        },
    ];

    // 現在適用しているフィルタ
    const [currentFilterTag, setCurrentFilterTag] = useState(0);
    const handleChangeFilter = (filterID) => {
        setCurrentFilterTag(filterID);
    };

    // 現在表示している作品詳細ページ(-1は作品一覧ページ)
    const [currentWorkPage, setCurrentWorkPage] = useState(-1);
    const handleChangePage = (pageID) => {
        setCurrentWorkPage(pageID);
    };

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
                <Header defaultIndex={2} />

                {/* コンテンツ */}
                {/* 作品パネル一覧 */}
                {
                    currentWorkPage == -1 &&

                    <Box className={styles.content}>
                        <Tabs colorScheme={Theme.color.colorScheme} defaultIndex={currentFilterTag}>
                            {/* フィルタ選択タブ */}
                            <TabList bg={Theme.color.backgroundA}>
                                <Tab onClick={() => handleChangeFilter(0)}>ALL</Tab>
                                {Object.entries(TAG_MAP).map(([key, value], index) => (
                                    <Tab onClick={() => handleChangeFilter(index + 1)} key={index}>
                                        {value.name}
                                    </Tab>
                                ))}
                            </TabList>

                            {/* 作品一覧 */}
                            <TabPanels bg={Theme.color.backgroundB}>
                                {/* ALL */}
                                <TabPanel>
                                    <SimpleGrid spacing="15px" minChildWidth="250px">
                                        {WORK_LIST.map((element, index) => (
                                            <Box onClick={() => handleChangePage(index)} key={index}>
                                                <WorkCard
                                                    thumbnail={element.imageList[0]}
                                                    tag={element.tag}
                                                    title={element.title}
                                                    body={element.body}
                                                />
                                            </Box>
                                        ))}

                                        {/* 空の要素 */}
                                        <Box aspectRatio={1}></Box>
                                        <Box aspectRatio={1}></Box>
                                        <Box aspectRatio={1}></Box>
                                        <Box aspectRatio={1}></Box>
                                    </SimpleGrid>
                                </TabPanel>

                                {/* 各フィルタをかけた際の一覧 */}
                                {Object.entries(TAG_MAP).map(([key, value], index) => (
                                    <TabPanel key={index}>
                                        <SimpleGrid spacing="15px" minChildWidth="250px">
                                            {WORK_LIST.map((element, index) => (
                                                (() => {
                                                    // フィルタを適用
                                                    if (element.tag.name == value.name) {
                                                        return (
                                                            <Box onClick={() => handleChangePage(index)}>
                                                                <WorkCard
                                                                    thumbnail={element.imageList[0]}
                                                                    tag={element.tag}
                                                                    title={element.title}
                                                                    body={element.body}
                                                                />
                                                            </Box>
                                                        )
                                                    }
                                                })()
                                            ))}

                                            {/* 空の要素 */}
                                            <Box aspectRatio={1}></Box>
                                            <Box aspectRatio={1}></Box>
                                            <Box aspectRatio={1}></Box>
                                            <Box aspectRatio={1}></Box>
                                        </SimpleGrid>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </Tabs>
                    </Box>
                }

                {/* 作品紹介ページ */}
                {
                    currentWorkPage != -1 &&

                    <Box className={styles.content}>
                        <Box p={2} bg={Theme.color.backgroundA}>
                            <HStack w="100%">
                                <Tag
                                    borderRadius="full"
                                    variant="solid"
                                    colorScheme={WORK_LIST[currentWorkPage].tag.color}
                                    mr="auto" mb="auto"
                                >
                                    <TagLabel>{WORK_LIST[currentWorkPage].tag.name}</TagLabel>
                                </Tag>
                                <Heading color={Theme.color.main}>{WORK_LIST[currentWorkPage].title}</Heading>
                                <CloseButton ml="auto" mb="auto" onClick={() => handleChangePage(-1)} />
                            </HStack>
                        </Box>
                        <Box h="400px" p={4} bg={Theme.color.backgroundB}>
                            <SlideShow imageList={WORK_LIST[currentWorkPage].imageList} />
                        </Box>
                        <Box h="500px" p={4} bg={Theme.color.backgroundA}>
                            {WORK_LIST[currentWorkPage].body}
                        </Box>
                    </Box>
                }
                {/* フッター */}
                <Footer />
            </main>
        </>
    )
}
