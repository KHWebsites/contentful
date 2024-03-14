import { ApolloError } from "@apollo/client";
import { ReactElement } from "react"
import { Container } from "./Container";
import { ComponentSkeleton } from "./ComponentSkeleton";

type _TApolloStateProcessor = {
    children: ReactElement;
    error: ApolloError | undefined;
    loading: boolean;
    isFirst?: boolean;
    className?: string;
}

export const ApolloStateProcessor = ({children, error, loading, isFirst, className}: _TApolloStateProcessor) => {
    if (error) {
        return (
            <Container isFirst={isFirst} className={`${className ? className : ''}`} maxWidth={true}>
                <p>Error</p>
                <p>Message: {error.message}</p>
            </Container>
        );
    }

    if (loading) {
        return (
            <Container isFirst={isFirst} className={`${className ? className : ''}`} maxWidth={true}>
                <ComponentSkeleton />
            </Container>
        );
    }

    return children;
}