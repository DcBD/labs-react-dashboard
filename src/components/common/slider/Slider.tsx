import React, { FC, useCallback, useRef } from "react";
import { useSprings, a } from 'react-spring'
import { useGesture } from "react-use-gesture";
import styled from "styled-components";



const Container = styled.div`

    position:relative;
    height:500px;

`;

const SlideItem = styled(a.div) <{ width: number, height: number }>`
    flex-shrink: 0;
    will-change: 'transform';
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};

    position:absolute;

    
`;


interface Props {
    items: Array<React.ReactNode>,
    minItemsVisible: number
    width?: number,
    children: (item: React.ReactNode, i: number) => React.ReactFragment
}

const styles = {
    item: { height: '100%', willChange: 'transform' }
}

const Slider: FC<Props> = ({ items, minItemsVisible, width = 400, children }) => {


    const index = useCallback((x, length = items.length) => (x < 0 ? x + length : x) % length, [items]);
    const getPos = useCallback((i, firstVis, firstVisIdx) => index(i - firstVis + firstVisIdx), [index])

    const [springs, api] = useSprings(items.length, (i) => ({ x: (i < items.length - 1 ? i : -1) * width }))
    const prev = useRef([0, 1]);


    const runSprings = useCallback(
        (y, vy) => {
            const firstVis = index(Math.floor(y / width) % items.length)
            const firstVisIdx = vy < 0 ? items.length - minItemsVisible - 1 : 1
            api.start((i) => {
                const position = getPos(i, firstVis, firstVisIdx)
                const prevPosition = getPos(i, prev.current[0], prev.current[1])
                const rank = firstVis - (y < 0 ? items.length : 0) + position - firstVisIdx
                const configPos = vy > 0 ? position : items.length - position
                return {
                    x: (-y % (width * items.length)) + width * rank,
                    immediate: vy < 0 ? prevPosition > position : prevPosition < position,
                    config: { tension: (1 + items.length - configPos) * 100, friction: 30 + configPos * 40 }
                }
            })
            prev.current = [firstVis, firstVisIdx]
        },
        [index, getPos, width, minItemsVisible, api, items.length]
    )

    const wheelOffset = useRef(0)
    const dragOffset = useRef(0)
    const bind = useGesture({
        onDrag: ({ offset: [x], vxvy: [vx] }) => vx && ((dragOffset.current = -x), runSprings(wheelOffset.current + -x, -vx)),
        onWheel: ({ offset: [, y], vxvy: [, vy] }) => vy && ((wheelOffset.current = y), runSprings(dragOffset.current + y, vy))
    })


    return children && (
        // @ts-ignore
        <Container {...bind()}>
            {springs.map(({ x }, i) => (
                // @ts-ignore
                <SlideItem key={i} width={width} height={width} style={{ x }} children={children(items[i], i)} />
            ))}
        </Container>
    )
}


export default Slider;