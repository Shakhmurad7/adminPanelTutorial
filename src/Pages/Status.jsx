import PageContainer from '../components/PageContainer'
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartsStatusLeft from '../PageCharts/ChartsStatusLeft';

function Status() {
  return (
    <PageContainer>
        <div className="Status-Chats">
            <div className="Chats-left">
                <ChartsStatusLeft/>
            </div>
        </div>
    </PageContainer>
  )
}

export default Status