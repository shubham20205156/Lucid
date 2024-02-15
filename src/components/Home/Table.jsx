import { React, useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [val, setVal] = useState({ host: "", value: "", ttl: "" });
    const [fetchedData, setFetchedData] = useState("");
    const [filter, setFilter] = useState(false);
    const [filterVal, setFilterVal] = useState('');

    const navigate = useNavigate();
    const selectOption = (e) => {
        setSelectedOption(e.target.value);

    }
    const tableContent = async () => {
        const data = await fetch("http://localhost:5000/api/record/retrive", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!data.ok) {
            throw new Error('Failed to retrieve data');
        }

        const result = await data.json();

        setFetchedData(result);
        console.log(fetchedData);
        console.log(result);
    }
    useEffect(() => {
        tableContent();
    }, [])

    const handAddRecord = async (e) => {
        const { host, value, ttl } = val;
        const type = selectedOption;
        navigate('/');
        alert("record added");

        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ type, host, value, ttl, })
        });

    }

    const onChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value });
        console.log(val);
    }
    const selectFilter = (e) => {
        setFilterVal(e.target.value);
        console.log(filterVal);
    }
    const filterData = () => {
        setFilter(true);

    }
    return (
        <>
            <div className="mainContainer">
                <div className="topHeader">
                    <div className="menu">
                        <select id="AddNewRecord" onChange={selectOption} value={selectedOption}>
                            <option value="A Record">Add New Records</option>
                            <option value="A Record">A Record</option>
                            <option value="AAAA Record">AAAA Record</option>
                            <option value="C Name Record">C Name Record</option>
                            <option value="TXT Record">TXT Record</option>
                            <option value="MX Record">MX Record</option>
                            <option value="NS Record">NS Record</option>
                            <option value="PTR Record">PTR Record</option>
                            <option value="SOA Record">SOA Record</option>
                            <option value="SRC Record">SRV Record</option>
                            <option value="DNSSEC Record">DNSSEC Record</option>
                        </select >
                        <div className="filterBox">
                            <select id="filter" onChange={selectFilter} value={filterVal}>
                                <option value="A Record">A Record</option>
                                <option value="AAAA Record">AAAA Record</option>
                                <option value="C Name Record">C Name Record</option>
                                <option value="TXT Record">TXT Record</option>
                                <option value="MX Record">MX Record</option>
                                <option value="NS Record">NS Record</option>
                                <option value="PTR Record">PTR Record</option>
                                <option value="SOA Record">SOA Record</option>
                                <option value="SRC Record">SRV Record</option>
                                <option value="DNSSEC Record">DNSSEC Record</option>
                            </select>
                            <button type="button" id="filterBtn" class="btn btn-success " onClick={filterData}>Filter</button>
                        </div>

                        <div className="searchRecords">
                            <input type="text" placeholder='Search Records' />
                            <button type="button" id="filterBtn" class="btn btn-success">Search</button>
                        </div>
                    </div>
                </div>
                {selectedOption && (
                    <div className="addRecord">
                        <div className="addRecordContainer1">
                            <h4>{selectedOption} : </h4>
                            <input type="text" placeholder='Host' name='host' onChange={onChange} />
                            <input type="text" placeholder='Value' name='value' onChange={onChange} />
                            <input type="text" placeholder='TTL' name='ttl' onChange={onChange} />
                            <button type="btn" className='btn btn-success' onClick={handAddRecord}>Add Record</button>
                        </div>
                    </div>
                )
                }
                <div class="tableContainer">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Host</th>
                                <th>Value</th>
                                <th>TTL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filter ? (
                                fetchedData && fetchedData.records.filter((element) => element.type ==filterVal)
                                .map((e) => (
                                    <tr key={e._id}>
                                        <td>{e.type}</td>
                                        <td>{e.host}</td>
                                        <td>{e.value}</td>
                                        <td>{e.ttl}</td>
                                    </tr>
                                ))
                            ) : (

                                fetchedData && fetchedData.records.map((element) => (
                                    <tr key={element._id}>
                                        <td>{element.type}</td>
                                        <td>{element.host}</td>
                                        <td>{element.value}</td>
                                        <td>{element.ttl}</td>
                                        
                                    </tr>
                                ))
                            )}
                        </tbody>

                    </table>
                </div>

            </div >
        </>
    )
}

export default Table