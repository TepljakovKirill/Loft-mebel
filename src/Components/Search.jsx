import React from "react";
import Logo from "../img/logo.svg";

function Search() {
  return (
    <div className="container">
      <div className="content flex">
        <a href="#">
          <img src={Logo} alt="Логотип" />
        </a>
        <form className="flex">
          <button type="button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M15 15L11 11M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13Z"
                stroke="black"
              />
            </svg>
          </button>
          <input
            type="text"
            name="text"
            className="search"
            placeholder="Поиск"
          />
        </form>
        <div className="content__icon">
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none">
            <path
              d="M2.467 9.55034L10.9167 18L19.3663 9.55034C20.3056 8.61103 20.8333 7.33706 20.8333 6.00867C20.8333 3.24246 18.5909 1 15.8247 1C14.4963 1 13.2223 1.5277 12.283 2.46701L10.9167 3.83333L9.55034 2.46701C8.61103 1.5277 7.33706 1 6.00867 1C3.24246 1 1 3.24246 1 6.00867C1 7.33706 1.5277 8.61103 2.467 9.55034Z"
              stroke="black"
            />
          </svg>
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
            <path
              d="M4.70653 5.5V4.85714C4.70653 2.7269 6.43343 1 8.56367 1C10.6939 1 12.4208 2.7269 12.4208 4.85714V5.5M2.00802 8.5723L1.00802 17.5723C0.923392 18.3339 1.51957 19 2.28587 19H14.8415C15.6078 19 16.2039 18.3339 16.1193 17.5723L15.1193 8.5723C15.047 7.92117 14.4966 7.42857 13.8415 7.42857H3.28587C2.63073 7.42857 2.08036 7.92117 2.00802 8.5723Z"
              stroke="black"
            />
          </svg>
          <svg width="15" height="20" viewBox="0 0 15 20" fill="none">
            <path
              d="M11.2924 4.85714C11.2924 6.98757 9.56458 8.71428 7.43276 8.71428C5.30094 8.71428 3.5731 6.98757 3.5731 4.85714C3.5731 2.72671 5.30094 1 7.43276 1C9.56458 1 11.2924 2.72671 11.2924 4.85714Z"
              stroke="black"
            />
            <path
              d="M13.8655 19H1C1 18.0865 1 17.2174 1 16.4304C1 14.2988 2.72803 12.5714 4.85966 12.5714H10.0059C12.1375 12.5714 13.8655 14.2988 13.8655 16.4304C13.8655 17.2174 13.8655 18.0865 13.8655 19Z"
              stroke="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
