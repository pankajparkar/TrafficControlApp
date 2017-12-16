using System.Collections.Generic;
using System.Web.Http;
using TrafficLightControlDemo.Models;
using TrafficLightControlDemo.StaticData;

namespace TrafficLightControlDemo.Controllers
{
    public class RoadSignalController : ApiController
    {
        public List<RoadSignal> Get()
        {
            return StaticData.StaticData.RoadSignals;
        }

        public RoadSignal GetSignalRoad(int id)
        {
            return StaticData.StaticData.RoadSignals.Find(item => item.Number == id);
        }

        public void Save(RoadSignal roadSignal)
        {
            try
            {
                var currentRoadSignal = StaticData.StaticData.RoadSignals.Find(item => item.Number == roadSignal.Number);
                if (currentRoadSignal != null) {
                    currentRoadSignal.Name = roadSignal.Name;
                    currentRoadSignal.Interval = roadSignal.Interval;
                }
            }
            catch (System.Exception)
            {
                throw;
            }
        }
    }
}