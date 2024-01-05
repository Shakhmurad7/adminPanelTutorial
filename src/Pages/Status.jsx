import PageContainer from '../components/PageContainer'
import React from 'react';
import ChartsStatusLeft from '../PageCharts/ChartsStatusLeft';
import ChartsStatusRight from '../PageCharts/ChartsStatusRight';
import '../index.css'
import PieCharts from '../PageCharts/PieCharts';


function Status() {
  return (
    <PageContainer>
        <div className="Status-Chats">
            <div className="Chats-left">
                <ChartsStatusLeft/>
            </div>
            <div className="Chats-right">
                <ChartsStatusRight/>
            </div>
        </div>

        <div className="Status-Chats">
            <div className="Chats-left">
              <PieCharts/>
            </div>
            <div className="Chats-right">
                <ChartsStatusRight/>
            </div>
        </div>
    </PageContainer>
  )
}

export default Status