import "./list.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import SearchItem from "../../Components/SearchItems/SearchItem";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [viewCalendar, setViewCalendar] = useState(false);
  const calendarViewer = () => {
    if (viewCalendar) setViewCalendar(false);
    else setViewCalendar(true);
  };
  return (
    <>
      <Navbar />
      <Header list={null} />
      <div className="listDiv">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Filter</h1>
            <div className="lsItem lsItemFirst">
              <label htmlFor="" className="labDestination">
                Destination
              </label>
              <input
                type="text"
                className="InDestination"
                value={destination}
              />
            </div>
            <div className="lsItem lsItemSecond">
              <label htmlFor="" className="labCheckinDate">
                Check-in Date
              </label>
              {viewCalendar && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="datePicker"
                />
              )}
              <span className="dateSet" onClick={calendarViewer}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            </div>
            <div className="lsItem">
              <span className="labOptions">Options</span>
              <div className="lsOptions">
                <div className="OpmaxPrice">
                  <label htmlFor="" className="labMaxPrice">
                    Max Price <span className="lbSmall">(per night)</span>
                  </label>
                  <input type="text" className="inMaxPrice" />
                </div>
                <div className="OpminPrice">
                  <label htmlFor="" className="labMinPrice">
                    Min Price <span className="lbSmall">(per night)</span>
                  </label>
                  <input type="text" className="inMinPrice" />
                </div>
                <div className="Opadult">
                  <label htmlFor="" className="labAdult">
                    Adult:
                  </label>
                  <input
                    type="text"
                    className="inAdult"
                    value={options.adult}
                  />
                </div>
                <div className="Opchild">
                  <label htmlFor="" className="labChild">
                    Children:
                  </label>
                  <input
                    type="text"
                    className="inChild"
                    value={options.children}
                  />
                </div>
                <div className="Oproom">
                  <label htmlFor="" className="labRoom">
                    Room:
                  </label>
                  <input type="text" className="inroom" value={options.room} />
                </div>
              </div>
            </div>
            <div className="lsItem lsLastItem">
              <button className="searchBtn">Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
