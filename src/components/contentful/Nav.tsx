import { getNavigationMenu } from '../../lib/contentful/getNavigation';
import { ApolloStateProcessor } from '../ApolloStateProcessor';
import { Container } from '../Container';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { MenuItem } from './MenuItem';
import { useLocale } from 'next-intl';

export const Nav = async () => {
    const locale = useLocale();
    const { data, error, loading } = await getNavigationMenu({ locale });
    const menuItemsCollection =
        data?.navigationMenuCollection.items[0].menuItemsCollection;
    return (
        <ApolloStateProcessor error={error} loading={loading}>
            <nav
                className='fixed z-10 flex w-full justify-center bg-black bg-opacity-60 py-6'
                role='navigation'
            >
                <Container>
                    <ul className='flex justify-end'>
                        {menuItemsCollection.items.map((menuItem) => {
                            return (
                                <MenuItem
                                    key={menuItem.title}
                                    menuItem={menuItem}
                                />
                            );
                        })}
                        <LanguageSwitcher />
                    </ul>
                </Container>
            </nav>
        </ApolloStateProcessor>
    );
};
