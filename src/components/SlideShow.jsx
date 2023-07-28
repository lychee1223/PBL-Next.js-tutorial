import { useState } from 'react';
import { Image, Box, HStack, IconButton } from '@chakra-ui/react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

function SlideShow(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = props.imageList.length;

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };

    return (
        <HStack h="100%">
            {/* 前へ ボタン */}
            <IconButton
                onClick={handlePrevSlide}
                icon={<FaArrowCircleLeft />}
                h="100%" fontSize="30px"
            />
            {/* 画像 */}
            <Box h="100%" m="auto" pointerEvents="none">
                <Image
                    src={props.imageList[currentIndex]}
                    boxSize="100%" objectFit="contain"
                    style={{ userSelect: 'none' }}
                />
            </Box>
            {/* 次へ ボタン */}
            <IconButton
                onClick={handleNextSlide}
                icon={<FaArrowCircleRight />}
                h="100%" fontSize="30px"
            />
        </HStack>
    );
}

export default SlideShow;