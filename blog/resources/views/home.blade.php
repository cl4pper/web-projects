@extends('layouts.app')

@section('content')
  <div class="container">
      <div class="row">
          <div class="col-md-10 col-md-offset-1">
              <Box title="Dashboard" footer="It's all about sports...and we know it.">
                  <div class="row">
                      <div class="col-md-3">
                          <Box title="MLB" footer="Let's play ball">
                              <p>Teams</p>
                              <p>Stats</p>
                              <p>Schedule</p>
                              <div class="icon">
                                  <i class="ion ion-ios-baseball"></i>
                              </div>
                          </Box>
                      </div>
                      <div class="col-md-3">
                          <Box title="NFL" footer="Hit harder">
                              <p>Teams</p>
                              <p>Stats</p>
                              <p>Schedule</p>
                              <div class="icon">
                                  <i class="ion ion-ios-americanfootball"></i>
                              </div>
                          </Box>
                      </div>
                      <div class="col-md-3">
                          <Box title="NBA" footer="From the streets">
                              <p>Teams</p>
                              <p>Stats</p>
                              <p>Schedule</p>
                              <div class="icon">
                                  <i class="ion ion-ios-basketball"></i>
                              </div>
                          </Box>
                      </div>
                      <div class="col-md-3">
                          <Box title="MLS" footer="The world biggest">
                              <p>Teams</p>
                              <p>Stats</p>
                              <p>Schedule</p>
                              <div class="icon">
                                  <i class="ion ion-ios-football"></i>
                              </div>
                          </Box>
                      </div>
                  </div>
              </Box>
          </div>
      </div>
  </div>
@endsection
