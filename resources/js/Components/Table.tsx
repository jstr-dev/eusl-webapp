import {InputHTMLAttributes} from 'react';

export default function Table({columns, data}: InputHTMLAttributes<HTMLInputElement> & {columns: Array<string>, data: Array<any>}) {
    console.log(data);
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    {columns && columns.map((header: string) => (
                        <th>{header}</th>
                    ))}
                </tr>
            </thead>
            
            <tbody>
                {data && data.map((line: any) => (
                    <tr key={line.id}>
                        <td>{line['name']}</td>
                        <td>{line['short']}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}