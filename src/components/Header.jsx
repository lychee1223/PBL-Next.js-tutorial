import Link from "next/link";

import {
    Box,
    HStack,
    Heading,
    Tabs,
    TabList,
    Tab,
    IconButton,
    Divider,
} from "@chakra-ui/react"
import { FaGithub, } from "react-icons/fa"
import { BiLogoGmail, } from "react-icons/bi"

import Theme from "@/components/Theme";
import MailToIcon from "./MailToIcon"

function Header(props) {
    const URL = {
        github: "https://github.com/lychee1223",
    }

    return (
        <Box w="100%" pos="fixed" zIndex="9999" bg={Theme.color.backgroundC}>
            <HStack p={4}>
                {/* サイト名 */}
                <Link href="/">
                    <Heading size="lg" color={Theme.color.main}>三毛猫のアンドロン</Heading>
                </Link>

                {/* グローバルナビ */}
                <Tabs ml="auto" colorScheme="blue" variant="soft-rounded" defaultIndex={props.defaultIndex}>
                    <TabList>
                        <Link href="/">
                            <Tab>Top</Tab>
                        </Link>
                        <Link href="/about">
                            <Tab>About</Tab>
                        </Link>
                        <Link href="/works">
                            <Tab>Works</Tab>
                        </Link>
                        <Link href="/blog">
                            <Tab>Blog</Tab>
                        </Link>
                    </TabList>
                </Tabs>

                {/* リンク(アイコン) */}
                <HStack spacing={2} justify="flex-end">
                    <IconButton
                        as="a"
                        href={URL.github}
                        target="_blank"
                        aria-label="GitHub"
                        icon={<FaGithub />}
                        fontSize={30}
                    />
                    <MailToIcon icon={<BiLogoGmail />} fontSize={30} />

                </HStack>
            </HStack>
            <Divider
                boxShadow="0px 2px 4px rgba(0, 0, 0, 0.5)"
            />
        </Box>

    )
}

export default Header;