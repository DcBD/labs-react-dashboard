import { TablePagination } from "@material-ui/core";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import MaterialPagination from '@material-ui/lab/Pagination';

const Container = styled.div``;

interface Props {
    count: number

    page: number
    onChange: (page: number) => void

}

const Pagination: FC<Props> = ({ count, page, onChange }) => {
    return (<Container>
        <MaterialPagination count={count} page={page + 1} onChange={(e, value) => onChange(value - 1)} boundaryCount={2} siblingCount={0} />
    </Container>)

}

export default Pagination;