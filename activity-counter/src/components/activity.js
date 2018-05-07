import '../stylesheets/ui.scss'

const percentToDecimal = decimal => ((decimal * 100) + '%');

const calcGoalProgress = (total, goal) => percentToDecimal(total/goal);

const Activity = ({total, powder, backcountry, goal}) => (

      <div className="ski-day-count">

        <div className="total-days">
          <span>{total} days</span>
        </div>

        <div className="powder-days">
          <span>{powder} powder days</span>
        </div>

        <div className="backcountry-days">
          <span>{backcountry} hiking days</span>
        </div>

        <div>
          <span>
            { calcGoalProgress(total, goal) }
          </span>
        </div>

      </div>
);

export { Activity };
