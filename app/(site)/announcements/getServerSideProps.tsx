export const getServerSideProps = async () => {
    const url = 'http://localhost:8080/tender/?page=0&size=25';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return {
            props: {data},
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            props: {data: null},
        };
    }
};