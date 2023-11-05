
import GitHubCalendar from "react-github-calendar"
export const GitHubCalendarSec = () => {
    return (
        <div className="flex flex-col gap-6 px-2">
            <div className='react-activity-calendar flex justify-center items-start'>
                <GitHubCalendar username="tapishagrawal" colorScheme="light" />
            </div>
            <div className="flex justify-center items-start">
                <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=tapishagrawal&layout=compact" />
            </div>
            <div className="flex justify-center flex-col items-center gap-8 sm:flex-row">
                <div className="flex justify-center items-start">
                    <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=tapishagrawal&theme=dark&hide_border=true&border_radius=4.8" alt="GitHub Streak" />
                </div>
                <div id="github-stats-card">
                    <img id="github-streak-stats" src="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=tokyonight" />
                </div>
            </div>
        </div>
    )
}
