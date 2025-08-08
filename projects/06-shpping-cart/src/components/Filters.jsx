import { useId } from "react";
import { useFilters } from "../hooks/useFilters";
import { FiltersContext } from "../context/filters";

const Filters = () => {
    const { filters, setFilters } = useFilters(FiltersContext)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()


    const handlerChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))

    };

    const handlerChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    };

    return (
        <section className="flex justify-between">
            <div className="flex items-center justify-center gap-4 font-bold text-sm">
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range" id={minPriceFilterId} min="0" max="1000" value={filters.minPrice} onChange={handlerChangeMinPrice} />
                <span>{filters.minPrice}</span>
            </div>
            <div className="flex items-center justify-center gap-4 font-bold text-sm">
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select className="bg-[#1a1a1a]" id={categoryFilterId} onChange={handlerChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="beauty">Belleza</option>
                    <option value="fragrances">Fragancias</option>
                    <option value="furniture">Muebles</option>
                    <option value="groceries">Comestibles</option>
                </select>
            </div>
        </section>
    )
}

export default Filters