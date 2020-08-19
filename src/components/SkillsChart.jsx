import React, {PureComponent} from 'react';
import {Cell, Pie, PieChart} from 'recharts';
import styles from '../styles/SkillsChart.module.css'
import {getAllSkillsForChart} from "../lib/api";

// let skillsArr = [];
// async function getAllSkills() {
//     const response = await getAllSkillsForChart();
//     const data = response.data;
//     console.log(data)
//     for (let skill in data) {
//         const skillObj = {
//             name: data.name,
//             value: data.value
//         }
//         skillsArr.push(skillObj)
//     }
//     console.log(skillsArr)
// };

const data = [
    {name: 'Potion Making', value: 12},
    {name: 'Spells', value: 7},
    {name: 'Quidditch', value: 5},
    {name: 'Animagus', value: 7},
    {name: 'Apparate', value: 6},
    {name: 'Metamorphmagi', value: 9},
    {name: 'Parseltongue', value: 7},
];


const COLORS = ['#0088FE', '#FF6666', '#00C49F', '#FFBB28', '#8884D8', '#FF8042', '#E7689D'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

    skillsArr = []
    async getAllSkills() {
        const response = await getAllSkillsForChart();
        const data = response.data;
        const skills = []
        for (let skill in data) {
            const skillObj = {
                name: data.name,
                value: data.value
            }
            skills.push(skillObj)
        }
        console.log(skills)
        return skills
    };
    skillsArr = this.getAllSkills()
    render() {
        return (
            <div className={styles.SkillsChart}>
                {!this.skillsArr &&
                <div>!</div>
                }
                {this.skillsArr &&
                <PieChart width={400} height={400}>
                    <Pie
                        data={this.skillsArr}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`}
                                                             fill={COLORS[index % COLORS.length]}/>)
                        }
                    </Pie>
                </PieChart>
                }
                <div>The most popular desired skills among the students!</div>
                <div className={styles.Legend}>
                    <p className={styles.LegendItem}>
                        <span style={{color: "#0088FE"}}> &#9864;  </span>
                        Potion making</p>
                    <p className={styles.LegendItem}>
                        <span style={{color: "#FF6666"}}> &#9864;  </span>
                        Spells</p>
                    <p className={styles.LegendItem}>
                        <span style={{color: "#00C49F"}}> &#9864;  </span>
                        Quidditch</p>
                    <p className={styles.LegendItem}>
                        <span style={{color: "#FFBB28"}}> &#9864;  </span>
                        Animagus</p>
                    <p className={styles.LegendItem}>
                        <span style={{color: "#8884D8"}}> &#9864;  </span>
                        Apparate</p>
                    <p className={styles.LegendItem}>
                        <span style={{color: "#FF8042"}}> &#9864;  </span>
                        Metamorphmagi</p>
                    <p className={styles.LegendItem}>
                        <span  style={{color: "#E7689D"}}> &#9864; </span>
                        Parseltongue</p>
                </div>
            </div>
        );
    }
}

export default Example
