import { traducir } from "../utils/traducir";

function StatsBlock({ stats }) {
    return (
        <table className="stats-table">
            <thead>
                <tr>
                    <th>Estadística</th>
                    <th>Valor Base</th>
                </tr>
            </thead>
            <tbody>
                {stats.map((item) => {
                    const statName = item.stat.name; 
                    const baseStat = item.base_stat; 
                    
                    return (
                        <tr key={statName}>
                            <td>{traducir(statName)}</td>
                            <td>{baseStat}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default StatsBlock;