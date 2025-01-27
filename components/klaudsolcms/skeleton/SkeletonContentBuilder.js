import AppContentBuilderButtons from "../buttons/AppContentBuilderButtons";
import { SKELETON_FILLER, DEFAULT_SKELETON_ROW_TABLE_COUNT } from "lib/Constants"
const SkeletonContentBuilder = () => {


    const columns = [
        {accessor: 'name', displayName: 'NAME'},
        {accessor: 'type', displayName: 'TYPE'},
        {accessor: 'button', displayName: ''},
    ]

    const entries = Array.from({length: DEFAULT_SKELETON_ROW_TABLE_COUNT}, (_, i) => {
        return {
            name: SKELETON_FILLER, 
            type: SKELETON_FILLER, 
            button:  <AppContentBuilderButtons isDisabled={true} /> 
        }
      })

    return ( 
        <>
        <table id="table_skeleton">
            {/*table head*/}
            <thead> 
                <tr>
                {columns.map((col, i) => (
                    <th key={i}>{col.displayName}</th>
                ))}
                </tr>
            </thead>
            {/*table body*/}
            <tbody>
            {entries.map((entry, i) => (
                <tr key={i}>
                    {columns.map((col, index) => (
                        <td key={index}><b className="skeleton-table-row">{entry[col.accessor]}</b></td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
        </> 
    );
}
 
export default SkeletonContentBuilder;