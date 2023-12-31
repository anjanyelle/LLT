import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import ProgressBar from "react-customizable-progressbar";
import { Link } from "react-router-dom";
import { Chart as GoogleChart } from "react-google-charts";

import { Table, Pagination } from "antd";
import { onShowSizeChange, itemRender } from "../../Pagination";
import {
  awardicon01,
  awardicon04,
  dashboard1,
  dashboard2,
  dashboard3,
  dashboard4,
  dashboardpicimage,
  dashboardpic
} from "../../imagepath";
import Footer from "../../Footer/Footer";
import StepIn from "./StepIn";
import Slider from "./Slider";
import Side1 from "./Side1";
import Tablecomponent from "./Table/Tablecomponent";

const AdminDashboard = () => {
  const [dashboarddata, setdashboarddata] = useState({
    profileData: null,
  });
  const [membershipdata, setmembershipdata] = useState({
    dashboardData: null,
  });

  const [dashboardInvestment, setdashboardInvestment] = useState({
    apiData: "",
    hasdata: false,
    loading: true,
    pageNo: 1,
    pageSize: 6,
    defaultPageSize: 6,
    applicationTimeLinesucess: true,
    applicationTimeLineFiled: false,
  });

  
  const investmentdashboardPagination = (dats) => {
    setdashboardInvestment({
      ...dashboardInvestment,
      defaultPageSize: dats.pageSize,
      pageNo: dats.current,
      pageSize: dats.pageSize,
    });
  };

  // useEffect(() => {
  //   getuserMembershipValidity().then((data) => {
  //     if (data.request.status == 200) {
  //       setmembershipdata({
  //         ...membershipdata,
  //         dashboardData: data,
  //       });
  //     }
  //   });
  //   getUserDetails().then((data) => {
  //     if (data.request.status == 200) {
  //       setdashboarddata({
  //         ...dashboarddata,
  //         profileData: data,
  //       });
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   const response = getDashboardInvestment(
  //     dashboardInvestment.pageNo,
  //     dashboardInvestment.pageSize
  //   );
  //   response.then((data) => {
  //     if (data.request.status == 200) {
  //       setdashboardInvestment({
  //         ...dashboardInvestment,
  //         apiData: data.data,
  //         loading: false,
  //         hasdata:
  //           data.data.lenderWalletHistoryResponseDto.length == 0 ? false : true,
  //       });
  //     }
  //   });
  // }, [dashboardInvestment.pageNo, dashboardInvestment.pageSize]);

  const datasource = [];
  {
    dashboardInvestment.apiData != ""
      ? dashboardInvestment.apiData.lenderWalletHistoryResponseDto.map(
          (data) => {
            datasource.push({
              key: Math.random(),
              Date: data.walletLoaded,
              Description: data.remarks,
              Amount: data.amount,
            });
          }
        )
      : "";
  }

  const [data, setObject] = useState({
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      fill: false,
    },
    dataLabels: {
      enabled: false,
    },
    datasets: {
      id: "apaxcharts-line",
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#3D5EE1", "#70C4CF"],
    borderWidth: 3,
    labels: ["2020", "2021", "2022", "2023"],
  });
  const [series, setSeries] = useState([
    {
      name: "Investment",
      data: [100000, 25000, 1000000, 300000],
    },
    {
      name: "Total Returns",
      data: [120000, 32000, 1300000, 450000],
    },
  ]);

  // Student Chart

  const [dataBar, object] = useState({
    colors: ["#3D5EE1", "#70C4CF"],
    chart: {
      type: "bar",
      height: 350,
      width: "100%",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
        categoryGap: "30%",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    series: [
      {
        name: "Student",
        color: "#70C4CF",
        data: [100000, 100000, 150000, 2000000],
      },
      {
        name: "Escrow",
        color: "#3D5EE1",
        data: [100000, 50000, 60000, 100000],
      },
      {
        name: "Others",
        color: "#3D5EE1",
        data: [0, 1000, 1500000, 1000],
      },
    ],
    labels: [2020, 2021, 2022, 2023, 2024],

    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "100%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 15,
        colors: ["transparent"],
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: "#777",
          },
        },
      },
      title: {
        text: "",
        align: "left",
        style: {
          fontSize: "0px",
        },
      },
    },
  });

  const [studentchart] = useState([
    {
      name: "Student",
      type: "column",
      data: [0, 100000, 150000, 2000000],
    },
    {
      name: "Escrow",
      type: "column",
      data: [1000000, 100000, 150000, 2000000],
    },
    {
      name: "Others",
      type: "column",
      data: [0, 100000, 150000, 2000000],
    },
  ]);

  const [DistributedColumns, SetDistributedColumns] = useState({
    series: [
      {
        name: "",
        data: [300, 100, 50, 50],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {},
        },
      },
      colors: ["#45C4B0", "#3D5EE1", "#70C4CF", "#777"],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Universities"],
          ["Applied Univ"],
          ["success"],
          ["rejected"],
        ],
        labels: {
          style: {
            colors: ["#3D5EE1", "#70C4CF"],
            fontSize: "12px",
          },
        },
      },
    },
  });

  const [treemap, Settreemap] = useState({
    series: [
      {
        name: "",
        data: [2500000, 2000000, 4500000],
        color: "#664DC9",
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        zoom: {
          enabled: false,
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Active Deals", "Closed Deals", "Disbursed Deals"],
      },
    },
  });

  const [investmentTotalEaring, setinvestmentTotalEaring] = useState({
    series: [
      {
        name: "Principal Return",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 62, 66],
      },
      {
        name: "Interest Earning",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 80, 61, 69],
      },
      {
        name: "Referal Earning",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 92, 88, 66],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: ["#237abf", "#5c9b45", "#93B1A6"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        // title: {
        //   text: " My Interest vs Principal vs Earning",
        // },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  });

  const [noofdeals, setnoofdeals] = useState({
    series: [
      {
        name: "Investment ",
        data: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Interest Earnings",
        data: [50, 32, 33, 52, 13, 43, 32, 41, 37, 22, 43, 21],
      },
      {
        name: "Principal Returned",
        data: [90, 17, 11, 9, 15, 11, 20, 41, 37, 22, 43, 21],
      },
      {
        name: "Referral Earnings",
        data: [80, 7, 5, 8, 6, 9, 4, 41, 37, 22, 43, 21],
      },
      {
        name: "Total Earnings",
        data: [96, 12, 19, 32, 25, 24, 10, 41, 37, 22, 43, 21],
      },
    ],
    options: {
      colors: ["#AEC3AE", "#EAC696", "#EEE0C9", "#ADC4CE", "#96B6C5"],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          verticial: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
            },
          },
        },
      },
      stroke: {
        width: 1,
      },
      title: {
        text: "",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          formatter: function (val) {
            return val;
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K";
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: -20,
      },
    },
  });

  const earningProfitInterest = useState({});

  const googledata = [
    [
      { type: "date", id: "Date" },
      { type: "number", id: "Won/Loss" },
    ],

    [new Date(2023, 1, 4), 38177],
    [new Date(2023, 1, 5), 38705],
    [new Date(2023, 1, 12), 38210],
    [new Date(2023, 1, 13), 38029],
    [new Date(2023, 1, 19), 38823],
    [new Date(2023, 1, 23), 38345],
    [new Date(2023, 1, 24), 38436],
    [new Date(2023, 2, 10), 38447],
    [new Date(2023, 11, 10), 38447],
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date - b.Date,
    },
    {
      title: "Description",
      dataIndex: "Description",
      sorter: (a, b) => a.Description.length - b.Description.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount - b.Amount,
    },
  ];
  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <SideBar />

        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header"  
            // style={{marginTop: '4rem'}}
            >
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title text-lowercase">
                      Welcome{" "}
                      {dashboarddata.profileData != null
                        ? dashboarddata.profileData.data.firstName
                        : ""}
                      !
                    </h3>
                    <ul className="breadcrumb" >
                      <li className="breadcrumb-item active">
                        <Link to="/admindashboard">Home</Link>
                      </li>
                      <li className="breadcrumb-item">My Deals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Overview Section */}
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-comman w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-info">
                        <h6>Applied Universities </h6>
                        <h3>
                          {dashboarddata.profileData != null
                            ? dashboarddata.profileData.data
                                .lenderWalletAmount -
                              dashboarddata.profileData.data
                                .holdAmountInDealParticipation -
                              dashboarddata.profileData.data.equityAmount
                            : "0"}
                        </h3>
                      </div>
                      <div className="db-icon">
                        <img
                          src={dashboardpic}
                          alt="Dashboard Icon"
                          height={60}
                          width={60}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-comman w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-info">
                        <h6>Active appliction</h6>
                        <h3>
                          {membershipdata.dashboardData != null
                            ? membershipdata.dashboardData.data
                                .numberOfActiveDealsCount
                            : 1}
                        </h3>
                      </div>
                      <div className="db-icon">
                        <img
                          src={dashboardpicimage}
                          alt="Dashboard Icon"
                          height={60}
                          width={60}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-comman w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-info">
                        <h6>Application Approved</h6>
                        <h3>
                          {membershipdata.dashboardData != null
                            ? membershipdata.dashboardData.data
                                .numberOfClosedDealsCount
                            : 2}
                        </h3>
                      </div>
                      <div className="db-icon">
                        <img
                          src={dashboard1}
                          alt="Dashboard Icon"
                          height={60}
                          width={60}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-comman w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-info">
                        <h6>Rejected Application</h6>
                        <h3>
                          {membershipdata.dashboardData != null
                            ? membershipdata.dashboardData.data
                                .numberOfClosedDealsCount +
                              membershipdata.dashboardData.data
                                .numberOfActiveDealsCount
                            : 3}
                        </h3>
                      </div>
                      <div className="db-icon">
                        <img
                          src={dashboard4}
                          alt="Dashboard Icon"
                          height={60}
                          width={60}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-body">
                    {dashboardInvestment.applicationTimeLinesucess && (
                      <>
                        {" "}
                        <StepIn />
                      </>
                    )}
                    {dashboardInvestment.applicationTimeLineFiled && (
                      <>
                        {" "}
                        <StepIn />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <span className="">
                      <span className="text-bold text-success mx-lg-1">
                        Congratulation : your application is approved for oxford
                        university
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* /Overview Section */}
            <div className="row">
              <div className="col-md-12 col-lg-6">
                {/* Student Chart */}
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h6 className="card-title">Total Universities</h6>
                      </div>
                      {/* <div className="col-7">
                        <ul className="chart-list-out">
                          <li>
                            <span className="circle-green" />
                            Total Lend Amount
                          </li>
                          <li>
                            <span className="circle-blue" />
                            Student
                          </li>
                          <li>
                            <span className="circle-green" />
                            Escow
                          </li>

                          <li className="star-menus">
                            <Link to="#">
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apexcharts-area"></div>
                    <Chart
                      options={DistributedColumns.options}
                      series={DistributedColumns.series}
                      type="bar"
                    />
                  </div>
                </div>

                {/* /Student Chart */}
              </div>

              <div className="col-md-12 col-lg-6">
                {/* Student Chart */}
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h6 className="card-title">Total Universities</h6>
                      </div>
                      {/* <div className="col-7">
                        <ul className="chart-list-out">
                          <li>
                            <span className="circle-green" />
                            Total Lend Amount
                          </li>
                          <li>
                            <span className="circle-blue" />
                            Student
                          </li>
                          <li>
                            <span className="circle-green" />
                            Escow
                          </li>

                          <li className="star-menus">
                            <Link to="#">
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apexcharts-area"></div>

                    <Slider />
                  </div>
                </div>

                {/* /Student Chart */}
              </div>

              <div className="col-md-12 col-lg-6">
                {/* Student Chart */}
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h6 className="card-title">Total Universities</h6>
                      </div>
                      {/* <div className="col-7">
                        <ul className="chart-list-out">
                          <li>
                            <span className="circle-green" />
                            Total Lend Amount
                          </li>
                          <li>
                            <span className="circle-blue" />
                            Student
                          </li>
                          <li>
                            <span className="circle-green" />
                            Escow
                          </li>

                          <li className="star-menus">
                            <Link to="#">
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apexcharts-area"></div>
                    <Chart
                      options={DistributedColumns.options}
                      series={DistributedColumns.series}
                      type="bar"
                    />
                  </div>
                </div>

                {/* /Student Chart */}
              </div>

              <div className="col-12 col-lg-4 col-xl-6 d-flex">
                <div className="card flex-fill comman-shadow">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h5 className="card-title text-center">
                          No of Deals Participated
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="dash-widget d-flex justify-content-center align-items-center">
                    <div className="circle-bar circle-bar">
                      {/* <div className="circle-graph1" data-percent={50}> */}
                      <ProgressBar
                        width={270}
                        radius={75}
                        progress={25}
                        rotate={-180}
                        strokeWidth={10}
                        strokeColor="#70C4CF"
                        strokeLinecap="square"
                        trackStrokeWidth={8}
                        trackStrokeColor="#e6e6e6"
                        trackStrokeLinecap="square"
                        pointerRadius={0}
                        initialAnimation={true}
                        transition="1.5s ease 0.5s"
                        trackTransition="0s ease"
                      >
                        <div className="circle-graph1" data-percent="50">
                          <div className="progress-less teacher-dashboard">
                            <h4>50/200 </h4>
                            <p>Deals Progressed</p>
                          </div>
                        </div>
                      </ProgressBar>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-md-12 d-flex">
                <div className="card flex-fill comman-shadow">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h5 className="card-title text-center">
                          Applied university intake wise : 2023-24
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="dash-widget d-flex justify-content-center align-items-center">
                    <div className="w-100">
                      <GoogleChart
                        chartType="Calendar"
                        loader={<div>Loading Chart</div>}
                        data={googledata}
                        options={{
                          calendar: {
                            dayOfWeekLabel: {
                              fontName: "Times-Roman",
                              fontSize: 12,
                              color: "#1a8763",
                              bold: true,
                              italic: true,
                            },
                            cellColor: {
                              stroke: "#76a7fa",
                              strokeOpacity: 0.5,
                              strokeWidth: 1,
                            },

                            dayOfWeekRightSpace: 10,
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-12">
                {/* Student Chart */}

                {/* /Student Chart */}
              </div>

              <div className="col-md-12 col-lg-12" style={{ display: "none" }}>
                {/* Student Chart */}
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h6 className="card-title">My Activities : 2023</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apexcharts-area"></div>
                    <Chart
                      options={noofdeals.options}
                      series={noofdeals.series}
                      type="bar"
                      height={420}
                    />
                  </div>
                </div>

                {/* /Student Chart */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 d-flex">
                {/* Star Students */}
                {/* <div className="card flex-fill student-space comman-shadow">
                  <div className="card-header d-flex align-items-center">
                    <h5 className="card-title">Investment / Wallet</h5>
                    <ul className="chart-list-out student-ellips">
                      <li className="star-menus">
                        <Link to="#">
                          <i className="fas fa-ellipsis-v" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div>
                      <Table
                        className="table-responsive table-responsive-md table-responsive-lg table-responsive-xs"
                        pagination={{
                          total: dashboardInvestment.apiData.countValue,
                          defaultPageSize: dashboardInvestment.defaultPageSize,
                          position: ["topRight"],
                          showSizeChanger: false,
                          onShowSizeChange: onShowSizeChange,
                          size: "default",
                          showLessItems: true,
                          pageSizeOptions: [5, 10, 15, 20],
                          responsive: true,
                        }}
                        columns={columns}
                        expandable={true}
                        dataSource={
                          dashboardInvestment.hasdata ? datasource : []
                        }
                        loading={dashboardInvestment.loading}
                        onChange={investmentdashboardPagination}
                      />
                    </div>
                  </div>
                </div> */}
                {/* /Star Students */}
              </div>
              <div className="col-xl-6 d-flex">
                {/* Feed Activity */}
                {/* <div className="card flex-fill comman-shadow">
                  <div className="card-header d-flex align-items-center">
                    <h5 className="card-title ">Current Running Deals</h5>
                    <ul className="chart-list-out student-ellips">
                      <li className="star-menus">
                        <Link to="#">
                          <i className="fas fa-ellipsis-v" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="activity-groups">
                      <div className="activity-awards">
                        <div className="award-boxs">
                          <img src={awardicon01} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>Student Deal : SD 3S 30L - 13APR23</h4>
                          <h5> Min : 5000, max : 100000, RoI : 2.2% PM</h5>
                        </div>
                        <div className="award-time-list">
                          <span>Participate</span>
                        </div>
                      </div>
                      <div className="activity-awards">
                        <div className="award-boxs">
                          <img src={awardicon01} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>Student Deal : 20 SD Ameena 10L</h4>
                          <h5> Min : 5000, max : 100000, RoI : 1.2% PM</h5>
                        </div>
                        <div className="award-time-list">
                          <span>Participate</span>
                        </div>
                      </div>
                      <div className="activity-awards">
                        <div className="award-boxs">
                          <img src={awardicon01} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>Student Deal : SD 4S 40L - 15APR23</h4>
                          <h5> Min : 5000, max : 100000, RoI : 1.5% PM</h5>
                        </div>
                        <div className="award-time-list">
                          <span>Participate</span>
                        </div>
                      </div>
                      <div className="activity-awards">
                        <div className="award-boxs">
                          <img src={awardicon04} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>Escrow Deal : SD 2S 20L - 04JAN22</h4>
                          <h5> Min : 5000, max : 1000000, ROI : 1.75% PM</h5>
                        </div>
                        <div className="award-time-list">
                          <span>Participate</span>
                        </div>
                      </div>
                      <div className="activity-awards">
                        <div className="award-boxs">
                          <img src={awardicon04} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>Escrow Deal : SD 2S 20L - 04JAN22</h4>
                          <h5> Min : 5000, max : 1000000, ROI : 1.75% PM</h5>
                        </div>
                        <div className="award-time-list">
                          <span>Participate</span>
                        </div>
                      </div>

                      <div className="activity-awards">
                        <div className="award-boxs">
                          <img src={awardicon04} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>Escrow Deal : SD 2S 20L - 04JAN22</h4>
                          <h5> Min : 5000, max : 1000000, ROI : 1.75% PM</h5>
                        </div>
                        <div className="award-time-list">
                          <span>Participate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* /Feed Activity */}
              </div>
            </div>
            <div className="row">
            <div className="col-xl-4 d-flex">
              <div className="column">
                <div class="card cardimages" style={{ width: "18.9rem", height:'9rem' }}>
                  <img
                    src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png"
                    className="personimage"
                    alt="imagescard"
                    style={{
                      height: "4rem",
                      width: "4rem",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                  <div class="card-body">
                    <h5 >Hari krishna </h5>
                    <p className="client">Client Executive</p>
                    <span className="clientnum">
                      {" "}
                      <i class="bi bi-telephone-forward"></i> +91 9056772856
                    </span>
                  </div>
                </div>
                <div class="card cardimages" style={{ width: "19rem", height:'9rem' }}>
                  <img
                    src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png"
                    className="personimage"
                    alt="imagescard"
                    style={{
                      height: "4rem",
                      width: "4rem",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                  <div class="card-body">
                    <h5>Sai Kumar Gutti </h5>
                    <p className="client">HR MANAGER</p>
                    <span className="clientnum">
                      {" "}
                      <i class="bi bi-telephone-forward"></i> +91 9056772856
                    </span>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-xl-8 d-flex">
                <div class="card" style={{ width: "100%" }}>
                  <div class="card-body ">
                    <div className="gridcol">
                      <div className="gridrow">
                        <h5>My Applications</h5>
                        <h6>Adler University,Canada</h6>
                        <p className="client" >Intake: Dec,2022</p>
                        <div>
                          <p className="client" style={{paddingTop:'0.5rem'}}>
                            <strong>PREFERRED COURSE</strong>
                          </p>
                          <p className="client">
                            Master of Public Policy & Administration London,
                          </p>
                          <p className="client">
                            <strong>APPLIED COURSE</strong>
                          </p>
                          <p className="client">Not Applied Yet</p>
                          <p className="client">Created on: 03-Nov-2022</p>
                        </div>
                      </div>
                   
                    <button className="btn btn-primary" type="submit" style={{height:'2.3rem'}}>
                      {" "}
                       Cancel Withdrawn
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
              <div className="col-xl-6 d-flex">
                <div class="card "   >
                  <div class="card-body">
                    <h6 style={{textAlign:'center'}} className="combo1">Congratulations </h6>
                    <h4 className="client client2 combo" >Hari krishna</h4>
                    <p className="client client2">You have saved</p>
                    <h4 className="client client2 combo1  ">USD $150</h4>

                 <Tablecomponent />
                  </div>
                </div>
              </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default AdminDashboard;
