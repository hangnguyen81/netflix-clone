import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink, Select, Option, Wrap } from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.Wrap = function HeaderWrap({children, ...restProps}){
    return <Wrap {...restProps}>{children}</Wrap>
}

Header.Language = function HeaderLanguage({children, ...restProps}){
    return <Select {...restProps}>{children}</Select>
}

Header.LangOption = function HeaderLangOption({children, ...restProps}){
    return <Option {...restProps}>{children}</Option>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}