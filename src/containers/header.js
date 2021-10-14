import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import langData from '../fixtures/lang.json'
import { useLocation } from 'react-router-dom';

export default function HeaderContainer({ children }) {
    const location = useLocation()
    const checkPage = location.pathname === ROUTES.HOME | location.pathname === ROUTES.BROWSE
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                {checkPage ? 
                    <Header.Wrap>
                        <Header.Language>
                            {langData.map((item) => {
                                return <Header.LangOption key={item.id}>{item.name}</Header.LangOption>
                            })}
                        </Header.Language>
                        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
                    </Header.Wrap>
                :
                ''} 

            </Header.Frame>
            {children}
        </Header>
    )
}