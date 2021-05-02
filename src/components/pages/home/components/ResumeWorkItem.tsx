import Image from 'components/common/misc/Image';
import { FC } from 'react'
import { IconName } from 'shared/Types';
import styled from 'styled-components'


const Container = styled.div``;

const Title = styled.div``;

const Description = styled.div``;

const CorporationContainer = styled.div``;

const CorporationLogo = styled.div``;

const ContractTypeContainer = styled.div``;

type Contract = "client" | "supplier" | "corporate"

export interface Props {
    title: string
    description: string
    contract_type: Contract
    corporation: string
    corporation_logo: string

}

const contractNameToIconName = (name: Contract): IconName => {
    switch (name) {
        case "client":
            return "privacy"
        case "supplier":
            return "publications"
        case "corporate":
            return "entities"
    }
}

const ResumeWorkItem: FC<Props> = ({ title, description, corporation_logo, corporation, contract_type }) => {



    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CorporationContainer>
                <CorporationLogo>
                    <Image src={corporation_logo} alt={corporation} />
                </CorporationLogo>
                <ContractTypeContainer>
                    {contractNameToIconName(contract_type)}
                </ContractTypeContainer>
            </CorporationContainer>
        </Container>
    )
}


export default ResumeWorkItem

