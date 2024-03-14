import { getNavigationMenu } from "@/app/lib/contentful/getNavigation";
import { ApolloStateProcessor } from "../ApolloStateProcessor";
import { Container } from "../Container";
import { MenuItem } from "./MenuItem";

export const Nav = async () => {
    const { data, error, loading } = await getNavigationMenu();
    const menuItemsCollection = data?.navigationMenuCollection.items[0].menuItemsCollection;
    return (
        <ApolloStateProcessor error={error} loading={loading}>
            <nav className='fixed z-10 flex w-full justify-center bg-black bg-opacity-60 py-6' role="navigation">
                <Container>
                    <ul className='flex justify-end'>
                        {menuItemsCollection.items.map((menuItem) => {
                            return <MenuItem key={menuItem.title} menuItem={menuItem} />;
                        })}
                    </ul>
                </Container>
            </nav>
        </ApolloStateProcessor>

    );
};
