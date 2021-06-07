import FileListItem from "components/common/file/FileListItem";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";


const Container = styled.div``;

interface Props {
    files: Array<string>
}

const FileList: FC<Props> = ({ files }) => {
    return (
        <Container>
            {files.map((file, i) => <FileListItem key={i} name={file} />)}
        </Container>
    )

}

export default FileList