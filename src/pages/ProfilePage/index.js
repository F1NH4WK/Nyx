import { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import { FlatList, Image, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;

export default function CarouselAutoScroll(){

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
    
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
    
        useEffect(() => {
            const tick = () => {
                savedCallback.current();
            };
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    };

    const imageRef = useRef();
    const [active, setActive] = useState(0);
    const indexRef = useRef(active);
    indexRef.current = active;

    const data = [{
      image: 'https://picsum.photos/200/300'
    },
    {
      image: 'https://picsum.photos/200/300'
    }]

    const interval = 3000

    useInterval(() => {
        if (active < Number(data?.length) - 1) {
            setActive(active + 1);
        } else {
            setActive(0);
        }
    }, interval);

    useEffect(() => {
        imageRef.current.scrollToIndex({ index: active, animated: true });
    }, [active]);

    const onViewableItemsChangedHandler = useCallback(
        ({ viewableItems, changed }) => {
            if (active != 0) {
                setActive(viewableItems[0].index);
            }
        },
        []
    );

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChangedHandler}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 50,
            }}
            ref={imageRef}
            pagingEnabled
            data={data}
            horizontal
            renderItem={({ item, index }) => (
                <Image
                    key={index}
                    source={{uri: item.image}}
                    resizeMode={"contain"}
                    style={{
                        flex: 1,
                        height: "100%",
                        width: width,
                    }}
                />
            )}
            style={{ ...StyleSheet.AbsoluteFill }}
        />
    );
};

