import React from 'react'
import Card from '../components/Card'

function Home({items,searchValue, setSearchValue, onChangeSearchInput, onAddFavorite, onAddToCart}) {
    return (
        <div>
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" value="searchValue" alt="Search" />
                        {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear" />}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />

                    </div>
                </div>

                {/* cards */}
                <div className="d-flex flex-wrap">
                    {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                        <Card key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={(obj) => onAddFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                        />

                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home

