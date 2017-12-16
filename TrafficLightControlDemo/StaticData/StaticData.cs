using System;
using System.Collections.Generic;
using TrafficLightControlDemo.Models;

namespace TrafficLightControlDemo.StaticData
{
    //this is just mock repository,
    //further I should be migrating this records to DB
    public class StaticData
    {
        public static List<RoadSignal> RoadSignals = new List<RoadSignal>
            {
                new RoadSignal() { Name = "Test 1", Number = 1, Transform = 0 },
                new RoadSignal() { Name = "Test 3", Number = 2, Transform = 90 },
                new RoadSignal() { Name = "Test 3", Number = 3, Transform = 180 },
                new RoadSignal() { Name = "Test 4", Number = 4, Transform = 270 }
        };

        public static SignalSetting SignalSetting = new SignalSetting
        {
            DefaultInterval = 5 * 1000, //5 sec
            StartTime = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 23, 0, 0),
            EndTime = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 5, 0, 0)
        };
    }
}