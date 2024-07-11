import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const ConsumeEndPoint = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(10);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log('API Response:', result);
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(0); // Reset to the first page on search
    };

    const offset = currentPage * itemsPerPage;
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    //const currentPageData = filteredData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = React.useMemo(() => {
        let sortableData = [...filteredData];
        if (sortConfig.key !== null) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData.slice(offset, offset + itemsPerPage);
    }, [filteredData, sortConfig, offset, itemsPerPage]);

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Data Table</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by name"
                className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('id')}>
                                ID <span className={getClassNamesFor('id') === 'ascending' ? 'inline-block ml-2 transform rotate-180' : 'inline-block ml-2'}>▲</span>
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('name')}>
                                Name <span className={getClassNamesFor('name') === 'ascending' ? 'inline-block ml-2 transform rotate-180' : 'inline-block ml-2'}>▲</span>
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('email')}>
                                Email <span className={getClassNamesFor('email') === 'ascending' ? 'inline-block ml-2 transform rotate-180' : 'inline-block ml-2'}>▲</span>
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('body')}>
                                Description <span className={getClassNamesFor('body') === 'ascending' ? 'inline-block ml-2 transform rotate-180' : 'inline-block ml-2'}>▲</span>
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('postId')}>
                                Post ID <span className={getClassNamesFor('postId') === 'ascending' ? 'inline-block ml-2 transform rotate-180' : 'inline-block ml-2'}>▲</span>
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sortedData.map((item, index) => (
                            <tr key={item.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900">{item.id}</td>
                                <td className="py-4 px-6 text-sm text-gray-500">{item.name}</td>
                                <td className="py-4 px-6 text-sm text-gray-500">{item.email}</td>
                                <td className="py-4 px-6 text-sm text-gray-500">{item.body}</td>
                                <td className="py-4 px-6 text-sm text-gray-500">{item.postId}</td>
                                <td className="py-4 px-6 text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-center">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"inline-flex items-center space-x-2"}
                    pageClassName={"block"}
                    pageLinkClassName={"px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"}
                    previousClassName={"block"}
                    previousLinkClassName={"px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"}
                    nextClassName={"block"}
                    nextLinkClassName={"px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"}
                    breakClassName={"block"}
                    breakLinkClassName={"px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"}
                    activeClassName={"bg-indigo-500 text-white"}
                    disabledClassName={"opacity-50 cursor-not-allowed"}
                />
            </div>
        </div>
    );
};

export default ConsumeEndPoint;
