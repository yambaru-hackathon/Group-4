import { Box, Divider, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import Card from "@/components/Dashboard/Cards/Card";
import CourseCardColumn from "../Columns/CourseCardColmn";
import Styles from "@/styles/styles.module.css";

const courseTemplate = [{
    "title": "国語",
    "year": "2023",
    "semester": "前期"
}, {
    "title": "微積分Ⅱ",
    "year": "2023",
    "semester": "前期"
}, {
    "title": "地理学概論",
    "year": "2023",
    "semester": "後期"
}, {
    "title": "ECPⅢ",
    "year": "2023",
    "semester": "通年"
},]

const CourseCard = ({ year, semester }) => {
    const [filteredCourse, setFilteredCourse] = useState([]);

    useEffect(() => {
        const filtered = courseTemplate.filter(item => {
            if (semester === "通年") {
                return item.year === year && item.semester === "通年";
            } else {
                return item.year === year && item.semester === semester;
            }
        });
        setFilteredCourse(filtered);
    }, [year, semester]);

    return (
        <Box sx={{ height: "100%", position: 'relative' }}>
            <Card title="コース一覧">
                <Box className={Styles.scorePage}>
                    {filteredCourse.map(({ title, year, semester }, i) => (
                        <React.Fragment key={i}>
                            {i !== 0 && <Divider />}
                            <Typography variant="body2" sx={{ marginLeft: '8px' }}>
                                {year} {semester}
                            </Typography>
                            <CourseCardColumn title={title} />
                        </React.Fragment>
                    ))}
                </Box>
            </Card>
        </Box>
    );
};

export default CourseCard