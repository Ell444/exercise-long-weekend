
const CustomList = ({ type, list }) => {


    const lista = list.map((el, ix) =>

        <li key={ix}>{el}</li>

    )

    return type === 'ul' ? <ul>{lista}</ul> : <ol>{lista}</ol>
}

export default CustomList;