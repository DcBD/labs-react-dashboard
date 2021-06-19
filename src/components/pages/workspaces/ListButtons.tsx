
import { Icon } from "components/common/misc";
import { ButtonBase } from "components/common/misc/Button";
import { FC } from "react";
import styled from "styled-components";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top:${Spacing[3]}rem;
`

const All = styled.div`
    > button {
        background-color: #eaecf5;
        color: #7885c1;
        font-weight: bold;

    }
    path {
        fill: #7885c1;
    }
`;
const SAS = styled.div`
    > button {
        background-color: #cce5cc;
        color: #4da64d;
        font-weight: bold;

    }
    path {
        fill: #4da64d;
    }

`;
const SARL = styled.div`
    > button {
        background-color: #d4ecf7;
        color: #43a1ce;
        font-weight: bold;

    }
    path {
        fill: #43a1ce;
    }

`;
const Secondary = styled.div`
    > button {
        background-color: #f2e5c4;
        color: #deba64;
        font-weight: bold;

    }
        path {
        fill: #deba64;
    }
    `;
const Communities = styled.div` > button {
    background-color: #cccccc;
    color: #3f465d;
    font-weight: bold;

}
    path {
        fill: #3f465d;
    }
`;
const POA = styled.div`
> button {
    background-color: #e8e8e8;
    color: #a2a6af;
    font-weight: bold;

}
    path {
        fill: #a2a6af;
    }
`;
const Survey = styled.div`
> button {
    background-color: #ffffff;
    color: #7b8090;
    font-weight: bold;

}
    path {
        fill: #7b8090;
    }
`;
const Options = styled.div`
> button {
    background-color: #ffffff;
    color: #7b8090;
    font-weight: bold;
}
    path {
        fill: #7b8090;
    }
`;

const ListButtons: FC = () => {
    return <Container>
        <All>
            <ButtonBase color="primary" type="contained" onClick={() => { alert(1) }}><Icon icon="entities" size="14" />All</ButtonBase>
        </All>
        <SAS>
            <ButtonBase color="primary" type="contained" onClick={() => { alert(1) }}><Icon icon="entities" size="14" />SAS</ButtonBase>
        </SAS>
        <SARL>
            <ButtonBase color="primary" type="contained" onClick={() => { alert(1) }}><Icon icon="entities" size="14" />SARL</ButtonBase>
        </SARL>
        <Secondary>
            <ButtonBase color="primary" type="contained" onClick={() => { alert(1) }}><Icon icon="entities" size="14" />Secondary business</ButtonBase>
        </Secondary>
        <Communities>
            <ButtonBase color="primary" type="contained" onClick={() => { alert(1) }}><Icon icon="entities" size="14" />Communities</ButtonBase>
        </Communities>
        <POA>
            <ButtonBase color="primary" type="contained" onClick={() => { alert(1) }}><Icon icon="entities" size="14" />POA</ButtonBase>
        </POA>
        <Survey>
            <ButtonBase color="primary" type="contained" onClick={() => { alert(1) }}><Icon icon="entities" size="14" />Survey</ButtonBase>
        </Survey>
        <Options>
            <ButtonBase color="primary" type="contained" onClick={() => { alert(1) }}><Icon icon="option" size="14" /></ButtonBase>
        </Options>
    </Container>
}

export default ListButtons