import ItemOne from "./Item1"
import ItemTwo from "./Item2"

const ItemList = () => {
    return (
        <>
            <ItemOne name="shoes" price={2500}/>
            <ItemTwo name="bag" price={1350}/>
        </>
    )
        
}
export default ItemList;