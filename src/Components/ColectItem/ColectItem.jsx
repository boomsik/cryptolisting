import ColectDiv from "../ColectDiv/ColectDiv";

import "./ColectItem.css";
function ColectItem({ collection, del }) {
    return (
        <div className="containers">
            <ul className="list">
                {collection.map((el) => (
                    <ColectDiv key={el.id} collection={el} del={del} />
                ))}
            </ul>
        </div>
    );
}

export default ColectItem;
