import React from 'react'

import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

function TeacerList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are Proffys avaliable." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Week Day</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="Time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacerList