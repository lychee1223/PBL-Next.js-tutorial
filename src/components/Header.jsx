import styles from '@/styles/Home.module.css'
import Link from 'next/link';

import {
    Heading,
    Box,

    Tabs,
    TabList,
    Tab,
} from '@chakra-ui/react'

function Header() {
    return (
        <div className={styles.header}>
            <Box bg="gray.800" color="white" p={4} id="head">

                {/* サイト名 */}
                <div className={styles.siteName}>
                    <Heading size="lg" colorScheme="whiteAlpha">
                        <Link href="../">
                            三毛猫のアンドロン
                        </Link>
                    </Heading>
                </div>


                {/* グローバルナビ */}
                <div className={styles.navi}>
                    <Tabs variant="soft-rounded" colorScheme="green" defaultIndex={0}>
                        <TabList>
                            <Tab>
                                <Link href="/">
                                    Top
                                </Link>
                            </Tab>
                            <Tab>
                                <Link href="/profile">
                                    Profile
                                </Link>
                            </Tab>
                            <Tab>
                                <Link href="/works">
                                    Works
                                </Link>
                            </Tab>
                            <Tab>
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </Tab>
                        </TabList>
                    </Tabs>


                </div>

                {/* ハンバーガーメニュー */}
            </Box>
        </div>
    )
}

export default Header;