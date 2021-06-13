import { Icon } from "components/common/misc";
import { FC, MutableRefObject, useRef } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Hidden = styled.div`
    display: none;
`;

interface Props {
    handleAdd: (filename: string) => void
}


const AddFileButton: FC<Props> = ({ handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Container>
            <Hidden>
                <input type="file" ref={inputRef} onChange={(e) => handleAdd(e.target.value + ` [${e.timeStamp}]`)} />
            </Hidden>
            <Icon icon="plus" onClick={() => inputRef.current?.click()} />
        </Container>
    )
}

export default AddFileButton;