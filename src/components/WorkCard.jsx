import {
    Box,
    VStack,
    Heading,
    Card,
    CardBody,
    Image,
    Tag,
    TagLabel,
} from "@chakra-ui/react"

import Theme from "@/components/Theme";

function WorkCard(props) {
    return (
        <>
            <Card p={2} aspectRatio={1} bg={Theme.color.backgroundC}>
                <CardBody spacing={20}>
                    {/* サムネ */}
                    <Box h="55%">
                        <Image
                            src={props.thumbnail}
                            boxSize="100%" objectFit="contain"
                        />
                    </Box>

                    {/* 見出し */}
                    <Box h="45%" pt={2}>
                        <VStack>
                            {/* タグ */}
                            <Tag
                                borderRadius="full"
                                variant="solid"
                                colorScheme={props.tag.color}
                                mr="auto"
                            >
                                <TagLabel>{props.tag.name}</TagLabel>
                            </Tag>

                            {/* タイトル */}
                            <Heading color={Theme.color.main}>{props.title}</Heading>
                        </VStack>
                    </Box>
                </CardBody>
            </Card>
        </>
    )
}

export default WorkCard;