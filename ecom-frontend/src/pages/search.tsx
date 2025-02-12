import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {};

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (low to high)</option>
            <option value="dsc">Price (high to low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price : {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="s1">Sample 1</option>
            <option value="s2">Sample 2</option>
          </select>
        </div>
      </aside>

      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            productId="abc234"
            name="basketball"
            price={600}
            stock={100}
            handler={addToCartHandler}
            photo="data:image/jpeg;base64,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"
          />
        </div>

        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled={!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default Search;
