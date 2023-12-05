import ColectDiv from "../ColectDiv/ColectDiv";
// import collections from "../collection.json";
import "./ColectItem.css";
function ColectItem({ collection, del }) {
    return (
        <div className="containers">
            <ul className="list">
                {collection.map((el) => (
                    <ColectDiv
                        key={el.id}
                        // coinName={collection.name}
                        // coinToken={collection.coin}
                        // del={() => deleteCollection}
                        collection={el}
                        del={del}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ColectItem;

//    return (
//         <div className="containers">
//             <ul className="list">
//                 {collections.map((collection) => (
//                     <ColectDiv
//                         key={collection.id}
//                         coinName={collection.name}
//                         coinToken={collection.coin}
//                         del={() => deleteCollection}
//                     />
//                 ))}
