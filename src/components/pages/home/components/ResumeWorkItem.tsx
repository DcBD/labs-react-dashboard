import { Icon } from 'components/common/misc';
import Image from 'components/common/misc/Image';
import IUser from 'entities/api/IUser';
import { FC } from 'react'
import { UtilsService } from 'services/UtilsService';
import { IconName } from 'shared/Types';
import styled from 'styled-components'
import { TextPrimary, TextSecondary } from 'styledHelpers/components/Text';
import { Spacing } from 'styledHelpers/Spacing';


const Container = styled.div`
    padding: ${Spacing[2]}rem ${Spacing[3]}rem;
    text-align:left;
`;

const Title = styled.div`
    margin-bottom: ${Spacing[1]}rem;
`;

const Description = styled.div`
    margin-bottom: ${Spacing[1]}rem;
`;

const Footer = styled.div`
    display:flex;
    align-items:center;
`;

const CorporationLogo = styled.div`
    position:relative;
    height:15px;
    width:15px;
    top:1px;
    margin-right: ${Spacing[1]}rem;
    *{
        border-radius:100px;
    }
`;

const ContractTypeContainer = styled.div`
    display:flex;
    align-items:center;
    text-transform:capitalize;

    span{
        display:block;
        margin-left:${Spacing[1]}rem;
    }
`;

const Spacer = styled.div`
    width:25px;
    text-align:center;
`;

const DotSpacer = () => {
    return (<Spacer>
        •
    </Spacer>)
}



type Contract = "client" | "supplier" | "corporate"

export interface Props {
    title: string
    description: string
    contract_type: Contract
    corporation: string
    corporation_logo: string
    postId: number,
    user: IUser

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

const ResumeWorkItem: FC<Props> = ({ title, description, corporation_logo, corporation, contract_type, user }) => {



    return (
        <Container>
            <Title>
                <TextPrimary fontSize="20">{title}</TextPrimary>
            </Title>
            <Description>{description}</Description>
            <Footer>
                <CorporationLogo>
                    <Image src={corporation_logo} alt={corporation} />
                </CorporationLogo>
                <TextSecondary>{corporation}</TextSecondary>
                <DotSpacer />
                <ContractTypeContainer>
                    <Icon icon={contractNameToIconName(contract_type)} size="12" />

                    <TextSecondary>{contract_type}</TextSecondary>
                </ContractTypeContainer>
                <DotSpacer />
                <TextSecondary>Updated {UtilsService.Random()} days ago by {user.name}</TextSecondary>
            </Footer>
        </Container>
    )
}


export default ResumeWorkItem

