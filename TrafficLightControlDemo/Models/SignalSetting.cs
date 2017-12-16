using System;

namespace TrafficLightControlDemo.Models
{
    public class SignalSetting
    {
        public int DefaultInterval { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}