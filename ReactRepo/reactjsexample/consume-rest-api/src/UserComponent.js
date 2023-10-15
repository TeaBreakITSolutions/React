import React, { useEffect, useState } from 'react';


const UserComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const USER_API = 'https://jsonplaceholder.typicode.com/users';
            const response = await fetch(USER_API);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div>
            {data ? (
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        
                    </tr>
                    {data.map((item) => (

                        <tr key={item.id}>

                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                           

                        </tr>

                    ))}
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserComponent;