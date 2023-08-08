const Dashboard = () => {
    return (
        <div className="container-fluid p-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-3 counter-section">
              <div className="row">
                <div className="col-6 col-sm-3">
                  <div className="card widget-flat">
                    <div className="card-body">
                      <h5
                        className="text-muted mt-0 card-title"
                        title="Number of Customers"
                      >
                        Customers (Last 7 days)
                      </h5>
                      <h3 className="my-3 card-subtitle">36,254</h3>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-3">
                  <div className="card widget-flat">
                    <div className="card-body">
                      <h5
                        className="text-muted mt-0 card-title"
                        title="Number of Customers"
                      >
                        Orders (Last 7 days)
                      </h5>
                      <h3 className="my-3 card-subtitle">227</h3>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-3">
                  <div className="card widget-flat">
                    <div className="card-body">
                      <h5
                        className="text-muted mt-0 card-title"
                        title="Number of Customers"
                      >
                        Revenue (Last 7 days)
                      </h5>
                      <h3 className="my-3 card-subtitle">77,270</h3>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-3">
                  <div className="card widget-flat">
                    <div className="card-body">
                      <h5
                        className="text-muted mt-0 card-title"
                        title="Number of Customers"
                      >
                        Items
                      </h5>
                      <h3 className="my-3 card-subtitle">36,254</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-3 timeline-section">
              <div className="card">
                <div className="d-flex card-header justify-content-between align-items-center">
                  <h4 className="header-title">Open Requests </h4>
                </div>

                <div
                  className="timeline-card-body card-body py-0 mb-3"
                  data-simplebar="init"
                >
                  <div className="simplebar-wrapper">
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        // style="right: 0px; bottom: 0px;"
                      >
                        <div
                          className="simplebar-content-wrapper"
                          tabIndex="0"
                          role="region"
                          aria-label="scrollable content"
                        //   style="height: auto; overflow: hidden scroll;"
                        >
                          <div
                            className="simplebar-content"
                            // style="padding: 0px 24px;"
                          >
                            <div className="timeline-alt py-2">

                              <div className="timeline-item">
                                <div className="timeline-item-info">
                                  <p className="timeline-item-title adrianna-bold m-0">
                                    Polish White Venue - Neeraj Keswani
                                  </p>
                                  <small className="text-muted">
                                    Requirements - Polish, Wash, Interiors check.
                                  </small>
                                  <p className="mb-0 pb-2">
                                    <small className="text-muted">
                                      10:27 am, 27/03/2023
                                    </small>
                                  </p>
                                </div>
                                <div className="timeline-item-action">
                                    <button className="btn btn-primary">
                                        Change Status
                                    </button>
                                </div>
                              </div>
                              <div className="timeline-item">
                                <div className="timeline-item-info">
                                  <p className="timeline-item-title adrianna-bold m-0">
                                    Polish White Venue - Neeraj Keswani
                                  </p>
                                  <small className="text-muted">
                                    Requirements - Polish, Wash, Interiors check.
                                  </small>
                                  <p className="mb-0 pb-2">
                                    <small className="text-muted">
                                      10:27 am, 27/03/2023
                                    </small>
                                  </p>
                                </div>
                                <div className="timeline-item-action">
                                    <button className="btn btn-primary">
                                        Change Status
                                    </button>
                                </div>
                              </div>
                              <div className="timeline-item">
                                <div className="timeline-item-info">
                                  <p className="timeline-item-title adrianna-bold m-0">
                                    Polish White Venue - Neeraj Keswani
                                  </p>
                                  <small className="text-muted">
                                    Requirements - Polish, Wash, Interiors check.
                                  </small>
                                  <p className="mb-0 pb-2">
                                    <small className="text-muted">
                                      10:27 am, 27/03/2023
                                    </small>
                                  </p>
                                </div>
                                <div className="timeline-item-action">
                                    <button className="btn btn-primary">
                                        Change Status
                                    </button>
                                </div>
                              </div>
                              <div className="timeline-item">
                                <div className="timeline-item-info">
                                  <p className="timeline-item-title adrianna-bold m-0">
                                    Polish White Venue - Neeraj Keswani
                                  </p>
                                  <small className="text-muted">
                                    Requirements - Polish, Wash, Interiors check.
                                  </small>
                                  <p className="mb-0 pb-2">
                                    <small className="text-muted">
                                      10:27 am, 27/03/2023
                                    </small>
                                  </p>
                                </div>
                                <div className="timeline-item-action">
                                    <button className="btn btn-primary">
                                        Change Status
                                    </button>
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Dashboard;