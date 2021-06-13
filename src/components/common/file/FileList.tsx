import AddFileButton from "components/common/file/AddFileButton";
import FileListItem from "components/common/file/FileListItem";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";


const Container = styled.div``;

interface Props {
    files: Array<string>,
    editable?: boolean
    onChange?: (files: Array<string>) => void
}

const FileList: FC<Props> = ({ files, onChange }) => {

    const handleRemove = (file: string) => {
        if (onChange) {
            onChange(files.filter(filename => filename != file));
        }
    }

    const handleAdd = (filename: string) => {
        if (onChange) {
            const _files = [...files];
            _files.push(filename);

            onChange(_files);

        }
    }



    return (
        <Container>
            {files.map((file, i) => <FileListItem key={i} name={file} onRemove={onChange ? handleRemove : false} />)}
            {onChange && <AddFileButton handleAdd={handleAdd} />}
        </Container>
    )

}

export default FileList