import React from 'react';
import GitHubCalendar from 'react-github-calendar';
// import GitHubStatsCard from 'github-readme-stats';
// import GitHubTopLanguages from 'github-readme-stats';
// 
const GitHubS = () => {
    const centerStyles = {
        
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        marginTop:"80px"
        /* Add any other styles you want for the centered div */
      };
    
  
    return (
    <div style={centerStyles}>
      {/* GitHub Activity Calendar */}
      <div className="react-activity-calendar">
        <GitHubCalendar username="TrilochanprasadBH" fullYear={false} />
      </div>

      {/* GitHub Streak Stats */}
      <div>
        <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=TrilochanprasadBH" alt="GitHub Streak Stats" />
      </div>

      {/* GitHub Top Languages */}
      <div >
        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=TrilochanprasadBH&layout=compact" alt="GitHub Top Languages" />
      </div>

      {/* GitHub Stats Card */}
      <div>
        <img id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=TrilochanprasadBH' alt
        ="stats"/>
      </div>
    </div>
  );
};

export default GitHubS;

//ok o okoko k 
//plplplplplpl