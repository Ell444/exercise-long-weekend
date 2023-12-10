
const CustomList = ({ type, list }) => {

    const lista = list.map((elem, i) => {

        return (

            <li key={i}>{elem}</li>)

    })

    return type === 'ul' ? <ul>{lista}</ul> : <ol>{lista}</ol>

}





export default CustomList;