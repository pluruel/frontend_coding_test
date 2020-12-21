import React from "react";
import "./index.css";
/**
 *
 * Todo is for describing items for TODO List
 *
 * @param {number} created
 * @param {string} title
 * @param {string} text
 * @param {number} duetime
 */

class Todo extends React.PureComponent {
  /**
   * convert func to get easy-read format from number.
   *
   * @param {number} created
   * @returns {Array<string>} [date, time]
   */
  splitISOStrToDateTime = (created) => {
    const time = new Date(created).toISOString().slice(0, 19);
    return time.split("T");
  };

  render() {
    const { created, title, text, duetime } = this.props;
    const [date, time] = this.splitISOStrToDateTime(created);

    return (
      <div
        style={{
          display: "flex",
          height: "55px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.26), 0 2px 5px rgba(0,0,0,0.34)",
          borderRadius: "2px",
          margin: "5px",
        }}
      >
        <div className="cells" style={{ width: "20%" }}>
          <div>
            <div>{date}</div>
            <div>{time}</div>
          </div>
        </div>
        <div
          className={"cells"}
          style={{
            width: "15%",
          }}
        >
          {title}
        </div>
        <div className={"cells"} style={{ width: "30%" }}>
          {text}
        </div>
        <div className={"cells"} style={{ width: "25%" }}>
          -
        </div>
      </div>
    );
  }
}

export default Todo;
