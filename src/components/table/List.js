import "./table.css";
import React from "react";
import Pagination from "./Pagination";
class List extends React.Component {
  state = {
    activePage: 1,
    dataToDisplay: [],
    searchTerm: "",
  };
  componentDidMount() {
    const { data } = this.props;
    this.setState({ dataToDisplay: data });
  }
  paginatedData = () => {
    const { dataToDisplay, activePage } = this.state;
    const ind = (activePage - 1) * 10;
    return dataToDisplay.slice(ind, ind + 10);
  };

  sortData = (type) => {
    console.log({ type });
    const { dataToDisplay } = this.state;
    const data = dataToDisplay.sort((a, b) => {
      return a[type] - b[type];
    });
    this.setState({
      dataToDisplay: data,
    });
  };

  setActivePage = (val) => {
    this.setState({ activePage: val });
  };

  updateSearchTerm = (e) => {
    this.setState(
      {
        searchTerm: e.target.value,
      },
      () => {
        this.searchResults();
      }
    );
  };

  searchResults = () => {
    const { searchTerm } = this.state;
    const { data } = this.props;
    if (searchTerm) {
      const searchData = data.filter((data) =>
        data.Country.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
      this.setState({ dataToDisplay: searchData });
    }else  this.setState({ dataToDisplay: data });
  };

  render() {
    const { data, columns } = this.props;
    const { activePage, searchTerm } = this.state;

    const pageSize = 10;
    const pages = data.length / pageSize;

    return (
      <div className="w-80 m-auto">
        <input
          value={searchTerm}
          type="search"
          placeholder="Search Country"
          onChange={this.updateSearchTerm}
          style={{margin:"16px auto"}}
        />
        <table>
          <tr>
            {columns.length > 0 &&
              columns.map((header) => (
                <th
                  key={header.id}
                  onClick={() => this.sortData(header.key)}
                  style={{ cursor: "pointer" }}
                >
                  {header.title}
                </th>
              ))}
          </tr>

          {this.paginatedData().length > 0 &&
            this.paginatedData().map((row, index) => (
              <tr key={`${index}-row`}>
                {columns.map((column, index) => (
                  <td key={index}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
        </table>
        <Pagination
          pages={pages}
          currentPage={activePage}
          setActivePage={this.setActivePage}
        />
      </div>
    );
  }
}

export default List;
