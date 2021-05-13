import React, { FC, useCallback, useRef } from "react";
import { useState } from "react";
import { useSprings, a } from 'react-spring'
import { useGesture } from "react-use-gesture";
import styled from "styled-components";



const Container = styled.div`

    position:relative;
    height:100%;

`;

const SlideItem = styled(a.div) <{ width: number }>`
    flex-shrink: 0;
    will-change: 'transform';
    width: ${({ width }) => `${width}px`};


    position:absolute;
`;


interface Props {

    minItemsVisible?: number
    width?: number,
    children: Array<React.ReactNode>
}

const Slider: FC<Props> = ({ minItemsVisible, width = 400, children }) => {

    const [itemsVisible, setItemsVisible] = useState<number>((): number => {
        if (minItemsVisible) return minItemsVisible as number;

        if (children.length % 3 === 0) {
            return children.length / 3;
        } else if (children.length % 2 === 0) {
            return children.length / 2;
        } else {
            return Math.floor(children.length / 2);
        }
    });




    const index = useCallback((x, length = children.length) => (x < 0 ? x + length : x) % length, [children]);
    const getPos = useCallback((i, firstVis, firstVisIdx) => index(i - firstVis + firstVisIdx), [index])

    const [springs, api] = useSprings(children.length, (i) => ({ x: (i < children.length - 1 ? i : -1) * width }))
    const prev = useRef([0, 1]);


    const runSprings = useCallback(
        (y, vy) => {
            const firstVis = index(Math.floor(y / width) % children.length)
            const firstVisIdx = vy < 0 ? children.length - itemsVisible - 1 : 1
            api.start((i) => {
                const position = getPos(i, firstVis, firstVisIdx)
                const prevPosition = getPos(i, prev.current[0], prev.current[1])
                const rank = firstVis - (y < 0 ? children.length : 0) + position - firstVisIdx
                const configPos = vy > 0 ? position : children.length - position
                return {
                    x: (-y % (width * children.length)) + width * rank,
                    immediate: vy < 0 ? prevPosition > position : prevPosition < position,
                    config: { tension: (1 + children.length - configPos) * 100, friction: 30 + configPos * 40 }
                }
            })
            prev.current = [firstVis, firstVisIdx]
        },
        [index, getPos, width, itemsVisible, api, children.length]
    )

    const wheelOffset = useRef(0)
    const dragOffset = useRef(0)
    const bind = useGesture({
        onDrag: ({ offset: [x], vxvy: [vx] }) => vx && ((dragOffset.current = -x), runSprings(wheelOffset.current + -x, -vx))
    })


    return (
        <Container {...bind()}>
            {springs.map(({ x }, i) => (
                <SlideItem key={i} width={width} style={{ x }} children={children[i]} />
            ))}
        </Container>
    )
}


export default Slider;