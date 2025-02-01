async function SearchPage({
    searchParams,
}: {
    searchParams: {
        query: string;
    };
}) {
    const { query } = await searchParams;
    return <h2> Search for: {query}</h2>;
}

export default SearchPage;
