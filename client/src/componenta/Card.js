import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const Cards = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearch] = useState("");
    const [searched, setSearched] = useState([])

    const getData = async () => {
        const response = await fetch("https://aman-kumar-mandal.up.railway.app/items")
        let result = await response.json()
        setData(result)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchQuery) {
            setSearched(data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchQuery.toLowerCase())
            }))
        } else {
            setData(data)
        }
    }, [searchQuery])



    return (
        <div className='container mt-3 p-md-3'>
            <div className="row d-flex justify-content-center align-items-center">
                <input className='search' placeholder='SEARCH' type="search" onChange={(e) => setSearch(e.target.value)} />
                {
                    (searchQuery.length>0 && searched.length === 0) && <h1 className='text-center mt-5'>Data Not Found</h1>
                }
                {searchQuery.length > 0 ? (
                    searched.map((element, id) => {
                        return (
                            <Card key={element.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                <Card.Img variant="top" src={element.image} style={{ height: "16rem" }} className="mt-3" />
                                <Card.Body>
                                    <Card.Title>{element.name}</Card.Title>
                                    <Card.Text>
                                        Price : ₹ {element.price}
                                    </Card.Text>
                                    <div className='rat'>
                                        Rating :  {element.rating} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star stars" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </div>
                                    <div className="button_div d-flex justify-content-center">
                                        <Button variant="outline-success" className='col-lg-12'>Purchase</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })
                ) : (
                    data.map((element, id) => {
                        return (
                            <Card key={element.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                <Card.Img variant="top" src={element.image} style={{ height: "16rem" }} className="mt-3" />
                                <Card.Body>
                                    <Card.Title>{element.name}</Card.Title>
                                    <Card.Text>
                                        Price : ₹ {element.price}
                                    </Card.Text>
                                    <div className='rat'>
                                        Rating :  {element.rating} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star stars" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </div>
                                    <div className="button_div d-flex justify-content-center">
                                        <Button variant="outline-success" className='col-lg-12'>Purchase</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Cards
