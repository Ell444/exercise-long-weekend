
const CustomList = ({ type, list, buttons }) => {

    const lista = list.map((elem, i) => {

        return (

            <li key={i}>
                <strong>{elem}</strong>
                <button className="btn-ex-4">Click here</button>
                <button className="btn-ex-4">Click here as well</button>
            </li>)

    })

    return type === 'ul' ? <ul>{lista}</ul> : <ol>{lista}</ol>

}





export default CustomList;