type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}


export const NewComponent = (props: NewComponentType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <table>
            <tbody>
            {topCars.map((el, id,arr) => {
                return (
                    <tr key={id}>
                        <th>{++id}</th>
                        <th>{el.manufacturer}</th>
                        <th>{el.model}</th>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )

    // return (
    //     <ul>
    //         {props.students.map((el,i) => {
    //            return (
    //                <li key={el.id}>
    //                    <span>Name: {el.name}</span>
    //                    <span> age: {el.age}</span>
    //                </li>
    //            )
    //         })}
    //     </ul>
    // )
}